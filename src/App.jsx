import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { movieoActions } from "./store/movieSlice";

function App() {
  const dispatch = useDispatch();
  const fetchTrendingData = async () => {
    try {
      const response = await axios.get("/trending/all/week");
      dispatch(movieoActions.setBannerData(response.data.results));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTrendingData();
  }, []);
  return (
    <main className="pb-14 lg:pb-0">
      <Header></Header>
      <div className="mt-16">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
      <MobileNavigation></MobileNavigation>
    </main>
  );
}

export default App;
