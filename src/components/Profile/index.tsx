import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Typography, Card, CardContent, Box, Pagination, Stack } from '@mui/material';
import { Video } from '../Video';
import { Store } from '../../interfaces';
import { getUserInfo, getUserFeed } from '../../api/user';
import userFeedBase from '../../user-feed.json';
import { storeUserFeed } from '../../store/reducer';

export const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const { user, userFeed } = useSelector((store: Store) => store);
  const [ page, setPage ] = useState<number>(1);
  const PER_PAGE = 10;

  const handlePagination = (e: ChangeEvent<unknown>, p: number) => {
    setPage(p);
  };

  useEffect(() => {
    dispatch(getUserInfo());
    // if API works we can use dispatch(getUserFeed());
    dispatch(storeUserFeed(userFeedBase.itemList));
  }, []);

  return (
    <Box>
      <Card>
        <Typography variant="h6">User Info</Typography>
        <CardContent>
          <Avatar alt="user avatar" src={user.user.avatarLarger} />
          <Typography variant="subtitle1">Name: {user.user.nickname}</Typography>
          <Typography variant="subtitle1">Is account private: {user.user.privateAccount ? 'yes' : 'no'}</Typography>
          <Typography variant="subtitle1">Signature: {user.user.signature}</Typography>
          <Typography variant="subtitle1">Followers: {user.stats.followerCount}</Typography>
          <Typography variant="subtitle1">Following: {user.stats.followingCount}</Typography>
        </CardContent>
      </Card>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          '& .MuiCard-root': {
            flexBasis: '20%',
            minWidth: '250px',
            margin: '10px 15px',
            textAlign: 'center'
          }
        }}
      >
        {userFeed.map((video, i) =>
          i + 1 > (page - 1) * PER_PAGE &&
          i < page * PER_PAGE &&
          <Video key={video.id} video={video} />
        )}
      </Box>
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(userFeed.length / PER_PAGE)}
          onChange={handlePagination}
          page={page}
          sx={{
            '& .MuiPagination-ul': {
              justifyContent: 'center'
            }
          }}
        />
      </Stack>
    </Box>
  );
};
