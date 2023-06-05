import { PostItem, PaginationPages } from './index';
import Spinner from 'react-bootstrap/Spinner';

export const PostList = ({ posts, loading, title, page, setPage }) => {

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
