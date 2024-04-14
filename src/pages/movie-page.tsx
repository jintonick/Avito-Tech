import React, { useState, useEffect } from "react";
import {
  useGetMoviesQuery,
  useGetSearchMovieQuery,
} from "../store/api/get-films";
import { useSearch } from "../components/search/search-context";
import NavBar from "./nav-bar";
import Card from "../components/move-card/movie-card";
import { Movie } from "../interfaces/components";
import Loader from "../components/loader";
import "./styles/paginator.css";
import "./styles/movepage.css";
import { Pagination, ConfigProvider } from "antd";

const MoviePage = () => {
  const itemsPerPage = 10;
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(itemsPerPage);
  const {
    searchQuery,
    filters: { yearFilter, countryFilter, ageRatingFilter },
    setFilters,
    filters,
    currentPage,
    setCurrentPage,
  } = useSearch();
  const formattedAgeRatingFilter = ageRatingFilter
    ? ageRatingFilter.replace("+", "")
    : null;
  const { data: movieSearch, isLoading: isSearchLoading } =
    useGetSearchMovieQuery(
      {
        page,
        query: searchQuery,
        limit: pageSize,
      },
      {
        skip: !searchQuery,
      },
    );
  const { data: movies, isLoading } = useGetMoviesQuery({
    page: page,
    limit: pageSize,
    releaseYears: yearFilter,
    countries: countryFilter,
    ageRating: formattedAgeRatingFilter,
  });
  const handlePageChange = (newPage: number, newPageSize?: number) => {
    setPage(newPage);
    setCurrentPage(newPage);
    if (typeof newPageSize === "number") {
      setPageSize(newPageSize);
    }
  };
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);
  const currentData = searchQuery && movieSearch ? movieSearch : movies;
  if (isLoading)
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  if (isSearchLoading)
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  return (
    <div className="movie-container">
      <div className="w-full flex justify-center items-start">
        <div>
          <h1 className="film-text">Фильмы</h1>
          <div className="flex justify-center items-center w-full">
            <NavBar
              onYearChange={(year) =>
                setFilters({ ...filters, yearFilter: year })
              }
              onCountryChange={(country) =>
                setFilters({ ...filters, countryFilter: country })
              }
              onAgeRatingChange={(rating) =>
                setFilters({ ...filters, ageRatingFilter: rating })
              }
            />
          </div>
          <div className="movie-card-contanier">
            {currentData?.docs.map((movie: Movie) => (
              <Card key={movie.id} movie={movie} cardType="movie" />
            ))}
          </div>
          <div className="border-[#ff5500] border-[2px] p-[4px] text-white rounded-[10px] mt-[10px] w-full flex justify-center">
            <ConfigProvider
              theme={{
                components: {
                  Pagination: {
                    colorText: "#ff5500",
                    itemActiveBgDisabled: "#fff",
                    colorPrimaryBorder: "#ff5500",
                  },
                },
              }}
            >
              <Pagination
                current={page}
                total={currentData ? currentData.total : 0}
                pageSize={pageSize}
                onChange={handlePageChange}
                showSizeChanger
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
