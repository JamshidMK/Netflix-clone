import React, { useEffect, useState } from "react";
import Top10Badge from "../assets/images/Top10Badge.png";
import { PlayIcon } from "@heroicons/react/16/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Card from "../Components/Card.jsx";

const Hero = ({
  randomImageUrl,
  randomMovie,
  movieList,
  base_image_url,
  setRandomMovie,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  randomIndex,
  setRandomIndex,
  watched,
  setWatched,
}) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showTop10, setShowTop10] = useState(true);

  const play = (movie, mediaType) => {
    if (movie) {
      const randomMovieId = movie.id;
      // Fetch the trailer for the selected movie
      const videoKey = fetchTrailer(randomMovieId, mediaType);
      videoKey.then((key) => {
        if (key) {
          setVideoUrl(key);
          setShowTrailer(true);
        } else {
          alert("No trailer available for this movie.");
        }
      });
      if (!watched.includes(movie)) {
        setWatched((prevWatched) => [...prevWatched, movie]);
      }
    }
  };

  const moreInfo = () => {
    setShowInfo((prevInfo) => !prevInfo);
  };

  useEffect(() => {
    if (randomIndex + 1 > 10) {
      setShowTop10(false);
    } else {
      setShowTop10(true);
    }
  }, [randomIndex]);

  return (
    <section id="home">
      <div
        className="relative bg-[#141414] bg-cover bg-center bg-no-repeat shadow-[inset_4px_4px_50px_10px_#141414] min-h-screen flex flex-col justify-center text-white -mt-[126px] xl:-mt-[82px]"
        style={{ backgroundImage: `url(${randomImageUrl})` }}
      >
        <div className="flex flex-col gap-3 m-[30px] xl:m-[60px] relative -mb-[150px] z-10">
          <h1 className="text-5xl xl:text-7xl font-bold text-border">
            {randomMovie?.title || "Title"}
          </h1>
          <div className="flex items-center gap-3">
            {showTop10 && (
              <img src={Top10Badge} alt="Top10" className="shadow-sm" />
            )}
            <p className="xl:text-2xl text-shadow-sm">{`Top #${
              randomIndex + 1
            } Movie`}</p>
          </div>
          {showInfo && (
            <p className="custom-scrollbar xl:text-2xl overflow-hidden overflow-y-scroll h-[50px] xl:h-[70px] w-[300px] xl:w-[500px] text-shadow-sm">
              {randomMovie?.overview || ""}
            </p>
          )}
          <div className="flex gap-3 text-[#141414]">
            <button
              onClick={() =>
                play(
                  randomMovie,
                  randomMovie.media_type ? randomMovie.media_type : "movie"
                )
              }
              className="bg-white h-[40px] w-max py-3 xl:py-4 px-8 xl:px-10 flex justify-center items-center gap-2 rounded-xl font-medium cursor-pointer hover:scale-105 hover:bg-[rgba(255,255,255,0.85)] transition shadow-xl"
            >
              <PlayIcon className="size-5 xl:size-6 font-medium" />
              Play
            </button>
            <button
              onClick={moreInfo}
              className="bg-[rgba(255,255,255,.5)] h-[40px] w-max py-3 xl:py-4 px-8 xl:px-10 flex justify-center items-center gap-2 rounded-xl font-medium cursor-pointer hover:scale-105 hover:bg-[rgba(255,255,255,.85)] transition shadow-xl"
            >
              <InformationCircleIcon className="size-5 xl:size-6 font-medium" />
              More info
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-[200px]">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-2xs blur-2xl z-0"></div>
          <div className="relative z-10 w-full h-full flex">
            <Card
              List={movieList}
              title="Popular Movies"
              base_image_url={base_image_url}
              setRandomMovie={setRandomMovie}
              setRandomIndex={setRandomIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
