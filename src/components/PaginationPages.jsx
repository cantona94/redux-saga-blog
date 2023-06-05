import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/selectors';
import Pagination from 'react-bootstrap/Pagination';
import { getPageCount, getPagesArray } from '../utils/pagination';

export const PaginationPages = ({ page, setPage }) => {
  const postsData = useSelector(selectPosts);
  const totalPages = getPageCount(postsData.posts.headers['x-total-count'], postsData.limit);
  const pagesArray = getPagesArray(totalPages, page, setPage);

  return (
    <div className='pagination'>
      <Pagination size="sm">{pagesArray}</Pagination>
    </div >
  );
}