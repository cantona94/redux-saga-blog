import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from '../redux/selectors';
import { LOAD_POSTS } from "../redux/actions/posts";
import { Filters, PostList } from "../components/index";

export const Home = () => {
  const postsData = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [searchQueryTitle, setSearchQueryTitle] = useState('');
  const [sortQuery, setSortQuery] = useState('');

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS,
      payload: {
        page: page,
        postTitle: searchQueryTitle.trim(),
        sortPosts: sortQuery,
      }
    })
  }, [page, searchQueryTitle, sortQuery])

  return (
    <>
      <Filters
        searchQueryTitle={searchQueryTitle}
        setSearchQueryTitle={setSearchQueryTitle}
        sortQuery={sortQuery}
        setSortQuery={setSortQuery}
        setPage={setPage}
      />
      <PostList
        posts={postsData.posts}
        loading={postsData.loading}
        title={'Users posts'}
        page={page}
        setPage={setPage}
      />
    </>
  )
}

