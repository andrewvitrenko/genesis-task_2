export interface IPost {
  authorMeta: {
    avatar: string;
    digg: number;
    fans: number;
    following: number;
    heart: number;
    id: string;
    name: string;
    nickName: string;
    secUid: string;
    signature: string;
    verified: boolean
    video: number;
  };
  commentCount: number;
  covers: {
    default: string;
    origin: string;
    dynamic: string;
  };
  createTime: number;
  diggCount: number;
  downloaded: boolean;
  effectStickers: Array<{id: string; name: string;}>;
  hashtags: Array<{
    id: string;
    name: string;
    title: string;
    cover: string;
  }>;
  id: string;
  mentions: string[];
  musicMeta: {
    coverLarge: string;
    coverMedium:string;
    coverThumb: string;
    duration: number;
    musicAlbum: string;
    musicAuthor: string;
    musicId: string;
    musicName: string;
    musicOriginal: boolean;
    playUrl: string;
  };
  playCount: number;
  secretID: string;
  shareCount: number;
  text: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: {
    height: number;
    width: number;
    duration: number;
  };
  videoUrl: string;
  videoUrlNoWaterMark: string;
  webVideoUrl: string;
}

export interface Store {
  feed: IPost[];
}
