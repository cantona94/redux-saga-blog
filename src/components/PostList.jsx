import { PostItem, PaginationPages } from './index';
import Spinner from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import { selectErrors } from '../redux/selectors';

export const PostList = ({ posts, loading, title, page, setPage }) => {
  const errors = useSelector(selectErrors);

  if (errors.postsError) {
    return (
      <h2>
        {errors.postsError}
      </h2>
    )
  }

  if (loading) {
    return (
      <Spinner animation="border" />
    )
  }

  if (!posts.data.length) {
    return (
      <h2>
        Посты не найдены!
      </h2>
    )
  }

  return (
    <>
      <h4>
        {title}
      </h4>
      {posts.data.map(post => <PostItem post={post} key={post.id} />)}
      <PaginationPages page={page} setPage={setPage} />
    </>
  )
}
