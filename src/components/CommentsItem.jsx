import { Card } from 'react-bootstrap';

export const CommentsItem = ({ comments }) => {
  return (
    <>
      {comments.map((comment, index) =>
        <Card key={comment.id} className='m-2'>
          <Card.Header style={{ textAlign: 'left' }}>{index + 1}. {comment.email}</Card.Header>
          <Card.Body>
            <Card.Text>
              {comment.body}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  )
}