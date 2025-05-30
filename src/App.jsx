import React, { useEffect, useState } from "react";
import { useDebounce } from "react-use";
import YouTube from "react-youtube";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Header from "./Sections/Header.jsx";
import Spinner from "./Components/Spinner.jsx";
import Hero from "./Sections/Hero.jsx";
import Series from "./Sections/Series.jsx";
import Top from "./Sections/Top.jsx";
import Footer from "./Sections/Footer.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const base_image_url = "https://image.tmdb.org/t/p/original";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const MovieEndpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_false=true&language=en-US&sort_by=popularity.desc`;
const TvEndpoint = `${API_BASE_URL}/tv/top_rated?language=en-US&page=1`;
const OriginalsEndpoint = `${API_BASE_URL}/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_networks=213`;
const TrendingEndpoint = `${API_BASE_URL}/trending/all/day?language=en-US`;
const UpcomingEndpoint = `${API_BASE_URL}/movie/upcoming?language=en-US&page=1`;
const WatchListEndpoint = `${API_BASE_URL}/trending/all/week?language=en-US`;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [tvList, setTvList] = useState([]);
  const [originals, setOriginals] = useState([]);
  const [trending, setTrending] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [randomMovie, setRandomMovie] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [showTrailer, setShowTrailer] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [watched, setWatched] = useState([]);
  const [debounceSerchInput, setDebounceSerchInput] = useState("");

  useDebounce(() => setDebounceSerchInput(searchInput), 500, [searchInput]);

  const SearchListEndpoint = `${API_BASE_URL}/search/multi?query=${encodeURIComponent(
    searchInput
  )}`;

  const fetchMedia = async (query = "") => {
    setIsLoading(true);
    try {
      const [
        MovieResponse,
        TvResponse,
        OriginalsResponse,
        TrendingResponse,
        UpcomingResponse,
        WatchListResponse,
        SearchListResponse,
      ] = await Promise.all([
        fetch(MovieEndpoint, API_OPTIONS),
        fetch(TvEndpoint, API_OPTIONS),
        fetch(OriginalsEndpoint, API_OPTIONS),
        fetch(TrendingEndpoint, API_OPTIONS),
        fetch(UpcomingEndpoint, API_OPTIONS),
        fetch(WatchListEndpoint, API_OPTIONS),
        fetch(SearchListEndpoint, API_OPTIONS),
      ]);

      if (
        !MovieResponse.ok ||
        !TvResponse.ok ||
        !OriginalsResponse.ok ||
        !TrendingResponse.ok ||
        !UpcomingResponse.ok ||
        !WatchListResponse.ok
      ) {
        throw new Error("Network response was not ok");
      }
      const movieData = await MovieResponse.json();
      const TvData = await TvResponse.json();
      const OriginalsData = await OriginalsResponse.json();
      const TrendingData = await TrendingResponse.json();
      const UpcomingData = await UpcomingResponse.json();
      const WatchListData = await WatchListResponse.json();

      if (!SearchListResponse.ok) {
        throw new Error("Network response was not ok");
      }
      const SearchListData = await SearchListResponse.json();

      if (movieData.results && movieData.results.length > 0) {
        setMovieList(movieData.results);
      } else {
        console.error("No Movies found.");
      }

      if (TvData.results && TvData.results.length > 0) {
        setTvList(TvData.results);
      } else {
        console.error("No Tv Shows found.");
      }

      if (OriginalsData.results && OriginalsData.results.length > 0) {
        setOriginals(OriginalsData.results);
      } else {
        console.error("No Tv Shows found.");
      }

      if (TrendingData.results && TrendingData.results.length > 0) {
        setTrending(TrendingData.results);
      } else {
        console.error("No Tv Shows found.");
      }

      if (UpcomingData.results && UpcomingData.results.length > 0) {
        setUpcoming(UpcomingData.results);
      } else {
        console.error("No Tv Shows found.");
      }

      if (WatchListData.results && WatchListData.results.length > 0) {
        setWatchList(WatchListData.results);
      } else {
        console.error("No Tv Shows found.");
      }

      if (SearchListData.results && SearchListData.results.length > 0) {
        setSearchList(SearchListData.results);
      } else {
        console.error("No Tv Shows found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia(debounceSerchInput);
  }, [debounceSerchInput]);

  useEffect(() => {
    if (movieList.length > 0) {
      const randomNumber = Math.floor(Math.random() * 10);
      setRandomIndex(randomNumber);
      setRandomMovie(movieList[randomNumber]);
    }
  }, [movieList]);

  let randomImageUrl = randomMovie?.backdrop_path
    ? `${base_image_url + randomMovie.backdrop_path}`
    : "bg-[#141414]";

  async function fetchTrailer(itemId, mediaType) {
    try {
      const endpoint = `${API_BASE_URL}/${mediaType}/${itemId}/videos?language=en-US`;
      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const trailerData = await response.json();

      if (trailerData.results && trailerData.results.length > 0) {
        return trailerData.results[0].key;
      } else {
        alert("No videos found for this movie.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching movie trailer:", error);
      return null;
    }
  }

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
      controls: 0,
    },
  };

  return (
    <main>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        searchList={searchList}
        base_image_url={base_image_url}
        fetchTrailer={fetchTrailer}
        setVideoUrl={setVideoUrl}
        setShowTrailer={setShowTrailer}
        watched={watched}
        setWatched={setWatched}
      />

      {isLoading && <Spinner />}

      <Hero
        randomImageUrl={randomImageUrl}
        randomMovie={randomMovie}
        movieList={movieList}
        base_image_url={base_image_url}
        setRandomMovie={setRandomMovie}
        fetchTrailer={fetchTrailer}
        setVideoUrl={setVideoUrl}
        setShowTrailer={setShowTrailer}
        randomIndex={randomIndex}
        setRandomIndex={setRandomIndex}
        setWatched={setWatched}
        watched={watched}
      />
      {showTrailer && videoUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-51">
          <button
            className="absolute top-4 right-8 text-white text-3xl z-10"
            onClick={() => setShowTrailer(false)}
          >
            <XMarkIcon className="w-8 h-8" />
          </button>
          <div className="relative w-[90vw] max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
            <YouTube
              opts={opts}
              videoId={videoUrl}
              onError={() =>
                alert(
                  "Video cannot be played. This may be due to browser privacy settings or YouTube restrictions."
                )
              }
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      <Series
        watched={watched}
        setWatched={setWatched}
        tvList={tvList}
        fetchTrailer={fetchTrailer}
        setVideoUrl={setVideoUrl}
        setShowTrailer={setShowTrailer}
        base_image_url={base_image_url}
        originals={originals}
      />

      <Top
        watched={watched}
        setWatched={setWatched}
        trending={trending}
        fetchTrailer={fetchTrailer}
        setVideoUrl={setVideoUrl}
        setShowTrailer={setShowTrailer}
        base_image_url={base_image_url}
        upcoming={upcoming}
        watchList={watchList}
      />

      <Footer />
    </main>
  );
};

export default App;
