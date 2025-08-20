export type ActivityLabel = '지식공유회' | '스터디/프로젝트' | '네트워킹';

export const activityImageMap: Record<ActivityLabel, string> = {
  지식공유회: '/images/introduction/지식공유회.jpeg',
  '스터디/프로젝트': '/images/introduction/프로젝트.png',
  네트워킹: '/images/introduction/네트워킹.jpeg',
};

export type ActivityConfig = {
  memoTab: { positionClass: string; content: string };
  centralPhotoTab: { positionClass: string; headerText: string };
  alertCard: { positionClass: string; text: string; link: string };
};

export const activityConfigMap: Record<ActivityLabel, ActivityConfig> = {
  지식공유회: {
    memoTab: {
      positionClass: 'absolute top-[90px] left-[800px]',
      content:
        'ALOC의 지식공유회는 다양한 주제로 지식을 나누고 함께 성장하는 문화를 지향합니다. 발표와 토론, 실습을 통해 역량을 키워보세요.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[280px] left-[420px]',
      headerText: '지식공유회',
    },
    alertCard: {
      positionClass: 'absolute top-[760px] left-[740px]',
      text: 'ALOC의 지식공유회가 궁금하신가요?',
      link: '/',
    },
  },
  '스터디/프로젝트': {
    memoTab: {
      positionClass: 'absolute top-[110px] left-[420px]',
      content:
        '스터디/프로젝트에서는 팀으로 협업하며 실전 감각을 익힙니다. 기초부터 심화까지, 함께 만들고 성장합니다.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[310px] left-[680px]',
      headerText: '스터디/프로젝트',
    },
    alertCard: {
      positionClass: 'absolute top-[820px] left-[400px]',
      text: 'ALOC의 스터디/프로젝트가 궁금하신가요?',
      link: '/',
    },
  },
  네트워킹: {
    memoTab: {
      positionClass: 'absolute top-[120px] left-[640px]',
      content:
        '네트워킹을 통해 선후배, 동료들과 교류하며 정보와 기회를 나눕니다. 사람과 사람이 연결되는 곳, ALOC.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[330px] left-[460px]',
      headerText: '네트워킹',
    },
    alertCard: {
      positionClass: 'absolute top-[760px] left-[1060px]',
      text: 'ALOC의 네트워킹이 궁금하신가요?',
      link: '/',
    },
  },
};
