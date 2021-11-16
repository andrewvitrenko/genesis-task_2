import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Link,
  Avatar
} from '@mui/material';
import { IPost } from '../../interfaces';

export const Post: React.FC<{post: IPost}> = ({ post }) => {
  console.log(post.hashtags);

  return (
    <Card>
      <CardContent>
        <CardMedia
          component="video"
          src={post.videoUrl}
          height="300"
          controls
        />
        <Typography variant="subtitle1">{post.text}</Typography>
        <Link
          color="inherit"
          display="inline-flex"
          underline="none"
          href={'https://www.tiktok.com/@' + post.authorMeta.name}
          sx={{
            alignItems: 'center',
            marginTop: '15px'
          }}
        >
          <Avatar
            alt={post.authorMeta.nickName}
            src={post.authorMeta.avatar}
            sx={{
              marginRight: '12px'
            }}
          />
          <Typography variant="overline">{post.authorMeta.nickName}</Typography>
        </Link>
        <Typography variant="caption" display="block">
          {post.hashtags.map(hash => '#' + hash.name + ' ')}
        </Typography>
        <Typography variant="subtitle1">Comments count: {post.commentCount}</Typography>
        <Typography variant="subtitle1">Likes count: {post.diggCount}</Typography>
      </CardContent>
    </Card>
  );
};
