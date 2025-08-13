'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 갤러리 이미지 데이터
  const galleryImages = [
    '/images/gallery/gallery-1.jpg',
    '/images/gallery/gallery-2.jpg',
    '/images/gallery/gallery-3.jpg',
    '/images/gallery/gallery-4.jpg',
    '/images/gallery/gallery-5-4eaa59.jpg',
    '/images/gallery/gallery-6.jpg',
    '/images/gallery/gallery-7.jpg',
    '/images/gallery/gallery-1.jpg',
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  return (
    <div className='w-full h-full bg-white'>
      {/* 상단 헤더 바 (macOS 스타일) */}
      <div className='w-full h-10 bg-bright-gray relative flex items-center justify-center'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-1/2 -translate-y-1/2 left-[13px] flex space-x-[12px]'>
          <div className='w-[21px] h-[21px] bg-[#FF5F56] rounded-full' />
          <div className='w-[21px] h-[21px] bg-[#FDBC2E] rounded-full' />
          <div className='w-[21px] h-[21px] bg-[#28C83E] rounded-full' />
        </div>

        {/* 제목 */}
        <h1 className='text-[17px] font-bold text-black'>ALOC 1기 단체사진</h1>
      </div>

      {/* 메인 이미지 영역 */}
      <div className='relative bg-black w-full h-[403px] overflow-hidden'>
        <Image
          src='/images/gallery/main-photo-23236a.jpg'
          alt='ALOC 1기 단체사진'
          fill
          className='object-contain'
          priority
        />
      </div>

      {/* 하단 갤러리 영역 */}
      <div className='relative w-full h-[165px] bg-gray-200'>
        {/* 갤러리 썸네일들 */}
        <div className='flex px-[1.5px] py-[3px] justify-center h-full'>
          {/* 메인 썸네일들 */}
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`w-[150px] h-[78px] mx-[1.5px] overflow-hidden cursor-pointer  ${
                currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image}
                alt={`Gallery image ${index + 2}`}
                width={125}
                height={88}
                className='w-full h-full object-cover'
              />
            </div>
          ))}
        </div>

        {/* 중앙 카메라 버튼 */}
        <div className='absolute top-[88px] left-1/2 transform -translate-x-1/2'>
          <div className='w-[60px] h-[60px] bg-white rounded-full border-2 border-[#A9ADB9] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors'>
            <Image
              src='/images/gallery/camera.svg'
              alt='camera'
              width={34}
              height={34}
            />
          </div>
        </div>

        {/* 좌우 네비게이션 버튼 */}
        <button
          onClick={prevImage}
          className='absolute top-[54px] left-[22px] w-[45px] h-[40px] flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors'
        >
          <svg width='22' height='22' viewBox='0 0 32 32' fill='none'>
            <path
              d='M20 8L12 16L20 24'
              stroke='#A9ADB9'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <button
          onClick={nextImage}
          className='absolute top-[54px] right-[22px] w-[45px] h-[40px] flex items-center justify-center hover:bg-white/20 rounded-lg transition-colors'
        >
          <svg width='22' height='22' viewBox='0 0 32 32' fill='none'>
            <path
              d='M12 8L20 16L12 24'
              stroke='#A9ADB9'
              strokeWidth='4'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
