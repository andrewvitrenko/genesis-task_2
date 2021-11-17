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

export interface User {
  user: {
    id: string;
    shortId: string;
    uniqueId: string;
    nickname: string;
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    signature: string;
    createTime: number;
    verified: boolean;
    secUid: string;
    ftc:boolean;
    relation: number;
    openFavorite:boolean;
    bioLink:{
      link: number;
      risk: number;
    };
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean;
    secret: boolean;
    isADVirtual: boolean;
    roomId: string;
  }
  stats:{
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
  }
  itemList: string[];
}

export interface IVideo {
  id: string;
  desc: string;
  createTime: number;
  video: {
    id: string;
    height: number;
    width: number;
    duration: number;
    ratio: string;
    cover: string;
    originCover: string;
    dynamicCover: string;
    playAddr: string;
    downloadAddr: string;
    shareCover: string[];
    reflowCover: string;
    bitrate: number;
    encodedType: string;
    format: string;
    videoQuality: string;
    encodeUserTag: string;
    codecType: string;
    definition: string
  };
  author: {
    id: string;
    uniqueId: string;
    nickname: string;
    avatarThumb: string;
    avatarMedium: string;
    avatarLarger: string;
    signature: string;
    verified: boolean;
    secUid: string;
    secret: boolean;
    ftc: boolean;
    relation: number;
    openFavorite: boolean;
    commentSetting: number;
    duetSetting: number;
    stitchSetting: number;
    privateAccount: boolean
  };
  music: {
    id: string;
    title: string;
    playUrl: string;
    coverThumb: string;
    coverMedium: string;
    coverLarge: string;
    authorName: string;
    original: boolean;
    duration: number;
    album: string
  };
  challenges: Array<{
      id: string;
      title: string;
      desc: string;
      profileThumb: string;
      profileMedium: string;
      profileLarger: string;
      coverThumb: string;
      coverMedium: string;
      coverLarger: string;
      isCommerce: boolean
    }>;
  stats: {
    diggCount: number;
    shareCount: number;
    commentCount: number;
    playCount: number
  };
  duetInfo: {
    duetFromId: string
  };
  originalItem: boolean;
  officalItem: boolean;
  textExtra: Array<{
      awemeId: string;
      start: number;
      end: number;
      hashtagName: string;
      hashtagId: string;
      type: number;
      userId: string;
      isCommerce: boolean;
      userUniqueId: string;
      secUid: string;
      subType: number
    }>;
  secret: boolean;
  forFriend: boolean;
  digged: boolean;
  itemCommentStatus: number;
  showNotPass: boolean;
  vl1: boolean;
  itemMute: boolean;
  effectStickers?: Array<{
      name: string;
      ID: string
    }>;
  authorStats: {
    followingCount: number;
    followerCount: number;
    heartCount: number;
    videoCount: number;
    diggCount: number;
    heart: number
  };
  privateItem: boolean;
  duetEnabled: boolean;
  stitchEnabled: boolean;
  shareEnabled: boolean;
  isAd: boolean;
  duetDisplay: number;
  stitchDisplay: number
}

export interface Store {
  feed: IPost[];
  user: User;
  userFeed: IVideo[];
  error: string;
}
