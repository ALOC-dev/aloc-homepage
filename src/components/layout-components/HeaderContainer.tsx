'use client';

import React from 'react';

interface HeaderContainerProps {
  children: React.ReactNode;
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
  return (
    <div className='w-full h-[94.75px] z-20 bg-bright-gray shadow-header flex-shrink-0 flex relative'>
      {children}
    </div>
  );
}
