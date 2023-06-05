import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';
import { CommentsItem } from './index';
import { selectComments } from '../redux/selectors';
import { LOAD_COMMENTS } from "../redux/actions/comments";

export const CommentsBlock = ({ postId }) => {
  const dispatch = useDispatch();
  const commentsData = useSelector(selectComments);

  const addedPostComments = Object.keys(commentsData.comments).map(key => {
    return commentsData.comments[key];
  });

  useEffect(() => {
    dispatch({
      type: LOAD_COMMENTS,
      payload: {
        postId,
      }
    })
  }, [])

  return (
    <>{(commentsData.loading)
      ? <Spinner animation="border" size="sm" style={{ margin: 'auto' }} />
      : (addedPostComments.map((comments) =>
      (postId === comments.blockComments[0].postId &&
        <CommentsItem comments={comments.blockComments} key={comments.blockComments[0].postId} />)
      ))
    }
    </>
  )
}
