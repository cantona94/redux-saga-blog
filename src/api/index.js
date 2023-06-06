import axios from "axios";

export const axiosPostsFromApi = (page, limit, postTitle, sortPosts, userId) => axios.get(`https://jsonplaceholder.typicode.com/posts`, {
  params: {
    _page: page,
    _limit: limit,
    title_like: postTitle,
    _sort: sortPosts,
    userId: userId,
  }
});

export const axiosCommentsFromApi = (postId) => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

export const axiosUserFromApi = (userId) => axios.get(`https://jsonplaceholder.typicode.com/users`, {
  params: {
    id: userId,
  }
});