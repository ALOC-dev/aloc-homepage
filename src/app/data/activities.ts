export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  date: string;
  members: string[];
  status: 'active' | 'completed' | 'planning';
  github?: string;
  notion?: string;
  slidesCount?: number;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '이시대맛집',
    subtitle: '시립대 주변 맛집 지도',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/project-image-2b1b0e.png',
    tags: ['react', 'next', 'typescript'],
    date: '2025년 3월 2일 ~ 진행 중',
    members: ['이채우', '김영현', '백형우', '정지윤', '최문기'],
    status: 'active',
    github: 'https://github.com/aloc-team/this-era-restaurant',
    notion: 'https://aloc.notion.site/this-era-restaurant',
    slidesCount: 36,
  },
  {
    id: '2',
    title: 'UOScholar',
    subtitle: '시립대 학칙 안내 챗봇',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/project-image-2b1b0e.png',
    tags: ['react', 'next', 'typescript'],
    date: '2025년 2월 15일 ~ 진행 중',
    members: ['이채우', '김영현'],
    status: 'active',
    github: 'https://github.com/aloc-team/uoscholar',
    notion: 'https://aloc.notion.site/uoscholar',
    slidesCount: 24,
  },
];

export const studies = [
  {
    id: '1',
    title: '알고리즘 스터디',
    subtitle: '주 2회 알고리즘 문제 풀이',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/activity-photo.png',
    tags: ['algorithm', 'data-structure'],
    date: '2025년 1월 ~ 진행 중',
    members: ['이채우', '김영현', '백형우'],
    status: 'active',
    github: 'https://github.com/aloc-team/algorithm-study',
    notion: 'https://aloc.notion.site/algorithm-study',
    slidesCount: 18,
  },
];
