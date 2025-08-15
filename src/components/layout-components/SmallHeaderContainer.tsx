'use client';

import React from 'react';

interface SmallHeaderContainerProps {
  children: React.ReactNode;
}

export function SmallHeaderContainer({ children }: SmallHeaderContainerProps) {
  return (
    <div className='w-full min-h-[63.1px] bg-bright-gray shadow-header z-30 relative flex items-center justify-center'>
      {/* macOS 트래픽 라이트 */}
      <div className='absolute top-[18.03px] left-[15.57px] flex space-x-[14.33px]'>
        <div className='w-[24.58px] h-[24.58px] bg-brand-red rounded-full' />
        <div className='w-[24.58px] h-[24.58px] bg-brand-yellow rounded-full' />
        <div className='w-[24.58px] h-[24.58px] bg-brand-green rounded-full' />
      </div>
      {children}
    </div>
  );
}
