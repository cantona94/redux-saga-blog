import axios from "axios";

export const axiosPostsFromApi = () => axios.get(`https://jsonplaceholder.typicode.com/posts`);