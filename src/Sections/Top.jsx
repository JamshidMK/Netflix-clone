import React from "react";
import Card from "../Components/Card";

const Top = ({
  watched,
  setWatched,
  trending,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  base_image_url,
  upcoming,
  watchList,
}) => {
  const topTrending = trending.slice(0, 10);

  return (
    <div id="popular" className="bg-[#141414] h-min w-screen pb-[40px] xl:pb-[60px] text-white ">
      <div id="Trending" className="w-full relative flex h-[350px]">
        <Card
          List={topTrending}
          setWatched={setWatched}
          title="Trending Today"
          watched={watched}
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          type="tv"
          style="h-[200px] w-[150px]"
          top
          poster
          play
        />
      </div>
      <div id="Upcoming" className="w-full relative flex h-[200px]">
        <Card
          List={upcoming}
          setWatched={setWatched}
          title="Upcoming"
          watched={watched}
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          type="movie"
          play
        />
      </div>
      <div id="List" className="w-full relative flex h-[200px]">
        <Card
          List={watchList}
          setWatched={setWatched}
          title="My List"
          watched={watched}
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          play
        />
      </div>
    </div>
  );
};

export default Top;
