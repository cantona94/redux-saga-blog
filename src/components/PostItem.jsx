import { Button, Card, Col, Row } from 'react-bootstrap';
import avatar from '../assets/avatar.png';

export const PostItem = ({ post }) => {
  return (
    <Card className='p-3 mb-3'>
      <Card.Title>
        {post.title}
      </Card.Title>
      <Row>
        <Col className='col-2'>
          <Card.Img style={{width: '150px', height: '150px'}} src={avatar} />
        </Col>
        <Col className='col-10'>
          <Card.Body className='p-4'>
            {post.body}
          </Card.Body>
          <Button style={{ float: 'right' }}>
            {'Show comments'}
          </Button>
        </Col>
      </Row>
    </Card>
  )
}
