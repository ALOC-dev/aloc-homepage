export interface Member {
  id: number;
  name: string;
  role: string;
  stack: string;
  generation: number;
  avatar: string;
  introduction: string;
  githubUrl?: string;
}

export const members: Member[] = [
  {
    id: 1,
    name: '2기 박주영',
    role: '회장',
    stack: '백엔드, AI',
    generation: 2,
    avatar: '/images/members/profile-icon.png',
    introduction:
      '안녕하세요. 서울시립대학교 컴퓨터과학부 2기 박주영입니다. 백엔드 개발과 AI에 관심이 많으며, ALOC의 회장을 맡고 있습니다.',
    githubUrl: 'https://github.com/example1',
  },
  {
    id: 2,
    name: '3기 송희영',
    role: '부원',
    stack: '프론트엔드',
    generation: 3,
    avatar: '/images/members/profile-icon.png',
    introduction:
      '안녕하세요. 서울시립대학교 컴퓨터과학부 3기 송희영입니다. 프론트엔드 개발에 열정을 가지고 있으며, 사용자 경험 개선에 관심이 많습니다.',
    githubUrl: 'https://github.com/example2',
  },
  {
    id: 3,
    name: '3기 이채우',
    role: '부원',
    stack: '백엔드',
    generation: 3,
    avatar: '/images/members/profile-icon.png',
    introduction:
      '안녕하세요. 서울시립대학교 컴퓨터과학부 3기 이채우입니다. 백엔드 개발과 서버 아키텍처에 관심이 있으며, 안정적인 시스템 구축을 목표로 하고 있습니다.',
    githubUrl: 'https://github.com/example3',
  },
  {
    id: 4,
    name: '3기 김정훈',
    role: '부원',
    stack: 'AI',
    generation: 3,
    avatar: '/images/members/profile-icon.png',
    introduction:
      '안녕하세요. 서울시립대학교 컴퓨터과학부 3기 김정훈입니다. 머신러닝과 딥러닝에 관심이 많으며, AI 기술을 활용한 혁신적인 솔루션 개발에 참여하고 있습니다.',
    githubUrl: 'https://github.com/example4',
  },
  // 추가 멤버들 (플레이스홀더)
  ...Array.from({ length: 16 }, (_, i) => ({
    id: i + 5,
    name: '이름',
    role: '역할',
    stack: '관련스택',
    generation: 1,
    avatar: '/images/members/profile-icon.png',
    introduction: '안녕하세요. 서울시립대학교 컴퓨터과학부 멤버입니다.',
  })),
];

export const getMemberById = (id: number): Member | undefined => {
  return members.find((member) => member.id === id);
};

export const getMembersByGeneration = (generation: number): Member[] => {
  return members.filter((member) => member.generation === generation);
};
