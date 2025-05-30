import React, { useState } from "react";
import NetflixLogo from "../assets/images/NetflixLogo.png";
import searchIcon from "../assets/images/search.png";
import giftBox from "../assets/images/GiftBox.png";
import notificationBell from "../assets/images/NotificationBell.png";
import profile from "../assets/images/Profile.png";
import arrowDown from "../assets/images/DownArrow.png";
import ManageProfile from "./ManageProfile";
import SearchDisplay from "./SearchDisplay";

const Header = ({
  searchInput,
  setSearchInput,
  searchList,
  base_image_url,
  fetchTrailer,
  setVideoUrl,
  setShowTrailer,
  watched,
  setWatched,
}) => {
  const [isActive, setIsActive] = useState("home");
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [isShowProfile, setIsShowProfile] = useState(false);

  const ShowSearch = () => {
    setIsShowProfile(false);
    setIsShowSearch((prev) => !prev);
  };

  const showProfile = () => {
    setIsShowSearch(false);
    setIsShowProfile((prev) => !prev);
  };

  return (
    <>
      <div
        className="bg-[#141414] sticky top-0 shadow-black shadow-2xl z-50"
      >
        <header className="flex justify-between items-center text-white text-[14px] h-[82px] py-[26px] px-[30px] xl:px-[60px]">
          <div id="left-header" className="flex items-center gap-10">
            <img
              src={NetflixLogo}
              alt="NETFLIX"
              className="cursor-pointer w-[100px] h-[30px]"
            />
            <div className="hidden xl:flex xl:gap-5">
              <a
                className={`home hover:scale-105 ${
                  isActive === "home" ? "font-bold" : ""
                }`}
                onClick={() => setIsActive("home")}
                href="#home"
              >
                Home Page
              </a>
              <a
                className={`tv hover:scale-105 ${
                  isActive === "tv" ? "font-bold" : ""
                }`}
                onClick={() => setIsActive("tv")}
                href="#tv-shows"
              >
                Tv Shows
              </a>
              <a
                className={`movies hover:scale-105 ${
                  isActive === "movies" ? "font-bold" : ""
                }`}
                onClick={() => setIsActive("movies")}
                href="#home"
              >
                Movies
              </a>
              <a
                className={`popular hover:scale-105 ${
                  isActive === "popular" ? "font-bold" : ""
                }`}
                onClick={() => setIsActive("popular")}
                href="#popular"
              >
                New and Popular
              </a>
              <a
                className={`list hover:scale-105 ${
                  isActive === "list" ? "font-bold" : ""
                }`}
                onClick={() => setIsActive("list")}
                href="#list"
              >
                My List
              </a>
            </div>
          </div>
          <div>
            {isShowSearch && (
              <input
                value={searchInput}
                type="text"
                placeholder="Search Movies, Series, etc..."
                onChange={(e) => setSearchInput(e.target.value)}
                className="hidden xl:block w-[200px] xl:w-[300px] border-1 border-[#808080] rounded-full p-2 px-4 absolute right-[145px] xl:right-[328px]"
              />
            )}

            <div
              id="right-header"
              className="hidden xl:flex items-center gap-5 text-[14px]"
            >
              <img
                onClick={ShowSearch}
                src={searchIcon}
                alt="search"
                className="w-5 h-5 cursor-pointer"
              />
              <p className="cursor-pointer">Jamshid</p>
              <img
                src={giftBox}
                alt="Gifts"
                className="w-5 h-5 cursor-pointer"
              />
              <img
                src={notificationBell}
                alt="Notifications"
                className="w-5 h-5 cursor-pointer"
              />
              <div className="flex items-center gap-2">
                <img
                  onClick={showProfile}
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 cursor-pointer"
                />
                <img
                  onClick={showProfile}
                  src={arrowDown}
                  alt=""
                  className="w-3.5 h-3.5 cursor-pointer"
                />
              </div>
            </div>
            {isShowProfile && <ManageProfile />}
            <div
              id="mob-header"
              className="flex xl:hidden items-center gap-5 text-[14px]"
            >
              <img
                onClick={ShowSearch}
                src={searchIcon}
                alt="search"
                className="w-5 h-5 cursor-pointer"
              />
              <div className="flex items-center gap-2">
                <img
                  onClick={showProfile}
                  src={profile}
                  alt="Profile"
                  className="w-8 h-8 cursor-pointer"
                />
                <img
                  onClick={showProfile}
                  src={arrowDown}
                  alt=""
                  className="w-3.5 h-3.5 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </header>
        {isShowSearch && (
          <div className="text-white block xl:hidden w-full px-[30px] py-[10px] mt-2">
            <input
              value={searchInput}
              type="text"
              placeholder="Search Movies, Series, etc..."
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full border border-[#808080] rounded-full p-2 px-4"
            />
          </div>
        )}
        <div className="xl:hidden flex items-center justify-between mx-[30px] pb-2 gap-8 text-white text-[12px]">
          <a
            className={`home hover:scale-105 ${
              isActive === "home" ? "font-bold" : ""
            }`}
            onClick={() => setIsActive("home")}
            href="#home"
          >
            Home Page
          </a>
          <a
            className={`tv hover:scale-105 ${
              isActive === "tv" ? "font-bold" : ""
            }`}
            onClick={() => setIsActive("tv")}
            href="#tv-shows"
          >
            Tv Shows
          </a>
          <a
            className={`movies hover:scale-105 ${
              isActive === "movies" ? "font-bold" : ""
            }`}
            onClick={() => setIsActive("movies")}
            href="#home"
          >
            Movies
          </a>
          <a
            className={`popular hover:scale-105 ${
              isActive === "popular" ? "font-bold" : ""
            }`}
            onClick={() => setIsActive("popular")}
            href="#popular"
          >
            New and Popular
          </a>
          <a
            className={`list hover:scale-105 ${
              isActive === "list" ? "font-bold" : ""
            }`}
            onClick={() => setIsActive("list")}
            href="#list"
          >
            My List
          </a>
        </div>
      </div>
      {isShowSearch && (
        <SearchDisplay
          searchList={searchList}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setIsShowSearch={setIsShowSearch}
          base_image_url={base_image_url}
          fetchTrailer={fetchTrailer}
          setVideoUrl={setVideoUrl}
          setShowTrailer={setShowTrailer}
          watched={watched}
          setWatched={setWatched}
        />
      )}
    </>
  );
};

export default Header;
