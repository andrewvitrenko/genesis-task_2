import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { getFeed } from '../../api/feed'; 
import { Store } from '../../interfaces';
import { Post } from '../Post';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((store: Store) => store);

  useEffect(() => {
    dispatch(getFeed());
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& .MuiCard-root': {
          margin: '15px',
          flexBasis: '25%',
          minWidth: '250px',
        }
      }}
    >
      {feed.map(post => <Post key={post.id} post={post} />)}
    </Box>
  );
};
