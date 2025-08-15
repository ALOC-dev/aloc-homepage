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
    <div className='flex flex-col w-full h-full bg-white'>
      <SmallHeaderContainer>
        {/* 페이지 타이틀 */}
        <h1 className='text-[20.49px] font-bold text-black'>
          {currentItem.title}
        </h1>
      </SmallHeaderContainer>

      {/* 뒤로가기 버튼 */}
      <Link
        href='/activity'
        className='absolute top-[83px] right-[20px] flex z-10'
      >
        <Image
          src='/images/members/arrow-back-up.svg'
          alt='뒤로가기'
          width={24}
          height={24}
          className='object-contain'
        />
      </Link>

      {/* 메인 콘텐츠 영역 */}
      <div className='relative px-[56px] pt-[106px]'>
        {/* 프로젝트 이미지 */}
        <div className='w-[1311px] h-[764px] rounded-[24px] overflow-hidden'>
          <Image
            src={currentItem.image}
            alt={currentItem.title}
            width={1311}
            height={764}
            className='w-full h-full object-cover'
          />
        </div>

        {/* 슬라이드 네비게이션 */}
        <div className='flex justify-center mt-[42px]'>
          <div className='w-[192px] h-[30px] bg-white rounded-[10px] border border-[rgba(169,173,185,0.5)] flex items-center justify-between px-[18px]'>
            <button
              onClick={goToPreviousSlide}
              disabled={currentSlide === 1}
              className={`text-[23px] font-[400] transition-opacity ${
                currentSlide === 1
                  ? 'text-[#A9ADB9] cursor-not-allowed'
                  : 'text-[#A9ADB9] hover:opacity-80'
              }`}
            >
              ←
            </button>
            <span className='text-[23px] font-[400] text-black'>
              {currentSlide}/{currentItem?.slidesCount || 1}
            </span>
            <button
              onClick={goToNextSlide}
              disabled={currentSlide === (currentItem?.slidesCount || 1)}
              className={`text-[23px] font-[400] transition-opacity ${
                currentSlide === (currentItem?.slidesCount || 1)
                  ? 'text-black cursor-not-allowed'
                  : 'text-black hover:opacity-80'
              }`}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
