import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const SortPosts = ({ sortQuery, setSortQuery, setPage }) => {
  const handleChangeSort = (e) => {
    setSortQuery(e.target.value);
    setPage(1);
  }

  return (
    <FloatingLabel controlId="floatingSelect" label="Sort by">
      <Form.Select aria-label="Floating label select example"
        value={sortQuery} onChange={handleChangeSort}
      >
        <option value="title">Title</option>
        <option value="body">Text</option>
      </Form.Select>
    </FloatingLabel>
  )
}
