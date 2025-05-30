import React from "react";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";

const Footer = () => {
  return (
    <div id="list" className="bg-[#141414] border-t-1 border-[#2b2b2b] text-gray-300 text-[10px] xl:text-[12px] w-full h-min pt-[40px] pb-[10px] px-[30px] xl:px-[60px] flex items- justify-around">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <img
            src={facebook}
            alt="fb"
            className="size-4 xl:size-5 cursor-pointer hover:scale-108 transition"
          />
          <img
            src={instagram}
            alt="insta"
            className="size-4 xl:size-5 cursor-pointer hover:scale-108 transition"
          />
          <img
            src={twitter}
            alt="X"
            className="size-4 xl:size-5 cursor-pointer hover:scale-108 transition"
          />
          <img
            src={youtube}
            alt="Yt"
            className="size-4 xl:size-5 cursor-pointer hover:scale-108 transition"
          />
        </div>
        <div className="flex flex-col gap-3">
          <a
            href=""
            className="hover:scale-101 transition hover:text-[#808080]"
          >
            VoiceOver and Subtitles
          </a>
          <a
            href=""
            className="hover:scale-101 transition hover:text-[#808080]"
          >
            Media Center
          </a>
          <a
            href=""
            className="hover:scale-101 transition hover:text-[#808080]"
          >
            Security
          </a>
          <a
            href=""
            className="hover:scale-101 transition hover:text-[#808080]"
          >
            Contact Us
          </a>
          <button className="font-bold border-2 p-3 hover:bg-white hover:border-white hover:text-[#222222] transition ease-in-out duration-200">
            Service Code
          </button>
        </div>
        <p className="pt-3 opacity-50 text-[12px] xl:text-[14px]">
          © 1997-2025 Netflix,inc.
        </p>
      </div>
      <div className="flex flex-col gap-3 pt-[36px]">
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Audio Description
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Investor Relations
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Legal Provisions
        </a>
      </div>
      <div className="flex flex-col gap-3 pt-[36px]">
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Help Center
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Job Oppportunities
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Cookie Preferences
        </a>
      </div>
      <div className="flex flex-col gap-3 pt-[36px]">
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Gift Cards
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Terms and Conditions
        </a>
        <a href="" className="hover:scale-101 transition hover:text-[#808080]">
          Corporate Information
        </a>
      </div>
    </div>
  );
};

export default Footer;
