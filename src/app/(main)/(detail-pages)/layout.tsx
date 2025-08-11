'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Widget from '@/components/Widget';

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
    <div className='w-screen h-screen fixed object-cover'>
      {/* 배경 이미지 */}
      <Image
        src='/images/figma/background.png'
        alt='배경'
        fill
        className='object-cover'
      />

      {/* 내부 페이지 윈도우 */}
      <div
        className='absolute bg-white rounded-[24.57px] overflow-hidden shadow-lg'
        style={{
          width: 'calc(100vw - 270px)',
          height: 'calc(100vh - 250px)',
          left: '100px',
          top: '70px',
          minWidth: '890px',
          minHeight: '600px',
          maxHeight: '700px',
          maxWidth: '1100px',
        }}
      >
        {children}
      </div>

      {/* 오른쪽 사이드바 네비게이션 */}
      <Widget />
    </div>
  );
}
