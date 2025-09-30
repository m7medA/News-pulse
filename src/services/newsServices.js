import axiosClient from "./axiosClient";

export const getCategories = async () => {
  const request = await axiosClient.get("/category/");
  return request.data;
};

export const getLatestNews = async () => {
  const request = await axiosClient.get("/news/");
  return request.data;
};

export const getSearchResult = async (query) => {
  const request = await axiosClient.get(`/news/?q=${query}`);
  return request.data;
};

export const getCategoryArticles = async (category) => {
  const request = await axiosClient.get(`/news/?category=${category}`);
  return request.data;
};
