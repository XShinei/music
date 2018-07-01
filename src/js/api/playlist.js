import http from '../utils/fetch';

// 歌单 (网友精选碟)
export const getChoicenessList = params => http('/top/playlist', params);

// 获取精品歌单
export const getQualityList = params => http('/top/playlist/highquality', params);