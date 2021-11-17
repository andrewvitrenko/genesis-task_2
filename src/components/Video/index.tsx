import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { IVideo } from '../../interfaces';

export const Video: React.FC<{ video: IVideo }> = ({ video }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Played: {video.stats.playCount} times!</Typography>
        <CardMedia
          component="video"
          controls
          height="250"
          src={video.video.playAddr}
        />
      </CardContent>
    </Card>
  );
};
