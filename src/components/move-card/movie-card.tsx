import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./movie-card.css";
import kpCircleLogo from "../imgs/kpCircleLogo.svg";
import imdbCircleLogo from "../imgs/imdbCircleLogo.png";
import { Movie } from "../../interfaces/components";

export interface CardProps {
  movie: Movie;
  cardType: "movie" | "similarMovie";
}

const Card: React.FC<CardProps> = ({ movie, cardType }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="cardContainer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/movie/${movie.id}`} className="cardContainer">
        <div className={`card ${isHovered ? "is-hovered" : ""}`}>
          <div className="cardFront">
            <img className="h-90%" src={movie?.poster.url} />
          </div>
          <div className="cardBack">
            <div className="h-auto">
              <h1 className="font-bold">{movie?.name}</h1>
              {cardType === "movie" ? (
                <p className="text-[13px]">{movie?.shortDescription}</p>
              ) : (
                ""
              )}
            </div>
            {cardType === "movie" ? (
              <div className="flex justify-between px-[30px] mb-[5px]">
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={kpCircleLogo}
                    className="w-[54px]"
                    alt="Kinopoisk"
                  />
                  <p>{movie?.rating?.kp}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <img src={imdbCircleLogo} className="w-[54px]" alt="IMDb" />
                  <p>{movie?.rating?.imdb}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Card;
