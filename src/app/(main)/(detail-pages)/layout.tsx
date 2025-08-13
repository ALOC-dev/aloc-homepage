'use client';

import React from 'react';
import Widget from '@/components/Widget';
import { BackgroundImage } from '@/components/layout-components/BackgroundImage';
import { DraggableContainer } from '@/components/layout-components/DraggableContainer';
import { useBodyStyle } from '@/components/layout-components/useBodyStyle';
import dynamic from 'next/dynamic';

interface DetailPageLayoutProps {
  children: React.ReactNode;
}

function DetailPageLayout({ children }: DetailPageLayoutProps) {
  const containerWidth = 1000;
  const containerHeight = 600;

  // HTML/body 기본 여백 제거로 배경 이미지 흰색선 해결
  useBodyStyle();

  return (
    <div className='w-screen h-screen fixed object-cover'>
      {/* 배경 이미지 */}
      <BackgroundImage />

      {/* 내부 페이지 윈도우 */}
      <DraggableContainer
        width={containerWidth}
        height={containerHeight}
        dragColor='var(--color-light-gray)'
      >
        {children}
      </DraggableContainer>

      {/* 오른쪽 사이드바 네비게이션 */}
      <Widget />
    </div>
  );
}

export default dynamic(() => Promise.resolve(DetailPageLayout), { ssr: false });
