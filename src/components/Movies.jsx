import React from "react";
import { NavLink } from "react-router-dom";

import { CustomHook } from "../Context/ContextProvider";
const imgUrl = "https://via.placeholder.com/200/200";
const Movies = () => {
  const { movie, isLoading } = CustomHook();
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map((val, index) => {
                const { imdbID, Title, Poster } = val;
                //! movie title have only 15 caracteres shown
                const Movie_Name = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={index}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {Movie_Name.length > 13
                            ? `${Movie_Name}...`
                            : Movie_Name}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movies;
