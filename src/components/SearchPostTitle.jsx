import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const SearchPostTitle = ({ searchQueryTitle, setSearchQueryTitle, setPage }) => {
  const handleChangeSearch = (e) => {
    setSearchQueryTitle(e.target.value);
    setPage(1);
  }

  return (
    <FloatingLabel controlId="floatingInput" label="Search title">
      <Form.Control
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={searchQueryTitle}
        onChange={handleChangeSearch}
      />
    </FloatingLabel>
  )
}
