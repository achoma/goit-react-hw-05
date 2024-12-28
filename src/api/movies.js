import axios from "axios";
import { API_PATH } from "../constants/api";

const ACCESS_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYjJkNTAyODMxZGEwZGNkOTM3M2ZmMWU2YjZmMDhiNyIsIm5iZiI6MTczMjkyMjAwMi4wNTMsInN1YiI6IjY3NGE0YTkyZDk0MDliMTNkMjk3NzI0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vrBSYzUQ7mYLLPWniIUiBlEYfpK9wKEzCyykdHKkIck";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers = {
  Authorization: `Bearer ${ACCESS_KEY}`,
  accept: "application/json",
};
// axios.defaults.params = {
// 	language: 'en-US',
// };

export const fetchTrendMovies = async () => {
  const response = await axios.get(API_PATH.trend, {});
  return response.data;
};

export const fetchSearchMovie = async (query, page = 1) => {
  const response = await axios.get(API_PATH.search, {
    params: {
      query,
      page,
    },
  });

  return response.data;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "?");
  return response.data;
};

export const fetchMovieCredits = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/credits?");
  return response.data;
};

export const fetchMovieReview = async (id) => {
  const response = await axios.get(API_PATH.movie + id + "/reviews?");
  return response.data;
};
