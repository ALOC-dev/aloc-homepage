'use client';

import React from 'react';

interface SidebarContainerProps {
  children: React.ReactNode;
}

export default function SidebarContainer({ children }: SidebarContainerProps) {
  return (
    <div className='w-[170.59px] h-full bg-border-brighter shadow-sidebar items-center flex-shrink-0 relative z-30'>
      {/* 왼쪽 사이드바 컨텐츠 그룹 */}
      <div className='mt-[40px] flex flex-col items-center'>
        {/* macOS 트래픽 라이트 */}
        <div className='flex space-x-[19px]'>
          <div className='w-[24.57px] h-[24.57px] bg-brand-red rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-yellow rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-green rounded-full' />
        </div>
        {children}
      </div>
    </div>
  );
}
