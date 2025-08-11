'use client';

import Image from 'next/image';

export const BackgroundImage = () => {
  return (
    <Image
      src='/images/figma/background.png'
      alt='배경'
      fill
      className='object-cover'
    />
  );
};
