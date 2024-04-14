import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getFilmsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4',
    prepareHeaders: (headers) => {
      const token = process.env.TOKEN;
      if (token) {
        headers.set('X-API-KEY', token);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, limit = 10, releaseYears, countries, ageRating }) => {
        let queryParams = `movie?limit=${limit}&page=${page}`;
        if (releaseYears?.start) {
          queryParams += `&releaseYears.start=${releaseYears.start}`;
        }
        if (releaseYears?.end) {
          queryParams += `&releaseYears.end=${releaseYears.end}`;
        }
        if (countries) {
          queryParams += `&countries.name=${encodeURIComponent(countries)}`;
        }
        if (ageRating) {
          queryParams += `&ageRating=${ageRating}`;
        }
        return queryParams;
      },
    }),

    getMovieById: builder.query({
      query: (id) => `movie/${id}`,
    }),
    getSearchMovie: builder.query({
      query: ({ query, limit = 10, page = 1 }) =>
        `movie/search?page=${page}&limit=${limit}&query=${encodeURIComponent(query)}`,
    }),
    getSeasonById: builder.query({
      query: ({ id, limit = 250, page = 1 }) =>
        `season?movieId=${id}&limit=${limit}&page=${page}`,
    }),
    getPosterById: builder.query({
      query: ({ id, limit = 250, page = 1 }) =>
        `image?page=${page}&limit=${limit}&movieId=${id}`,
    }),
    getReviewById: builder.query({
      query: ({ id, limit = 10, page = 1 }) =>
        `review?page=${page}&limit=${limit}&movieId=${id}`,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieByIdQuery,
  useGetSearchMovieQuery,
  useGetSeasonByIdQuery,
  useGetPosterByIdQuery,
  useGetReviewByIdQuery,
} = getFilmsApi;
