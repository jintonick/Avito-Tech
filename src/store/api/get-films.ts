import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getFilmsApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.kinopoisk.dev/v1.4',
    prepareHeaders: (headers) => {
      headers.set('X-API-KEY', 'WF76VQQ-HQB4P5G-JFJH8DF-CRKDP1M');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page = 1, limit = 10 }) => `movie?limit=${limit}&page=${page}`,
    }),
    getMovieById: builder.query({
      query: (id) => `movie/${id}`,
    }),
    getSearchMovie: builder.query({
      query: () => `movie/search`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery } = getFilmsApi;
