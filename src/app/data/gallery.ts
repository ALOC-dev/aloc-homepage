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
  images: string[];
}

// 폴더별 이미지 데이터
export const folderData: Record<FolderType, FolderInfo> = {
  all: {
    id: 'all',
    name: '전체',
    images: [
      '/images/gallery/gallery-1.jpg',
      '/images/gallery/gallery-2.jpg',
      '/images/gallery/gallery-3.jpg',
      '/images/gallery/gallery-4.jpg',
      '/images/gallery/gallery-5-4eaa59.jpg',
      '/images/gallery/gallery-6.jpg',
      '/images/gallery/gallery-7.jpg',
      '/images/gallery/gallery-1.jpg',
    ],
  },
  'knowledge-sharing': {
    id: 'knowledge-sharing',
    name: '지식공유회',
    images: [
      '/images/gallery/gallery-1.jpg',
      '/images/gallery/gallery-2.jpg',
      '/images/gallery/gallery-3.jpg',
    ],
  },
  'final-presentation': {
    id: 'final-presentation',
    name: '최종발표회',
    images: [
      '/images/gallery/gallery-4.jpg',
      '/images/gallery/gallery-5-4eaa59.jpg',
      '/images/gallery/gallery-6.jpg',
    ],
  },
  'after-party': {
    id: 'after-party',
    name: '뒷풀이',
    images: [
      '/images/gallery/gallery-7.jpg',
      '/images/gallery/gallery-1.jpg',
      '/images/gallery/gallery-2.jpg',
    ],
  },
  'daily-life': {
    id: 'daily-life',
    name: '일상',
    images: [
      '/images/gallery/gallery-3.jpg',
      '/images/gallery/gallery-4.jpg',
      '/images/gallery/gallery-5-4eaa59.jpg',
    ],
  },
};
