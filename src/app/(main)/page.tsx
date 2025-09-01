'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Main() {
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);

  const handleStickerHover = (stickerId: string) => {
    setHoveredSticker(stickerId);
  };

  const handleStickerLeave = () => {
    setHoveredSticker(null);
  };

  const getStickerClassName = (stickerId: string) => {
    const baseClasses = 'object-contain duration-200 cursor-pointer';
    const isHovered = hoveredSticker === stickerId;
    const isOtherHovered =
      hoveredSticker !== null && hoveredSticker !== stickerId;

    if (isHovered) {
      return `${baseClasses} brightness-100`;
    } else if (isOtherHovered) {
      return `${baseClasses} brightness-15 opacity-40`;
    } else {
      return baseClasses;
    }
  };
  return (
    <div
      className='fixed w-screen h-screen bg-cover bg-center overflow-hidden'
      style={{ backgroundImage: "url('/images/main/main-background-2.png')" }}
    >
      {/* 헤더 영역 - flexbox 밖으로 분리 */}
      <div className='absolute top-0 left-0 right-0 h-[10%] z-20'>
        {/* Login 버튼 */}
        <div className='absolute right-[2%] top-[10%]'>
          <button className='text-[30px] cursor-pointer font-bold font-inter hover:text-blue-600 transition-colors bg-transparent border-none outline-none focus:outline-none'>
            login
          </button>
        </div>
      </div>

      {/* 맥북 컨테이너 - 중앙 정렬 */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative'
        style={{
          width: "750px",
          height: "500px",
          background: "linear-gradient(113.96deg, #E6E5E6 0%, #35302B 100%)",
          boxShadow: "30px 30px 50px rgba(0, 0, 0, 0.8)",
          borderRadius: "30px",
        }}
      >
        {/* 메인 로고 - 정중앙 */}
        <div
          className='absolute inset-0 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-[1/1] z-5'
        >
          <Image
            src='/images/main/logo-2.png'
            alt='ALOC Main Logo'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 1 - about 스티커 */}
        <div
          className='absolute right-[40.5%] top-[25%] transform origin-top-left -rotate-[17.14deg] z-10 w-[80%] aspect-[1150/396]'
          onMouseEnter={() => handleStickerHover('activity')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/instroduction'>
            <Image
              src='/images/main/about.png'
              alt='About Sticker'
              fill
              className={getStickerClassName('about')}
            />
          </Link>
        </div>

        {/* 스티커 2 - activity */}
        <div
          className='absolute left-[65%] top-[2%] transform origin-top-left rotate-[9.59deg] z-10 w-[30%] aspect-[467/375]'
          onMouseEnter={() => handleStickerHover('activity')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/activity'>
            <Image
              src='/images/main/activity-2.png'
              alt='Activity'
              fill
              className={getStickerClassName('activity')}
            />
          </Link>
        </div>

        {/* 스티커 3 - 멤버 스티커 */}
        <div
          className='absolute left-[7.0%] top-[36%] transform origin-top-left rotate-[10.61deg] z-10 w-[45%] aspect-[1/1]'
          onMouseEnter={() => handleStickerHover('member')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/members'>
            <Image
              src='/images/main/member.png'
              alt='Member Sticker'
              fill
              className={getStickerClassName('member')}
            />
          </Link>
        </div>

        {/* 스티커 4 - camera 스티커 */}
        <div
          className='absolute left-[62%] top-[45%]  origin-top-left transform rotate-[-9deg] z-10 w-[30%] aspect-[464/696]'
          onMouseEnter={() => handleStickerHover('camera')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/gallery'>
            <Image
              src='/images/main/camera-2.png'
              alt='Camera Sticker'
              fill
              className={getStickerClassName('camera')}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
