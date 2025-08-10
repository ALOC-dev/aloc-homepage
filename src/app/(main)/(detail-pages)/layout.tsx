'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Widget from '@/app/components/Widget';

interface DetailPageLayoutProps {
  children: React.ReactNode;
}

export default function DetailPageLayout({ children }: DetailPageLayoutProps) {
  // HTML/body 기본 여백 제거로 배경 이미지 흰색선 해결
  useEffect(() => {
    // 기존 스타일 백업
    const originalHtmlStyle = {
      margin: document.documentElement.style.margin,
      padding: document.documentElement.style.padding,
    };
    const originalBodyStyle = {
      margin: document.body.style.margin,
      padding: document.body.style.padding,
    };

    // HTML과 body의 여백/패딩 제거
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // 컴포넌트 언마운트 시 원래 스타일로 복원
    return () => {
      document.documentElement.style.margin = originalHtmlStyle.margin;
      document.documentElement.style.padding = originalHtmlStyle.padding;
      document.body.style.margin = originalBodyStyle.margin;
      document.body.style.padding = originalBodyStyle.padding;
    };
  }, []);

  return (
    <div className='w-[1440px] h-[1080px] relative object-cover'>
      {/* 배경 이미지 */}
      <Image
        src='/images/figma/background.png'
        alt='배경'
        fill
        className='object-cover'
      />

      {/* 내부 페이지 윈도우 */}
      <div className='absolute w-[1179px] h-[884px] left-[29px] top-[143px] bg-white rounded-[24.57px] overflow-hidden shadow-lg'>
        {children}
      </div>

      {/* 오른쪽 사이드바 네비게이션 */}
      <Widget />
    </div>
  );
}
