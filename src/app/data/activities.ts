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
  {
    id: '3',
    title: 'ALOC 포트폴리오',
    subtitle: '팀 포트폴리오 웹사이트 개발',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/project-image-2b1b0e.png',
    tags: ['react', 'next', 'tailwind', 'typescript'],
    date: '2025년 1월 10일 ~ 완료',
    members: ['이채우', '김영현', '백형우', '정지윤', '최문기', '박주영'],
    status: 'completed',
    github: 'https://github.com/aloc-team/portfolio',
    notion: 'https://aloc.notion.site/portfolio',
    slidesCount: 42,
  },
  {
    id: '4',
    title: '스마트 캠퍼스',
    subtitle: 'IoT 기반 캠퍼스 시설 관리 시스템',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/project-image-2b1b0e.png',
    tags: ['python', 'django', 'iot', 'aws'],
    date: '2024년 12월 ~ 진행 중',
    members: ['이채우', '김영현', '백형우'],
    status: 'active',
    github: 'https://github.com/aloc-team/smart-campus',
    notion: 'https://aloc.notion.site/smart-campus',
    slidesCount: 28,
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
  {
    id: '2',
    title: '웹 개발 스터디',
    subtitle: 'React와 Next.js 심화 학습',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/activity-photo.png',
    tags: ['react', 'next', 'typescript', 'tailwind'],
    date: '2024년 12월 ~ 진행 중',
    members: ['이채우', '김영현', '정지윤', '최문기'],
    status: 'active',
    github: 'https://github.com/aloc-team/web-study',
    notion: 'https://aloc.notion.site/web-study',
    slidesCount: 25,
  },
  {
    id: '3',
    title: 'AI/ML 스터디',
    subtitle: '머신러닝과 딥러닝 기초부터 심화까지',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/activity-photo.png',
    tags: ['python', 'tensorflow', 'pytorch', 'scikit-learn'],
    date: '2024년 11월 ~ 진행 중',
    members: ['백형우', '정지윤', '박주영'],
    status: 'active',
    github: 'https://github.com/aloc-team/ai-ml-study',
    notion: 'https://aloc.notion.site/ai-ml-study',
    slidesCount: 32,
  },
  {
    id: '4',
    title: '데이터베이스 스터디',
    subtitle: 'SQL과 NoSQL 데이터베이스 설계',
    description:
      '설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명',
    image: '/images/figma/activity-photo.png',
    tags: ['mysql', 'postgresql', 'mongodb', 'redis'],
    date: '2024년 10월 ~ 완료',
    members: ['이채우', '김영현', '백형우', '정지윤', '최문기'],
    status: 'completed',
    github: 'https://github.com/aloc-team/database-study',
    notion: 'https://aloc.notion.site/database-study',
    slidesCount: 20,
  },
];
