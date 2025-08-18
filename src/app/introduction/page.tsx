'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Introduction() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);

  useEffect(() => {
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
            setIsScrollLocked(false);
            // body 스크롤 복원
            document.body.style.overflow = 'auto';
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

  return (
    <div className='min-h-screen bg-black'>
      {/* Hero Section */}
      <div className='relative min-h-screen flex flex-col items-center justify-center px-4'>
        {/* 배경 이미지 */}
        <div className='absolute inset-0'>
          <Image
            src='/images/introduction/aloc-logo.png'
            alt='ALOC Logo'
            fill
            className='object-cover opacity-20'
            priority
          />
        </div>

        {/* 메인 콘텐츠 */}
        <div className='relative z-10 flex flex-col items-center justify-center'>
          {/* 중앙 이미지 */}
          <div className='w-64 h-64 mb-16 relative'>
            <Image
              src='/images/introduction/aloc-logo.png'
              alt='ALOC'
              fill
              className='object-contain'
              priority
            />
          </div>

          {/* 텍스트 콘텐츠 */}
          <div className='text-center text-white max-w-2xl mx-auto'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>ALOC</h1>
            <p className='text-lg md:text-xl text-gray-300 leading-relaxed'>
              서울시립대학교 컴퓨터과학부 학술동아리
            </p>
            <p className='text-base md:text-lg text-gray-400 mt-4 leading-relaxed'>
              함께 성장하며 컴퓨터 과학의 깊이를 탐구하는 공간
            </p>
          </div>

          {/* 스크롤 안내 */}
          {scrollProgress < 100 && (
            <div className='text-center text-white mt-8 animate-bounce'>
              <p className='text-sm text-gray-400 mb-2'>스크롤하여 계속하기</p>
              <div className='w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center'>
                <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse'></div>
              </div>
            </div>
          )}
        </div>

        {/* 스크롤 게이지바 */}
        <div
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20 transition-all duration-1000 ease-in-out ${
            scrollProgress >= 100
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100'
          }`}
        >
          <div className='w-72 md:w-96 h-5 bg-gray-600 rounded-full overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out'
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
          <div className='text-center mt-2'>
            <span className='text-white text-sm font-medium'>
              {Math.round(scrollProgress)}%
            </span>
          </div>

          {/* 게이지바가 완성되면 표시되는 메시지 */}
          {scrollProgress >= 100 && (
            <div className='text-center mt-4'>
              <p className='text-green-400 text-sm font-medium'>
                스크롤을 계속하세요!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 추가 콘텐츠 섹션 */}
      <div className='bg-gradient-to-b from-black to-gray-900 py-20'>
        <div className='container mx-auto px-4'>
          <div className='text-white text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold mb-8'>ALOC 소개</h2>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
              서울시립대학교 컴퓨터과학부에서 운영하는 학술동아리로, 컴퓨터
              과학의 다양한 분야를 탐구하며 함께 성장하는 공간입니다.
            </p>
          </div>

          {/* 주요 활동 카드 */}
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16'>
            <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors'>
              <div className='w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <span className='text-white font-bold text-xl'>📚</span>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-center'>
                학술 활동
              </h3>
              <p className='text-gray-300 text-center'>
                컴퓨터 과학의 다양한 분야를 탐구하며 깊이 있는 학습을
                진행합니다.
              </p>
            </div>

            <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors'>
              <div className='w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <span className='text-white font-bold text-xl'>💻</span>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-center'>
                프로젝트
              </h3>
              <p className='text-gray-300 text-center'>
                실무에 적용 가능한 프로젝트를 통해 실전 경험을 쌓습니다.
              </p>
            </div>

            <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors'>
              <div className='w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <span className='text-white font-bold text-xl'>🤝</span>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-center'>
                네트워킹
              </h3>
              <p className='text-gray-300 text-center'>
                동료들과의 협력을 통해 함께 성장하는 환경을 제공합니다.
              </p>
            </div>

            <div className='bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors'>
              <div className='w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto'>
                <span className='text-white font-bold text-xl'>👥</span>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-center'>
                커뮤니티
              </h3>
              <p className='text-gray-300 text-center'>
                열정적인 학생들이 모여 지식을 공유하고 발전시키는 공간입니다.
              </p>
            </div>
          </div>

          {/* 상세 정보 섹션 */}
          <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
            <div className='bg-gray-800 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-6 text-center'>
                우리의 목표
              </h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2'>•</span>
                  컴퓨터 과학의 깊이 있는 이해와 실무 적용 능력 향상
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2'>•</span>
                  동료들과의 협력을 통한 지식 공유와 성장
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2'>•</span>
                  혁신적인 프로젝트를 통한 실전 경험 축적
                </li>
                <li className='flex items-start'>
                  <span className='text-blue-400 mr-2'>•</span>
                  학술적 토론과 연구를 통한 사고력 개발
                </li>
              </ul>
            </div>

            <div className='bg-gray-800 p-8 rounded-lg'>
              <h3 className='text-2xl font-bold mb-6 text-center'>주요 활동</h3>
              <ul className='text-gray-300 space-y-3'>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  정기적인 스터디 세션 및 기술 세미나
                </li>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>팀 프로젝트 및
                  해커톤 참여
                </li>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  학술 대회 및 논문 발표
                </li>
                <li className='flex items-start'>
                  <span className='text-purple-400 mr-2'>•</span>
                  산업체 연계 프로그램 및 인턴십
                </li>
              </ul>
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
