import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { LOAD_USER } from '../redux/actions/user';
import { selectUser } from '../redux/selectors';
import { UserCard } from '../components/index';

export const UserPosts = () => {
  const params = useParams();
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: LOAD_USER, payload: { userId: params.userId } });
  }, [])

  return (
    <>
      <UserCard user={userData.users[0]} loading={userData.loading} />
    </>
  )
}