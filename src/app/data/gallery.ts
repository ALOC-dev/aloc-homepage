// 폴더 타입 정의
export type FolderType =
  | 'all'
  | 'knowledge-sharing'
  | 'final-presentation'
  | 'after-party'
  | 'daily-life';

// 폴더 정보 인터페이스
export interface FolderInfo {
  id: FolderType;
  name: string;
  folderPath: string;
}

// 폴더별 데이터
export const folderData: Record<FolderType, FolderInfo> = {
  all: {
    id: 'all',
    name: '전체',
    folderPath: '/활동사진',
  },
  'knowledge-sharing': {
    id: 'knowledge-sharing',
    name: '지식공유회',
    folderPath: '/활동사진/지식공유회',
  },
  'final-presentation': {
    id: 'final-presentation',
    name: '최종발표회',
    folderPath: '/활동사진/최종발표회',
  },
  'after-party': {
    id: 'after-party',
    name: '뒷풀이',
    folderPath: '/활동사진/뒷풀이',
  },
  'daily-life': {
    id: 'daily-life',
    name: '일상사진',
    folderPath: '/활동사진/일상사진',
  },
};

// 각 폴더의 이미지 파일명들
export const folderImages: Record<FolderType, string[]> = {
  all: [
    // 지식공유회
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-02 003.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 019.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 018.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 015.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 009.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 008.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 007.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 006.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 005.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-02 004.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-02 003.jpeg',
    // 최종발표회
    '/활동사진/최종발표회/IMG_0575.jpg',
    '/활동사진/최종발표회/IMG_0592.jpg',
    '/활동사진/최종발표회/IMG_0590.jpg',
    '/활동사진/최종발표회/IMG_0588.jpg',
    '/활동사진/최종발표회/IMG_0586.jpg',
    '/활동사진/최종발표회/IMG_0584.jpg',
    '/활동사진/최종발표회/IMG_0582.jpg',
    '/활동사진/최종발표회/IMG_0579.jpg',
    '/활동사진/최종발표회/IMG_0581.jpg',
    // 뒷풀이
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-04 014.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 013.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 012.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 011.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-02 002.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-02 001.jpeg',
    // 일상사진
    '/활동사진/일상사진/IMG_6261.png',
    '/활동사진/일상사진/IMG_4306.jpg',
    '/활동사진/일상사진/IMG_4618.jpg',
    '/활동사진/일상사진/11111.png',
    '/활동사진/일상사진/IMG_0352.jpg',
    '/활동사진/일상사진/IMG_4701.jpg',
    '/활동사진/일상사진/IMG_4689.jpg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-04 017.jpeg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-04 016.jpeg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-03 010.jpeg',
  ],
  'knowledge-sharing': [
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 020.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 019.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 018.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-04 015.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 009.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 008.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 007.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 006.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-03 005.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-02 004.jpeg',
    '/활동사진/지식공유회/KakaoTalk_Photo_2025-08-16-13-19-02 003.jpeg',
  ],
  'final-presentation': [
    '/활동사진/최종발표회/IMG_0575.jpg',
    '/활동사진/최종발표회/IMG_0592.jpg',
    '/활동사진/최종발표회/IMG_0590.jpg',
    '/활동사진/최종발표회/IMG_0588.jpg',
    '/활동사진/최종발표회/IMG_0586.jpg',
    '/활동사진/최종발표회/IMG_0584.jpg',
    '/활동사진/최종발표회/IMG_0582.jpg',
    '/활동사진/최종발표회/IMG_0579.jpg',
    '/활동사진/최종발표회/IMG_0581.jpg',
  ],
  'after-party': [
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-04 014.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 013.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 012.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-03 011.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-02 002.jpeg',
    '/활동사진/뒷풀이/KakaoTalk_Photo_2025-08-16-13-19-02 001.jpeg',
  ],
  'daily-life': [
    '/활동사진/일상사진/IMG_6261.png',
    '/활동사진/일상사진/IMG_4306.jpg',
    '/활동사진/일상사진/IMG_4618.jpg',
    '/활동사진/일상사진/11111.png',
    '/활동사진/일상사진/IMG_0352.jpg',
    '/활동사진/일상사진/IMG_4701.jpg',
    '/활동사진/일상사진/IMG_4689.jpg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-04 017.jpeg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-04 016.jpeg',
    '/활동사진/일상사진/KakaoTalk_Photo_2025-08-16-13-19-03 010.jpeg',
  ],
};
