import { Row, Col } from 'react-bootstrap';
import { SearchPostTitle, SortPosts } from './index';

export const Filters = ({
  searchQueryTitle,
  setSearchQueryTitle,
  sortQuery,
  setSortQuery,
  setPage }) => {
  return (
    <Row className="g-2 mb-3">
      <Col className='col-8'>
        <SearchPostTitle
          searchQueryTitle={searchQueryTitle}
          setSearchQueryTitle={setSearchQueryTitle}
          setPage={setPage}
        />
      </Col>
      <Col className='col-4'>
        <SortPosts
          sortQuery={sortQuery}
          setSortQuery={setSortQuery}
          setPage={setPage}
        />
      </Col>
    </Row>
  )
}