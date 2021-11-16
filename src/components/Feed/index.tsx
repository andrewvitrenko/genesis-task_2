import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { loadFeed } from '../../api/feed'; 
import { Store } from '../../interfaces';
import { Post } from '../Post';

export const Feed: React.FC = () => {
  const dispatch = useDispatch();
  const { feed } = useSelector((store: Store) => store);

  useEffect(() => {
    dispatch(loadFeed());
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        '& .MuiCard-root': {
          margin: '15px',
          flexBasis: '25%'
        }
      }}
    >
      {feed.map(post => <Post key={post.id} post={post} />)}
    </Box>
  );
};
