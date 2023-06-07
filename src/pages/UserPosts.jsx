import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LOAD_USER } from '../redux/actions/user';
import { LOAD_POSTS } from '../redux/actions/posts';
import { selectUser, selectPosts } from '../redux/selectors';
import { UserCard, PostList } from '../components/index';

export const UserPosts = () => {
  const params = useParams();
  const userData = useSelector(selectUser);
  const postsData = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: LOAD_USER, payload: { userId: params.userId } });
    dispatch({
      type: LOAD_POSTS,
      payload: {
        userId: params.userId,
        page: page,
        limit: postsData.limit,
      }
    })
  }, [page])

  return (
    <>
      <UserCard user={userData.user[0]} loading={userData.loading} />
      <PostList
          posts={postsData.posts}
          loading={postsData.loading}
          title={'User posts'}
          page={page}
          setPage={setPage}
      />
    </>
  )
}