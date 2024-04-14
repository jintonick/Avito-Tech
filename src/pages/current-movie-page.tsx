import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useParams } from 'react-router-dom';
import { Pagination } from 'antd';
import { Link } from 'react-router-dom';
import {
  useGetMovieByIdQuery,
  useGetSeasonByIdQuery,
  useGetPosterByIdQuery,
  useGetReviewByIdQuery,
} from '../store/api/get-films';
import { Person, Movie, Review, Poster } from '../interfaces/pages';
import Loader from '../components/loader';
import Card from '../components/move-card/movie-card';
import SeasonsList from '../components/season-list';
import ReviewCard from '../components/review-card';
import arrow from '../components/imgs/arrow-left-white.svg';
import './styles/current-movie-page.css';

export default function CurrentMoviePage() {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 250;
  const pageSize = 4;
  const { data: seasons, isLoading: isSeasonsLoading } = id
    ? useGetSeasonByIdQuery({ id, limit })
    : { data: null, isLoading: false };
  const { data: movie, isLoading } = useGetMovieByIdQuery(id);
  const { data: poster } = id
    ? useGetPosterByIdQuery({ id, limit })
    : { data: null };
  const { data: review } = id
    ? useGetReviewByIdQuery({ id, limit })
    : { data: null };
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const actors: Person[] =
    movie?.persons?.filter(
      (person: Person) => person.enProfession === 'actor',
    ) || [];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const posterSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  if (isLoading)
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  const divStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${movie.backdrop.url})`,
    backgroundSize: 'cover',
  };
  return (
    <div className="h-full text-gray-200 font-graphik">
      <div className="back-g" style={divStyle}>
        <Link to={`/movie`} className="text-[24px] font-semibold flex">
          <img
            className="w-[20px] mr-[5px] text-gray-100"
            src={arrow}
            alt="Нет фото"
          />
          Назад
        </Link>
        <div className="description-container">
          <div className="description-image-container">
            <img className="description-image" src={movie.poster.url} />
          </div>
          <div className="description-data-container">
            <h1 className="text-[32px] font-bold">{movie.name}</h1>
            <h1 className="font-semibold">{movie.year}</h1>
            <h1>
              {movie.description !== ''
                ? movie.description
                : 'Нет информации об описании'}
            </h1>
          </div>
          <div className="description-raitingandactor-container">
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
            <div className="description-raiting-container">
              <h1 className="text-[18px] font-semibold">Рейтинг</h1>
              <div className="flex gap-3">
                <span>Кинописк</span>
                <span className="font-semibold">{movie.rating.kp}</span>
              </div>
              <div className="flex gap-3">
                <span>IMDb</span>
                <span className="font-semibold">{movie.rating.imdb}</span>
              </div>
              <div className="flex gap-3">
                <span>Кинокритики</span>
                <span className="font-semibold">
                  {movie.rating.filmCritics}
                </span>
              </div>
              <div className="flex gap-3">
                <span className="truncate">Русские кинокритики</span>
                <span className="font-semibold">
                  {movie.rating.russianFilmCritics}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="poster-container">
          {poster?.total !== 0 ? (
            <Slider {...posterSettings}>
              {poster?.docs?.map((poster: Poster) => (
                <div
                  key={poster.id}
                  className="flex justify-center items-center h-full"
                >
                  <img
                    src={poster.url}
                    alt="Movie Poster"
                    className="poster-image mx-auto"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            ''
          )}
        </div>
      </div>
      <div className="mb-[100px]">
        <div className="series-container">
          {movie.type === 'tv-series' && !isSeasonsLoading && seasons && (
            <SeasonsList seasons={seasons.docs} />
          )}
        </div>
        <div className="">
          {movie?.similarMovies && movie.similarMovies.length > 0 && (
            <div className="similar-movies-container">
              <h1 className="text-[32px] font-bold mb-[40px]">
                Похожие фильмы
              </h1>
              <div className="similar-slider">
                <Slider {...settings}>
                  {movie.similarMovies.map((similarMovie: Movie) => (
                    <div key={similarMovie.id}>
                      <Card movie={similarMovie} cardType="similarMovie" />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="review-main-container">
        <div className="review-title-container">
          <h1 className="text-black text-[32px] font-bold">Отзывы</h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="mb-[10px] flex flex-wrap gap-x-3 justify-center items-center">
            {review?.total > 0 ? (
              review.docs
                .slice(start, end)
                .map((reviewItem: Review) => (
                  <ReviewCard key={reviewItem.id} review={reviewItem} />
                ))
            ) : (
              <div className="text-center w-full text-black">Нет отзывов</div>
            )}
          </div>
          <div className="w-full flex justify-center">
            <Pagination
              current={currentPage}
              total={review ? review.docs.length : 0}
              pageSize={pageSize}
              onChange={handleChangePage}
              showSizeChanger={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
