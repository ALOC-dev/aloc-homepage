'use client';

import Image from 'next/image';

export default function Main() {
  return (
    <div className='w-full h-screen relative bg-white overflow-hidden'>
      {/* 메인 컨테이너 - 피그마 원본 크기 */}
      <div className='w-full h-full relative'>
        {/* 배경 */}
        <div className='w-full h-full absolute inset-0 bg-white'></div>

        {/* 배경 이미지 - 다이나믹 크기 조절 */}
        <div className='w-full h-full absolute inset-0'>
          <Image
            src='/images/Rectangle 1631.png'
            alt='Background'
            width={1440}
            height={1080}
            className='w-full h-full object-contain'
            priority
          />
          {/* 스티커 1 - project 스티커 - 연속적 크기 조절 */}
          <div className='absolute left-[18.75%] top-[30.5%] transform origin-top-left -rotate-[17.14deg] hover:scale-110 transition-transform duration-200 z-10'>
            <Image
              src='/images/project.png'
              alt='Project Sticker'
              width={491}
              height={170}
              className='object-contain w-[12vw] h-[4vw] min-w-[192px] min-h-[64px] max-w-[384px] max-h-[128px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]'
            />
          </div>
        </div>

        {/* 스티커 2 - study 스티커 - 다이나믹 크기 조절 */}
        <div className='absolute left-[64%] top-[12.5%] transform origin-top-left rotate-[9.52deg] hover:scale-110 transition-transform duration-200 z-10'>
          <Image
            src='/images/study.png'
            alt='Study Sticker'
            width={384}
            height={384}
            className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96'
          />
        </div>

        {/* 스티커 3 - 맥주잔 스티커 - 다이나믹 크기 조절 */}
        <div className='absolute left-[7.9%] top-[60.8%] transform origin-top-left rotate-[10.61deg] hover:scale-110 transition-transform duration-200 z-10'>
          <Image
            src='/images/맥주잔.png'
            alt='Beer Sticker'
            width={320}
            height={320}
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80'
          />
        </div>

        {/* 스티커 4 - 부엉이 캐릭터 - 다이나믹 크기 조절 */}
        <div className='absolute left-[72.1%] top-[60.8%] hover:scale-110 transition-transform duration-200 z-10'>
          <Image
            src='/images/시립대마스코트.png'
            alt='University Mascot'
            width={288}
            height={288}
            className='w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-72 xl:h-72'
          />
        </div>

        {/* 스티커 5 - 컴퓨터과학부 로고 - 다이나믹 크기 조절 */}
        <div className='absolute left-[38.3%] top-[68%] hover:scale-110 transition-transform duration-200 z-10'>
          <Image
            src='/images/서울시립대로고.png'
            alt='University of Seoul Logo'
            width={320}
            height={320}
            className='w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80'
          />
        </div>

        {/* 스티커 6 - ALL LINKED ONE CODE - 다이나믹 크기 조절 */}
        <div className='absolute left-[25.1%] top-[41.7%] transform origin-top-left -rotate-[9.59deg] hover:scale-110 transition-transform duration-200 z-10'>
          <Image
            src='/images/alllinkedonecode.png'
            alt='ALL LINKED ONE CODE'
            width={464}
            height={320}
            className='w-48 h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 lg:w-80 lg:h-48 xl:w-96 xl:h-56'
          />
        </div>

        {/* 로고 아이콘 - 다이나믹 크기 조절 */}
        <div className='absolute left-[1.1%] top-[3%] z-20'>
          <Image
            src='/images/아이콘.png'
            alt='ALOC Logo'
            width={80}
            height={80}
            className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]'
          />
        </div>

        {/* Login 버튼 - 다이나믹 크기 조절 */}
        <div className='absolute left-[90%] top-0 z-20'>
          <button className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-inter leading-[150px] hover:text-blue-600 transition-colors'>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
