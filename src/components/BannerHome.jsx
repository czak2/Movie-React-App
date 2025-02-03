import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function BannerHome() {
  const bannerData = useSelector((state) => state.movieo.bannerData);
  const imageUrl = useSelector((state) => state.movieo.imageUrl);
  const [currentImage, setCurrentImage] = useState(0);
  const handleNext = () => {
    if (currentImage < bannerData.length - 1) {
      setCurrentImage((prev) => prev + 1);
    }
  };
  const handlePrevious = () => {
    if (currentImage > 0) {
      setCurrentImage((prev) => prev - 1);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 50000);
    return () => clearInterval(interval);
  }, [bannerData, imageUrl, currentImage]);
  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "bannerhome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all "
              style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
              <div className="h-full w-full">
                <img
                  src={imageUrl + data.backdrop_path}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 lg:flex">
                <button
                  className="bg-white  p-1 rounded-full  text-xl z-10 text-black"
                  onClick={handlePrevious}
                >
                  <FaAngleLeft />
                </button>
                <button
                  className="bg-white  p-1 rounded-full  text-xl z-10 text-black"
                  onClick={handleNext}
                >
                  <FaAngleRight />
                </button>
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto">
                <div className="w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl ">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating:{Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>View : {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <Link>
                    <button className=" bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                      Play Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default BannerHome;
