import React from "react";
import BannerHome from "../components/BannerHome";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";

function Home() {
  const trendingData = useSelector((state) => state.movieo.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: topRatedData } = useFetch("/movie/top_rated");
  const { data: popularTvShowData } = useFetch("/tv/popular");
  return (
    <div>
      <BannerHome></BannerHome>
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trending"}
        trending={true}
      ></HorizontalScrollCard>

      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Now Playing"}
        media_type={"movie"}
      ></HorizontalScrollCard>
      <HorizontalScrollCard
        data={topRatedData}
        heading={"Top Rated"}
        media_type={"movie"}
      ></HorizontalScrollCard>
      <HorizontalScrollCard
        data={popularTvShowData}
        heading={"Popular Tv Shows"}
        media_type={"tv"}
      ></HorizontalScrollCard>
    </div>
  );
}

export default Home;
