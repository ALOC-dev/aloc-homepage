export type ActivityLabel = '지식공유회' | '스터디/프로젝트' | '네트워킹';

export const activityImageMap: Record<ActivityLabel, string> = {
  지식공유회: '/images/introduction/알록이란1.png',
  '스터디/프로젝트': '/images/introduction/알록이란2.png',
  네트워킹: '/images/introduction/aloc-logo.png',
};

export type ActivityConfig = {
  memoTab: { positionClass: string; content: string };
  centralPhotoTab: { positionClass: string; headerText: string };
  alertCard: { positionClass: string; text: string };
};

export const activityConfigMap: Record<ActivityLabel, ActivityConfig> = {
  지식공유회: {
    memoTab: {
      positionClass: 'absolute top-[104px] left-[664px]',
      content:
        'ALOC의 지식공유회는 다양한 주제로 지식을 나누고 함께 성장하는 문화를 지향합니다. 발표와 토론, 실습을 통해 역량을 키워보세요.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[296px] left-[440px]',
      headerText: '지식공유회 미리보기',
    },
    alertCard: {
      positionClass: 'absolute top-[778px] left-[771px]',
      text: 'ALOC의 지식공유회가 궁금하신가요?',
    },
  },
  '스터디/프로젝트': {
    memoTab: {
      positionClass: 'absolute top-[104px] left-[664px]',
      content:
        '스터디/프로젝트에서는 팀으로 협업하며 실전 감각을 익힙니다. 기초부터 심화까지, 함께 만들고 성장합니다.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[296px] left-[440px]',
      headerText: '스터디/프로젝트 미리보기',
    },
    alertCard: {
      positionClass: 'absolute top-[778px] left-[771px]',
      text: 'ALOC의 스터디/프로젝트가 궁금하신가요?',
    },
  },
  네트워킹: {
    memoTab: {
      positionClass: 'absolute top-[104px] left-[664px]',
      content:
        '네트워킹을 통해 선후배, 동료들과 교류하며 정보와 기회를 나눕니다. 사람과 사람이 연결되는 곳, ALOC.',
    },
    centralPhotoTab: {
      positionClass: 'absolute top-[296px] left-[440px]',
      headerText: '네트워킹 미리보기',
    },
    alertCard: {
      positionClass: 'absolute top-[778px] left-[771px]',
      text: 'ALOC의 네트워킹이 궁금하신가요?',
    },
  },
};
