import React, { useState } from 'react';
import { useGetMoviesQuery } from '../store/api/get-films';
import NavBar from './nav-bar';
import Card, { Movie } from '../components/move-card/movie-card';
import Loader from '../components/loader';
import Pagination from '@mui/material/Pagination';

const MoviePage = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const { data: movies, isLoading } = useGetMoviesQuery({
    page: page,
    limit: itemsPerPage,
  });
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPage(value);
  };
  if (isLoading)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <div className="pt-[40px] h-full mb-[50px] px-[100px]">
      <div className="w-full flex justify-center items-center">
        <div className="ml-[100px]">
          <div className="px-[100px]">
            <h1 className="text-[32px] font-bold mb-[20px]">Фильмы</h1>
            <NavBar />
            <div className="h-full flex flex-wrap justify-between gap-x-5 gap-y-3">
              {movies?.docs.map((movie: Movie) => (
                <Card key={movie.id} movie={movie} cardType="movie" />
              ))}
            </div>
            <div className="bg-[#ff5500] p-[4px] text-white rounded-[20px] mt-[10px] w-[400px] flex justify-center">
              <Pagination
                count={movies ? Math.ceil(movies.total / itemsPerPage) : 1}
                page={page}
                onChange={handlePageChange}
                variant="outlined"
                color="standard"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
