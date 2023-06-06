import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { CommentsBlock } from './index';
import avatar from '../assets/avatar.png';

export const PostItem = ({ post }) => {
  const [commentsVisibility, setCommentsVisibility] = useState(false);

  const handleVisibilityComments = () => {
    setCommentsVisibility(!commentsVisibility);
  }

  const textButton = commentsVisibility
    ? 'Hide'
    : 'Show';

  const navigate = useNavigate()

  const handleOpenPostsUser = () => {
    navigate(`/user/${post.userId}`)
  }

  return (
    <Card className='p-3 mb-3'>
      <Card.Title>
        {post.title}
      </Card.Title>
      <Row>
        <Col className='col-md-2 col-12'>
          <Card.Img
            style={{ width: '150px', height: '150px', cursor: 'pointer' }}
            src={avatar}
            onClick={handleOpenPostsUser}
          />
        </Col>
        <Col className='col-md-10 col-12'>
          <Card.Body className='p-4'>
            {post.body}
          </Card.Body>
          <Button variant="outline-secondary" onClick={handleVisibilityComments} style={{ float: 'right' }}>
            {textButton + ' comments'}
          </Button>
        </Col>
      </Row>
      {commentsVisibility && <CommentsBlock postId={post.id} />}
    </Card>
  )
}
