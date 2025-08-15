'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SmallHeaderContainer } from '@/components/layout-components';
import { useSearchParams } from 'next/navigation';
import { projects, studies } from '@/app/data/activities';

export default function ActivityDetail() {
  const searchParams = useSearchParams();
  const activityId = searchParams.get('id');
  const activityType = searchParams.get('type') as 'project' | 'study';

  const currentList = activityType === 'project' ? projects : studies;
  const currentItem = currentList.find((item) => item.id === activityId);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  if (!currentItem) {
    return (
      <div className='relative w-full h-full bg-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[24px] font-[700] text-text-primary mb-4'>
            활동을 찾을 수 없습니다
          </h1>
        </div>
      </div>
    );
  }

  // 슬라이드 네비게이션 함수들
  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentItem?.slidesCount && currentSlide < currentItem.slidesCount) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  return (
    <div className='flex flex-col w-full h-full bg-gray-300'>
      <SmallHeaderContainer>
        {/* 페이지 타이틀 */}
        <h1 className='h-full text-[25.49px] font-bold text-text-primary justify-center items-center flex'>
          {currentItem.title}
        </h1>
      </SmallHeaderContainer>

      {/* 뒤로가기 버튼 */}
      <Link
        href='/activity'
        className='w-full flex-row flex justify-end z-10 p-4'
      >
        <Image
          src='/images/members/arrow-back-up.svg'
          alt='뒤로가기'
          width={34}
          height={34}
          className='object-contain'
        />
      </Link>

      {/* 메인 콘텐츠 영역 */}
      <div className='relative px-[56px]'>
        {/* 프로젝트 이미지 */}
        <div className='w-full h-[364px] overflow-hidden'>
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            width={1300}
            height={731}
            className='w-full h-full object-contain'
          />
        </div>

        {/* 슬라이드 네비게이션 */}
        <div className='w-full mt-[10px] h-[15px] flex items-center justify-center gap-[15px]'>
          <button
            onClick={goToPreviousSlide}
            disabled={currentSlide === 1}
            className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
              currentSlide === 1
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:opacity-80'
            }`}
          >
            <Image
              src='/images/activity/left-arrow.svg'
              alt='이전 이미지'
              width={11.5}
              height={11.5}
              className='w-full h-full object-contain'
            />
          </button>
          <span className='text-[17.5px] text-black'>
            {currentSlide}/{currentItem?.slidesCount || 1}
          </span>
          <button
            onClick={goToNextSlide}
            disabled={currentSlide === (currentItem?.slidesCount || 1)}
            className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
              currentSlide === (currentItem?.slidesCount || 1)
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:opacity-80'
            }`}
          >
            <Image
              src='/images/activity/right-arrow.svg'
              alt='다음 이미지'
              width={11.5}
              height={11.5}
              className='w-full h-full object-contain'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
