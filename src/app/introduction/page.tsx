'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ActivityLabel,
  activityImageMap,
  activityConfigMap,
} from '@/app/data/introduction';

interface BrowserTabHeaderProps {
  label: string;
  gapClass?: string;
  labelClassName?: string;
}

function BrowserTabHeader({
  label,
  gapClass = 'gap-3',
  labelClassName = 'text-xs',
}: BrowserTabHeaderProps) {
  return (
    <div className='bg-gray-200 px-4 py-2 flex items-center justify-between'>
      <div className={`flex items-center ${gapClass}`}>
        <div className='w-3 h-3 bg-red-400 rounded-full'></div>
        <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
        <div className='w-3 h-3 bg-green-400 rounded-full'></div>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <span className={`${labelClassName} text-gray-600`}>{label}</span>
      </div>
    </div>
  );
}

export default function Introduction() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [showModalSection, setShowModalSection] = useState(false);
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityLabel>('지식공유회');

  useEffect(() => {
    // 페이지 로드 시 스크롤 위치를 최상단으로 이동
    window.scrollTo(0, 0);

    const handleWheel = (e: WheelEvent) => {
      // 게이지바가 100% 미만일 때만 스크롤 방지
      if (scrollProgress < 100) {
        e.preventDefault();

        // 스크롤 방향에 따라 게이지바 증가/감소
        const scrollDelta = e.deltaY > 0 ? 5 : -5; // 스크롤 감도 조절
        setScrollProgress((prev) => {
          const newProgress = Math.max(0, Math.min(100, prev + scrollDelta));

          // 게이지바가 100%에 도달하면 스크롤 잠금 해제
          if (newProgress >= 100) {
            // 3초 후에 스크롤 잠금 해제
            setTimeout(() => {
              setIsScrollLocked(false);
              // body 스크롤 복원
              document.body.style.overflow = 'auto';
            }, 1000);
          }

          return newProgress;
        });
      }
    };

    // 스크롤 이벤트 방지 (게이지바 완성 전까지만)
    const preventScroll = (e: Event) => {
      if (scrollProgress < 100) {
        e.preventDefault();
      }
    };

    // 터치 이벤트 처리 (모바일)
    const handleTouchMove = (e: TouchEvent) => {
      if (scrollProgress < 100) {
        e.preventDefault();
      }
    };

    // 게이지바가 완성되기 전까지만 이벤트 리스너 등록
    if (isScrollLocked) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    };
  }, [scrollProgress, isScrollLocked]);

  // 모달 섹션 애니메이션을 위한 useEffect
  useEffect(() => {
    const handleScroll = () => {
      const modalSection = document.getElementById('modal-section');
      if (modalSection) {
        const rect = modalSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 화면의 80% 지점에 도달하면 애니메이션 시작
        if (rect.top <= windowHeight * 0.01) {
          setShowModalSection(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='min-h-screen bg-white min-w-[1440px]'>
      {/* 게이지바 섹션 */}
      <div className='min-h-screen flex flex-col items-center justify-center px-4 bg-black'>
        {/* 스크롤바 콘텐츠 */}
        <div className='z-10 flex flex-col items-center justify-center relative'>
          {/* 스크롤 안내 */}
          <div
            className={`mt-36 transition-all duration-1500 ease-in-out ${
              scrollProgress >= 100 ? 'opacity-0 ' : 'opacity-100 '
            }`}
          >
            {/* 중앙 이미지 */}
            <div className='w-full h-64 mb-16 relative'>
              <Image
                src='/images/introduction/aloc-logo.png'
                alt='ALOC'
                fill
                className='object-contain'
                priority
              />
            </div>
            {/* 스크롤 게이지바 */}
            <div
              className={`z-20 transition-all duration-1000 ease-in-out ${
                scrollProgress >= 100
                  ? 'opacity-0 pointer-events-none'
                  : 'opacity-100'
              }`}
            >
              <div className='w-72 md:w-96 h-4 bg-gray-600 rounded-full overflow-hidden'>
                <div
                  className='h-full bg-white transition-all duration-300 ease-out'
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
            </div>
            {/* 스크롤 안내 */}
            <div className='text-center text-white mt-8 animate-bounce'>
              <p className='text-sm text-gray-400 mb-2'>스크롤하여 계속하기</p>
              <div className='w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center'>
                <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse'></div>
              </div>
            </div>
          </div>
          {/* 동아리 소개 메인 텍스트 */}
          <div
            className={`transition-all duration-1500 ease-in-out text-center text-white max-w-2xl mx-auto absolute ${
              scrollProgress === 100
                ? 'opacity-100 transform translate-y-0'
                : 'opacity-0 transform translate-y-[40px]'
            }`}
          >
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>ALOC</h1>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              서울시립대학교 컴퓨터과학부 학술 소모임
            </p>
          </div>
        </div>
      </div>

      {/* 알록이란? 섹션 */}
      <div className='bg-white relative min-h-[1080px] w-[1440px] left-1/2 -translate-x-1/2 mb-100 scale-[0.8]'>
        {/* 전체 프레임 기준으로 카드들을 겹쳐서 배치 */}

        {/* 1. 노트 스타일 카드 (우상단) */}
        <div className='absolute top-[61px] right-[106px] w-[389px] h-[224px] bg-yellow-50 rounded-xl shadow-lg border-l-4 border-yellow-400'>
          <div className='bg-yellow-100 rounded-lg p-6 h-full'>
            <h3 className='text-2xl font-medium text-gray-800 mb-4'>
              <span className='text-blue-600'>A</span>
              <span className='text-blue-600'>L</span>
              <span className='text-blue-600'>O</span>
              <span className='text-blue-600'>C</span>,{' '}
              <span className='text-blue-600'>A</span>
              <span className='text-black'>ll </span>
              <span className='text-blue-600'>L</span>
              <span className='text-black'>inked </span>
              <span className='text-blue-600'>O</span>
              <span className='text-black'>ne </span>
              <span className='text-blue-600'>C</span>
              <span className='text-black'>ode</span>. 하나의 연결된~
            </h3>
          </div>
        </div>

        {/* 2. 조직도 스타일 카드 (좌하단) */}
        <div className='absolute bottom-[93px] left-[67px] w-[511px] h-[320px] '>
          <div className='inset-0 p-5 w-[346px] h-[298px] grid grid-rows-3 bg-gray-100 rounded-xl shadow-lg'>
            {(() => {
              // 조직도 데이터 정의
              const orgData = [
                {
                  items: [
                    {
                      text: 'Univ Of Seoul',
                      className: 'text-xl font-small tracking-tight',
                      itemClass: '',
                    },
                    {
                      text: 'Computer Science',
                      className: 'text-xl font-small tracking-tight',
                      itemClass: '',
                    },
                  ],
                  containerClass:
                    'grid grid-rows-2 mx-3 border-b-2 border-gray-300',
                },
                {
                  items: [
                    {
                      text: 'ALOC',
                      className: 'text-xl font-small tracking-tight',
                      itemClass: '',
                    },
                    {
                      text: 'All Linked One Code',
                      className: 'text-xl font-small tracking-tight',
                      itemClass: '',
                    },
                  ],
                  containerClass:
                    'grid grid-rows-2 mx-3 border-b-2 border-gray-300',
                },
                {
                  items: [
                    {
                      text: 'Activity',
                      className: 'text-xl text-white font-small tracking-tight',
                      itemClass: 'bg-blue-500 rounded-2xl p-3 my-1',
                    },
                    {
                      text: 'All Linked One Code',
                      className: 'text-xl font-small tracking-tight',
                      itemClass: 'mx-3',
                    },
                  ],
                  containerClass: 'grid grid-rows-2',
                },
              ];

              return orgData.map((section, sectionIndex) => (
                <div key={sectionIndex} className={section.containerClass}>
                  {section.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`flex items-center justify-between ${item.itemClass || ''}`}
                    >
                      <span className={item.className}>{item.text}</span>
                      <div className='w-4 h-4'>
                        <Image
                          src='/images/members/arrow-right.svg'
                          alt='arrow-right'
                          width={8}
                          height={8}
                          className='object-contain'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ));
            })()}
          </div>

          {/* 오른쪽: 활동 분야 */}
          <div className='absolute w-[173px] h-[129px] bottom-0 right-0 bg-gray-100 rounded-xl shadow-lg p-3'>
            <div className='grid grid-cols-1 gap-2'>
              <span className='text-xl font-small tracking-tight'>Study</span>
              <span className='text-xl font-small tracking-tight'>Project</span>
              <span className='text-xl font-small tracking-tight'>
                Networking
              </span>
            </div>
          </div>
        </div>

        {/* 3. 중앙 탭 */}
        <div className='absolute top-[166px] left-[310px] z-10'>
          <div className='w-[794px] h-[649px] bg-gray-100 rounded-xl overflow-hidden shadow-lg'>
            <BrowserTabHeader label='ALOC' />
            <div className='h-full flex items-center justify-center'>
              <Image
                src='/images/introduction/알록이란2.png'
                alt='ALOC 소개'
                width={794}
                height={649}
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>

        {/* 4. 좌 상단 탭 */}
        <div className='absolute top-[30px] left-[75px] w-[299px] h-[290px] bg-gray-100 rounded-xl overflow-hidden shadow-lg z-20'>
          <BrowserTabHeader
            label='ALOC'
            gapClass='gap-2'
            labelClassName='text-xs'
          />
          <div className='h-full flex items-center justify-center'>
            <Image
              src='/images/introduction/알록이란1.png'
              alt='Study'
              width={299}
              height={290}
              className='w-full h-full object-cover'
            />
          </div>
        </div>

        {/* 5. 메인 소개 카드 (우하단) */}
        <div className='absolute bottom-[59px] right-[200px] w-[335px] h-[520px] bg-gray-100 rounded-3xl p-8 shadow-lg overflow-hidden z-40'>
          {/* 도움말 버튼 */}
          <div className='absolute top-4 right-4'>
            <button className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-black text-sm hover:bg-gray-400 transition-colors'>
              ?
            </button>
          </div>
          {/* 메인 콘텐츠 */}
          <div className='relative z-10 flex flex-col items-center text-center h-full'>
            {/* 로고 이미지 */}
            <div className='w-28 h-28 rounded-full overflow-hidden bg-white shadow-md flex-shrink-0 mb-6'>
              <Image
                src='/images/introduction/aloc-logo.png'
                alt='ALOC Logo'
                width={112}
                height={112}
                className='object-cover'
              />
            </div>

            {/* 텍스트 콘텐츠 */}
            <div className='mb-8'>
              <h2 className='text-4xl font-bold text-black mb-4'>ALOC</h2>
              <p className='text-base text-gray-600 leading-relaxed'>
                ALOC은 서울시립대학교 컴퓨터과학부
                <br />
                학술 소모임입니다.
                <br />
                함께 성장하는 개발 문화를 만듭니다.
              </p>
            </div>

            {/* 버튼 그룹 */}
            <div className='w-full space-y-3'>
              <button className='w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white px-8 py-2 rounded-4xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md'>
                가입하기!
              </button>
              <button className='w-full bg-gray-300 text-black px-8 py-2 rounded-4xl font-medium hover:bg-gray-400 transition-all duration-300'>
                재밌겠다!
              </button>
            </div>

            {/* 체크박스 */}
            <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-2'>
              <input type='checkbox' id='dontAsk' className='w-4 h-4' />
              <label htmlFor='dontAsk' className='text-sm text-gray-600'>
                다시 묻지 않기
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* 무엇을 하나요?(모달) 섹션 */}
      <div id='modal-section' className='bg-white relative py-20 scale-[0.6]'>
        <div className='container mx-auto px-4'>
          <div className='w-[769px] h-[460px] mx-auto flex flex-col justify-center items-center'>
            {/* 모달 카드 */}
            <div
              className={`w-full h-full bg-gray-200 rounded-3xl shadow-lg relative overflow-hidden transition-all duration-1000 ease-out ${
                showModalSection
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-20'
              }`}
            >
              {/* 상단 헤더 */}
              <div className='text-center w-full h-[329px] flex flex-col justify-center items-center'>
                <h2 className='text-6xl font-bold text-black mb-6'>Activity</h2>
                <p className='text-4xl text-black'>ALOC에서는 무엇을 하나요?</p>
              </div>

              {/* 구분선 */}
              <div className='border-t-4 border-gray-300'></div>

              {/* 하단 버튼 영역 */}
              <div className='flex flex-row w-full h-[131px]'>
                <div className='basis-1/2 border-r-4 border-gray-300 flex justify-center items-center'>
                  <span className='text-4xl text-blue-500'>options</span>
                </div>
                <div className='basis-1/2 flex justify-center items-center'>
                  <span className='text-4xl text-blue-500'>close</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 알록의 활동 섹션 */}
      <div className='bg-white relative py-20 scale-[0.7]'>
        <div className='container px-4'>
          <div className='w-[1440px] h-[1352px] relative'>
            {/* 활동 폴더들 */}
            {(() => {
              const activityCards = [
                { label: '지식공유회' },
                { label: '스터디/프로젝트' },
                { label: '네트워킹' },
              ] as const;

              return (
                <div className='absolute left-[0px] top-[214px] w-[289px] flex flex-col items-center gap-[80px]'>
                  {activityCards.map((card, index) => (
                    <button
                      key={index}
                      type='button'
                      onClick={() =>
                        setSelectedActivity(card.label as ActivityLabel)
                      }
                      className='flex flex-col items-center gap-2 focus:outline-none'
                    >
                      <div className='relative w-[189px] h-[155px] scale-[0.8]'>
                        <Image
                          src='/images/introduction/folder.svg'
                          alt='folder'
                          fill
                          className='object-cover'
                        />
                      </div>
                      <div
                        className={`text-[30px] text-center ${selectedActivity === card.label ? 'text-blue-600' : 'text-black'}`}
                      >
                        {card.label}
                      </div>
                    </button>
                  ))}
                </div>
              );
            })()}

            {/* 메모 탭 (노란색 배경) */}
            <div
              className={`${activityConfigMap[selectedActivity].memoTab.positionClass} w-[676px] h-[425px] bg-yellow-200 rounded-lg shadow-lg`}
            >
              {/* 브라우저 헤더 */}
              <div className='w-full h-[29px] bg-yellow-300 rounded-t-lg flex items-center px-3'>
                <div className='flex items-center gap-1'>
                  <div className='w-[19px] h-[18px] bg-yellow-200 border-2 border-yellow-600 rounded'></div>
                </div>
                <div className='flex-1'></div>
                <div className='flex items-center gap-1'>
                  <div className='w-[19px] h-[18px] border-2 border-yellow-600 rounded'></div>
                  <div className='w-[19px] h-[18px] border-2 border-yellow-600 rounded'></div>
                </div>
              </div>
              {/* 콘텐츠 영역 */}
              <div className='w-full h-[396px] bg-yellow-100 p-6'>
                <p className='text-[30px] leading-[1.33] tracking-[-3.33%] text-gray-800'>
                  {activityConfigMap[selectedActivity].memoTab.content}
                </p>
              </div>
            </div>

            {/* 중앙 사진 탭 - 선택된 활동 이미지 표시 */}
            <div
              className={`${activityConfigMap[selectedActivity].centralPhotoTab.positionClass} z-10`}
            >
              <div className='w-[748px] h-[584px] bg-gray-100 rounded-xl overflow-hidden shadow-lg'>
                <div className='bg-gray-200 px-4 py-2 flex items-center justify-between'>
                  {/* 3개 원 그룹 - 좌측 배치 */}
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                  </div>
                  {/* span - 중앙 배치 */}
                  <div className='absolute left-1/2 transform -translate-x-1/2'>
                    <span className='text-m text-gray-600'>
                      {
                        activityConfigMap[selectedActivity].centralPhotoTab
                          .headerText
                      }
                    </span>
                  </div>
                </div>
                <div className='h-full flex items-center justify-center'>
                  <Image
                    src={activityImageMap[selectedActivity]}
                    alt={selectedActivity}
                    width={748}
                    height={584}
                    className='w-full h-full object-cover'
                  />
                </div>
              </div>
            </div>

            {/* 우측 하단 알림 카드 */}
            <div
              className={`${activityConfigMap[selectedActivity].alertCard.positionClass} w-[521px] h-[312px] bg-gray-200 rounded-[24px] relative z-20`}
            >
              {/* 느낌표 아이콘 → alert.png 이미지로 대체 */}
              <div className='absolute top-[41px] left-[201px] w-[132px] h-[132px]'>
                <Image
                  src='/images/introduction/alert.png'
                  alt='alert'
                  width={132}
                  height={132}
                  className='w-full h-full object-cover'
                />
              </div>
              {/* 텍스트 */}
              <div className='absolute top-[165px] left-[90px] text-[24px] text-black'>
                {activityConfigMap[selectedActivity].alertCard.text}
              </div>
              {/* 더보기 버튼 */}
              <div className='absolute top-[219px] left-[37px] w-[461px] h-[48px] bg-gradient-to-b from-blue-500 to-blue-600 rounded-[16px] flex items-center justify-center'>
                <span className='text-[24px] text-white'>더보기</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 연락처 섹션 */}
      <div className='bg-gray-900 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-2xl md:text-3xl font-bold text-white mb-8'>
            함께 성장할 동료를 찾고 있습니다
          </h2>
          <p className='text-gray-300 mb-8 max-w-2xl mx-auto'>
            컴퓨터 과학에 대한 열정과 호기심을 가진 모든 학생들을 환영합니다.
            함께 배우고 성장하며 미래를 만들어가요.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
              지원하기
            </button>
            <button className='bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
              더 알아보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
