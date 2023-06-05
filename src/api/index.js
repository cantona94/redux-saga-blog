import axios from "axios";

export const axiosPostsFromApi = (page, limit) => axios.get(`https://jsonplaceholder.typicode.com/posts`, {
  params: {
    _page: page,
    _limit: limit,
  }
});