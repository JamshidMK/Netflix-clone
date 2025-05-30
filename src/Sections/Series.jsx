import React from "react";
import Card from "../Components/Card";

const Series = ({
  watched,
  setWatched,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  base_image_url,
  tvList,
  originals,
}) => {
  return (
    <div id="tv-shows" className="bg-[#141414] h-min w-screen text-white ">
      {watched.length > 0 && (
        <div className="w-full relative flex h-[200px]">
          <Card
            List={watched}
            title="Keep Watching"
            base_image_url={base_image_url}
            fetchTrailer={fetchTrailer}
            setVideoUrl={setVideoUrl}
            setShowTrailer={setShowTrailer}
            play
          />
        </div>
      )}
      <div id="Tv-shows" className="w-full relative flex h-[200px]">
        <Card
          List={tvList}
          setWatched={setWatched}
          watched={watched}
          title="Tv Shows"
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          type="tv"
          play
        />
      </div>
      <div id="Tv-shows" className="w-full relative flex h-[500px]">
        <Card
          List={originals}
          setWatched={setWatched}
          title="Netflix Originals"
          watched={watched}
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          type="tv"
          style="h-[400px] w-[200px]"
          poster
          play
        />
      </div>
    </div>
  );
};

export default Series;
