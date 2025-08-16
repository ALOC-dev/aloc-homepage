export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  date: string;
  members: string[];
  status: 'active' | 'completed' | 'planning';
  github?: string;
  notion?: string;
  slidesCount?: number;
  pdfPath?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '이시대맛집',
    subtitle: '시립대 주변 맛집 지도',
    description:
      '시립대학교 학생들을 위한 주변 맛집 정보를 제공하는 웹 서비스입니다. 사용자 리뷰와 평점을 기반으로 한 추천 시스템을 통해 최적의 맛집을 찾을 수 있습니다.',
    tags: ['react', 'next', 'typescript', 'map-api'],
    date: '2025년 3월 ~ 2025년 6월',
    members: ['이채우', '정지윤', '최문기', '백형우', '김영현'],
    status: 'active',
    github: 'https://github.com/aloc-team/this-era-restaurant',
    notion: 'https://aloc.notion.site/this-era-restaurant',
    slidesCount: 36,
    pdfPath: '/pdfs/activities/projects/ALOC_최종발표회_이시대맛집.pdf',
  },
  {
    id: '2',
    title: 'UOScholar',
    subtitle: '시립대 학칙 안내 챗봇',
    description:
      '시립대학교 학생들을 위한 학칙 안내 챗봇 서비스입니다. 자연어 처리를 통해 학생들의 질문에 실시간으로 답변하고, 학사 정보를 효율적으로 제공합니다.',
    tags: ['chatbot', 'nlp', 'python', 'fastapi', 'ai'],
    date: '2025년 3월 ~ 진행중',
    members: ['김동환', '김정훈', '송희영', '조우형', '김동현'],
    status: 'active',
    github: 'https://github.com/aloc-team/uoscholar',
    notion: 'https://aloc.notion.site/uoscholar',
    slidesCount: 24,
    pdfPath: '/pdfs/activities/projects/ALOC_최종발표회_UOScholar.pdf',
  },
];

export const studies = [
  {
    id: '1',
    title: 'Deep하게 Deep스터디',
    subtitle: '딥러닝 심화 학습 스터디',
    description:
      '딥러닝의 핵심 개념부터 최신 기술까지 깊이 있게 학습하는 스터디입니다. 이론과 실습을 병행하여 실제 프로젝트에 적용할 수 있는 실무 역량을 기릅니다.',
    tags: ['deep-learning', 'python', 'tensorflow', 'pytorch'],
    date: '2025년 3월 ~ 2025년 6월',
    members: ['이도권', '이준형', '김준수', '유영호', '김동현', '박도현'],
    status: 'active',
    github: 'https://github.com/aloc-team/deep-study',
    notion: 'https://aloc.notion.site/deep-study',
    slidesCount: 47,
    pdfPath: '/pdfs/activities/studies/ALOC_최종발표회_Deep하게Deep스터디.pdf',
  },
  {
    id: '2',
    title: 'pintOs in UOS',
    subtitle: '운영체제 구현 스터디',
    description:
      'PintOS 운영체제를 기반으로 한 커스텀 운영체제 구현 스터디입니다. 스케줄링, 메모리 관리, 파일 시스템 등 운영체제의 핵심 기능을 직접 구현하며 학습합니다.',
    tags: ['operating-system', 'c', 'pintos', 'system-programming'],
    date: '2025년 3월 ~ 2025년 6월',
    members: ['박주영', '나윤서', '허준재'],
    status: 'active',
    github: 'https://github.com/aloc-team/pintos-uos',
    notion: 'https://aloc.notion.site/pintos-uos',
    slidesCount: 42,
    pdfPath: '/pdfs/activities/studies/ALOC_최종발표회_pintOs.pdf',
  },
  {
    id: '3',
    title: '로우레벨 프로그래밍 근데 이제 백엔드를 곁들인',
    subtitle: '시스템 프로그래밍과 백엔드 개발 스터디',
    description:
      '로우레벨 시스템 프로그래밍과 현대적인 백엔드 개발을 결합한 스터디입니다. 성능 최적화와 확장 가능한 아키텍처를 동시에 학습합니다.',
    tags: ['system-programming', 'backend', 'go', 'rust', 'database'],
    date: '2025년 3월 ~ 2025년 6월',
    members: ['이태권', '배인수', '장지원', '최정혁', '박성진'],
    status: 'active',
    github: 'https://github.com/aloc-team/low-level-backend',
    notion: 'https://aloc.notion.site/low-level-backend',
    slidesCount: 32,
    pdfPath:
      '/pdfs/activities/studies/ALOC_최종발표회_로우레벨프로그래밍근데이제백엔드를곁들인.pdf',
  },
];
