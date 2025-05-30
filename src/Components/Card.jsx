import React, { useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import Rank1 from "../assets/images/Rank-01.png";
import Rank2 from "../assets/images/Rank-02.png";
import Rank3 from "../assets/images/Rank-03.png";
import Rank4 from "../assets/images/Rank-04.png";
import Rank5 from "../assets/images/Rank-05.png";
import Rank6 from "../assets/images/Rank-06.png";
import Rank7 from "../assets/images/Rank-07.png";
import Rank8 from "../assets/images/Rank-08.png";
import Rank9 from "../assets/images/Rank-09.png";
import Rank10 from "../assets/images/Rank-10.png";

const Card = ({
  List = [],
  title,
  base_image_url,
  setRandomMovie,
  setRandomIndex,
  setWatched,
  watched,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  type,
  style,
  poster,
  top,
  play,
}) => {
  const scrollRef = useRef();

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -1200 : 1200,
      behavior: "smooth",
    });
  };

  const playTrailer = (item, mediaType) => {
    if (item) {
      const itemId = item.id;
      // Fetch the trailer for the selected item
      const videoKey = fetchTrailer(itemId, mediaType);
      videoKey.then((key) => {
        if (key) {
          setVideoUrl(key);
          setShowTrailer(true);
        } else {
          alert("No trailer available for this item.");
        }
      });
      if (!watched.includes(item)) {
        setWatched((prevWatched) => [...prevWatched, item]);
      }
    }
  };

  const rank = [
    Rank1,
    Rank2,
    Rank3,
    Rank4,
    Rank5,
    Rank6,
    Rank7,
    Rank8,
    Rank9,
    Rank10,
  ];

  return (
    <>
      <div className="w-full flex flex-col justify-center gap-5 overflow-hidden">
        <h1 className="text-2xl font-bold mx-[30px] xl:mx-[60px]">{title}</h1>
        <span className="w-full flex justify-between items-center">
          <ChevronLeftIcon
            onClick={() => handleScroll("left")}
            className="opacity-50 cursor-pointer size-10 xl:size-16 relative hover:scale-110 transition active:fill-[#808080]"
          />

          <div
            ref={scrollRef}
            className={`w-full flex items-center ${
              top ? "gap-4 xl:gap-6" : "gap-3 xl:gap-5"
            } overflow-x-auto whitespace-nowrap webkit-scrollbar-hide`}
          >
            {List.length === 0 ? (
              <div className="text-white w-full">No movies available</div>
            ) : (
              List.map((item, index) => (
                <div key={item.id} className={`${top && "flex -space-x-1"}`}>
                  {top && (
                    <div className="flex items-center h-[200px] w-[150px]">
                      <img src={rank[index]} alt={index + 1} />
                    </div>
                  )}
                  <div
                    key={item.id}
                    onClick={() => (
                      setRandomMovie && setRandomMovie(item),
                      setRandomIndex && setRandomIndex(index),
                      play &&
                        playTrailer(
                          item,
                          item.media_type ? item.media_type : type
                        )
                    )}
                    className={`bg-[#808080] ${
                      style
                        ? style
                        : "h-[100px] w-[200px] xl:h-[120px] xl:w-[240px]"
                    } cursor-pointer shadow-2xl rounded-sm flex items-center justify-center overflow-hidden relative`}
                  >
                    <img
                      src={`${
                        poster
                          ? base_image_url + item.poster_path
                          : base_image_url + item.backdrop_path
                      }`}
                      alt={item.title || "No Title"}
                      className="h-full w-full object-cover hover:scale-107 hover:shadow-4xl transition-transform duration-200 will-change-transform active:opacity-30"
                    />
                    {top || (
                      <h1 className="absolute bottom-[8px] left-[12px] text-wrap font-bold text-border">
                        {item.title || item.name || "No Title"}
                      </h1>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
          <ChevronRightIcon
            onClick={() => handleScroll("right")}
            className="opacity-50 cursor-pointer size-10 xl:size-16 hover:scale-110 transition active:fill-[#808080]"
          />
        </span>
      </div>
    </>
  );
};

export default Card;
