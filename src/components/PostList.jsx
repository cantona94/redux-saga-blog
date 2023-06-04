import { PostItem } from './PostItem';
import Spinner from 'react-bootstrap/Spinner';

export const PostList = ({ posts, loading, title }) => {

  if (loading) {
    return (
      <Spinner animation="border" />
    )
  }

  return (
    <>
      <h4>
        {title}
      </h4>
      {posts.data.map(post => <PostItem post={post} key={post.id} />)}
    </>
  )
}
