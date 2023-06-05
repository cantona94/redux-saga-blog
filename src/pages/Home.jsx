import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from '../redux/selectors';
import { LOAD_POSTS } from "../redux/actions/posts";
import { PostList } from "../components/index";

export const Home = () => {
  const postsData = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS,
      payload: {
        page: page,
        limit: postsData.limit,
      }
    })
  }, [page])

  return (
    <>
      <PostList
        posts={postsData.posts}
        loading={postsData.loading}
        title={'Users posts'}
        page={page}
        setPage={setPage}
      />
    </>
  )
}

