import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useGetMovieByIdQuery } from '../store/api/get-films';
import Loader from '../components/loader';
import Card from '../components/move-card/movie-card';

interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
}

interface Movie {
  name: string;
  poster: {
    url: string;
  };
  rating: {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
  };
  id: number;
  shortDescription?: string;
}

export default function CurrentMoviePage() {
  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByIdQuery(id);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  console.log(movie);
  const actors: Person[] =
    movie?.persons?.filter(
      (person: Person) => person.enProfession === 'actor',
    ) || [];

  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="h-full">
      <div className="px-[180px]">
        <Link to={`/movie`} className="text-[24px] font-semibold">
          Назад
        </Link>
        <div className="grid grid-cols-4 gap-10 mt-[30px]">
          <div className="col-span-1">
            <img className="rounded-[10px]" src={movie.poster.url} />
          </div>
          <div className="col-span-2">
            <h1 className="text-[32px] font-bold">{movie.name}</h1>
            <h1>{movie.description}</h1>
          </div>
          <div className="col-span-1">
            <div>
              <h1 className="text-[18px] font-semibold">В главных ролях</h1>
              <ul>
                {actors.map((actor, index) => (
                  <li key={index}>
                    <p>{actor.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-[50px]">
              <h1 className="text-[18px] font-semibold">Рейтинг</h1>
              <p className="flex gap-3">
                <p>Кинописк</p>
                {movie.rating.kp}
              </p>
              <p className="flex gap-3">
                <p>IMDb</p>
                {movie.rating.imdb}
              </p>
              <p className="flex gap-3">
                <p>Кинокритики</p>
                {movie.rating.filmCritics}
              </p>
              <p className="flex gap-3">
                <p className="truncate">Русские кинокритики</p>
                {movie.rating.russianFilmCritics}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[100px]">
        <div className="">
          <div className="px-[100px]">
            <h1 className="text-[32px] font-bold mb-[40px]">Похожие фильмы</h1>
            <Slider {...settings}>
              {movie?.similarMovies?.map((similarMovie: Movie) => (
                <div key={similarMovie.id}>
                  <Card movie={similarMovie} cardType="similarMovie" />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
