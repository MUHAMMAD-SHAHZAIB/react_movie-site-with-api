import React ,{ useState, useEffect } from "react";

//!----------this api url-----------
export const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = apiParams => {
  //!-----------this state shown loading ---------------
  const [isLoading, setIsLoading] = useState(true);
  //!---------this state show error message means data have not found then show error message-----------
  const [isError, setisError] = useState({
    show: "false",
    msg: "",
  });
  //!--------this state store the movie data in array----------
  const [movie, setMovie] = useState(null);

  //!----------GiveMovie this is main function to fetch data from api then show in site-----------
  const getMovie = async url => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search || data);
        setisError({ show: false, msg: "" });
      } else {
        setisError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log("somthing error");
    }
  };
  //!-------------useEffect work to first time auto rendering data and show to website --------------
  useEffect(() => {
    //! Debounse method means the every key enter then not fetch direct api after 2 seconds one time data fetch.

    let timeOut = setTimeout(() => {
      getMovie(`${API_URL}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);
  return { isLoading, isError, movie };
};

export default useFetch;
