import React from "react";
import useFetchDetails from "../hooks/useFetchDetails";
import { IoClose } from "react-icons/io5";
function VideoPlay({ data, close, media_type }) {
  const { data: videoData } = useFetchDetails(
    `/${media_type}/${data?.id}/videos`
  );
  const videoKey = videoData?.results?.length
    ? videoData.results[0]?.key
    : null;
  console.log(videoData.results);
  return (
    <section className="fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 z-40 bg-opacity-50 flex items-center justify-center">
      <div className="bg-black w-full max-h-[80vh] max-w-screen-lg aspect-video rounded relative">
        <button
          onClick={close}
          className=" absolute -right-1 -top-6 text-3xl z-50"
        >
          <IoClose />
        </button>
        {videoKey ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoKey}`}
            className="w-full h-full"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-white text-center mt-5">No video available</p>
        )}
      </div>
    </section>
  );
}

export default VideoPlay;
