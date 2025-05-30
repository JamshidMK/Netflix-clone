import { ArrowLeftCircleIcon, StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const SearchDisplay = ({
  searchList,
  searchInput,
  setSearchInput,
  setIsShowSearch,
  base_image_url,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  watched,
  setWatched,
}) => {
  const list = searchList.filter(
    (item) => item.media_type === "movie" || item.media_type === "tv"
  );

  const back = () => {
    setIsShowSearch(false);
    setSearchInput("");
  };

  const play = (item, mediaType) => {
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

  return (
    <div className="bg-[#141414] fixed z-50 w-full min-h-screen max-h-screen overflow-y-auto custom-scrollbar">
      <ArrowLeftCircleIcon
        onClick={back}
        className="text-white size-8 absolute top-4 left-8 xl:left-15"
      />
      {searchInput && (
        <h1 className="text-2xl text-white absolute top-15 left-8 xl:left-15">
          Search: {searchInput}
        </h1>
      )}
      <div className="px-[30px] xl:px-[60px] py-[150px] shadow-2xl grid grid-cols-2 auto-rows-fr md:grid-cols-4 xl:grid-cols-6 grid-rows-none gap-5">
        {list.length === 0 ? (
          <div className="flex items-center justify-center w-full h-[50vh] col-span-full">
            <h1 className="text-3xl text-white font-bold text-center">
              Nothing Found...
            </h1>
          </div>
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              onClick={() => play(item, item.media_type)}
              className="bg-[#000000] text-white shadow-2xl w-full h-full flex flex-col gap-2 px-[15px] items-center rounded-xl"
            >
              {item.poster_path ? (
                <img
                  src={`${base_image_url + item.poster_path}`}
                  alt=""
                  className="border-1 w-max mt-[15px] rounded-xl h-[250px] object-cover"
                />
              ) : (
                <div className="bg-[#222] mt-[15px] rounded-xl h-[250px] w-[170px] flex items-center justify-center text-gray-400 text-xl">
                  No Image
                </div>
              )}
              <h1 className="px-[15px] overflow-hidden h-[40px]">
                {item.media_type === "movie" ? item.title : item.name}
              </h1>
              <div className="text-xs flex justify-between items-center gap-1 w-full px-[15px] pb-2">
                <span className="flex gap-1 items-center justify-between">
                  <StarIcon className="size-4 text-amber-500" />
                  <h1 className="font-bold">{item.vote_average}</h1> • 
                  <h1>{item.media_type.toUpperCase()}</h1>
                </span>
                <h1 className="text-white">
                  {new Date(
                    item.media_type === "movie"
                      ? item.release_date
                      : item.first_air_date
                  )?.getFullYear()}
                </h1>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SearchDisplay;
