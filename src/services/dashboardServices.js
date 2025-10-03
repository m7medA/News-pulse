import axiosClient from "./axiosClient";

export async function getArticles({ token }) {
  try {
    const request = await axiosClient.get("/auth/articles/", {
      headers: {
        Authorization: `Token ${token}`,
      },
    });
    return request.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}

export async function getArticleByID({ articleID }) {
  try {
    const request = await axiosClient.get(`/articles/${articleID}`);
    return request.data;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
}
