import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Pagination, Stack } from '@mui/material';
import { getFeed } from '../../api/feed';
import { Store } from '../../interfaces';
import { Post } from '../Post';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((store: Store) => store);
  const [ page, setPage ] = useState<number>(1);
  const PER_PAGE = 10;

  useEffect(() => {
    dispatch(getFeed());
  }, []);

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiCard-root': {
            margin: '15px',
            flexBasis: '25%',
            minWidth: '250px',
          },
        }}
      >
        {feed.map(
          (post, i) =>
            i + 1 > (page - 1) * PER_PAGE &&
            i < page * PER_PAGE && <Post key={post.id} post={post} />
        )}
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(feed.length / PER_PAGE)}
          onChange={handlePagination}
          page={page}
          shape="rounded"
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center'
            }
          }}
        />
      </Stack>
    </>
  );
};
