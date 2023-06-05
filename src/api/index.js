import axios from "axios";

export const axiosPostsFromApi = (page, limit, postTitle, sortPosts) => axios.get(`https://jsonplaceholder.typicode.com/posts`, {
  params: {
    _page: page,
    _limit: limit,
    title_like: postTitle,
    _sort: sortPosts,
  }
});