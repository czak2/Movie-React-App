import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { navigation } from "../constants/Navigation";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
function Header() {
  const location = useLocation();
  //const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const removeSpace = decodeURIComponent(location?.search?.slice(3) || "");

  const [searchInput, setSearchInput] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?q=${searchInput}`);
    }
  }, [searchInput]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 bg-neutral-600 w-full h-16 bg-opacity-70 z-40">
      <div className="container mx-auto px-3 h-full flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((item, index) => {
            return (
              <div key={item.id}>
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `px-2 hover:text-neutral-100 ${
                      isActive && "text-neutral-100"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-5">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search Here.."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button className="text-2xl text-white hidden lg:block">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-9 h-9 rounded-full cursor-pointer active:scale-50 transition-all overflow-hidden">
            <img src={user} alt="user" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
