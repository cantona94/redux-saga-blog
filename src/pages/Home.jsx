import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from '../redux/reducers/selectors';
import { LOAD_POSTS } from "../redux/reducers/posts/actions";
import { PostList } from "../components/PostList";

export const Home = () => {
  const postsData = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS,
      payload: {}
    })
  }, [])

  return (
    <>
      <PostList
        posts={postsData.posts}
        loading={postsData.loading}
        title={'Users posts'}
      />
    </>
  )
}

