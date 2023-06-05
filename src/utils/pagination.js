import Pagination from 'react-bootstrap/Pagination';

export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages, page, setPage) => {

  const visibilityPagination = (a, b) => {
    for (let number = page + a; number <= page + b; number++) {
      items.push(
        <Pagination.Item id="page_item_link" key={number} active={number === page} onClick={() => setPage(number)}>
          {number}
        </Pagination.Item>,
      );
    }
  }

  const items = [];

  items.push(<Pagination.First key="first" onClick={() => setPage(1)} />)
  if (page > 1) {
    items.push(<Pagination.Prev key="prev" onClick={() => setPage(page - 1)} />)
  }
  items.push(<Pagination.Ellipsis key="firstEllipsis" disabled />);

  if (page === 1) {
    if (page === totalPages) {
      visibilityPagination(0, 0)
    }
    else if (page === totalPages - 1) {
      visibilityPagination(0, 1)
    } else {
      visibilityPagination(0, 2)
    }
  }

  else if (page === 2) {
    if (page === totalPages) {
      visibilityPagination(-1, 0)
    }
    else if (page === totalPages - 1) {
      visibilityPagination(-1, 1)
    } else {
      visibilityPagination(-1, 2)
    }
  }

  else if (page > 2) {
    if (page < totalPages - 1) {
      visibilityPagination(-2, 2)
    }
    else if (page === totalPages - 1) {
      visibilityPagination(-2, 1)
    }
    else if (page === totalPages) {
      visibilityPagination(-2, 0)
    }
  }

  items.push(<Pagination.Ellipsis key="lastEllipsis" disabled />);
  if (page < totalPages) {
    items.push(<Pagination.Next key="next" onClick={() => setPage(page + 1)} />)
  }
  items.push(<Pagination.Last key="last" onClick={() => setPage(totalPages)} />)

  return items;
}