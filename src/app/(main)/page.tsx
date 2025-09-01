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
      style={{ backgroundImage: "url('/images/main/main-background.png')" }}
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
          width: "600px",
          height: "400px",
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
        {/* 스티커 1 - activity 스티커 */}
        <div
          className='absolute left-[5.75%] top-[18.5%] transform origin-top-left -rotate-[17.14deg] z-10 w-[36.8%] aspect-[1150/396]'
          onMouseEnter={() => handleStickerHover('activity')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/activity'>
            <Image
              src='/images/main/activity.png'
              alt='Activity Sticker'
              fill
              className={getStickerClassName('activity')}
            />
          </Link>
        </div>

        {/* 스티커 2 - camera 스티커 */}
        <div
          className='absolute left-[70%] top-[32.5%]  origin-top-left transform rotate-[9.52deg] z-10 w-[27.6%] aspect-[464/696]'
          onMouseEnter={() => handleStickerHover('camera')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/gallery'>
            <Image
              src='/images/main/camera.png'
              alt='Camera Sticker'
              fill
              className={getStickerClassName('camera')}
            />
          </Link>
        </div>

        {/* 스티커 3 - 맥주잔 스티커 */}
        <div
          className='absolute left-[7.9%] top-[50.8%] transform origin-top-left rotate-[10.61deg] z-10 w-[29.4%] aspect-[1/1]'
          onMouseEnter={() => handleStickerHover('beer')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/members'>
            <Image
              src='/images/main/맥주잔.png'
              alt='Beer Sticker'
              fill
              className={getStickerClassName('beer')}
            />
          </Link>
        </div>

        {/* 스티커 4 - computer-science 스티커 */}
        <div className='absolute left-[15%] top-[38%] transform origin-top-left rotate-[5deg] z-10 w-[25.7%] aspect-[740/302]'>
          <Image
            src='/images/main/computer_science.png'
            alt='Computer Science Sticker'
            fill
            className={
              hoveredSticker !== null
                ? 'object-contain brightness-0 opacity-50 transition-all duration-200'
                : 'object-contain transition-all duration-200'
            }
          />
        </div>

        {/* 스티커 5 - 부엉이 캐릭터 */}
        <div className='absolute left-[53.1%] top-[58.8%] -rotate-[10deg] z-10 w-[13.2%] aspect-[782/1173]'>
          <Image
            src='/images/main/시립대마스코트.png'
            alt='University Mascot'
            fill
            className={
              hoveredSticker !== null
                ? 'object-contain brightness-0 opacity-50 transition-all duration-200'
                : 'object-contain transition-all duration-200'
            }
          />
        </div>

        {/* 스티커 6 - 서울시립대 로고 */}
        <div className='absolute left-[48.3%] top-[78%] z-10 w-[36.8%] aspect-[347/152]'>
          <Image
            src='/images/main/서울시립대로고.png'
            alt='University of Seoul Logo'
            fill
            className={
              hoveredSticker !== null
                ? 'object-contain brightness-0 opacity-50 transition-all duration-200'
                : 'object-contain transition-all duration-200'
            }
          />
        </div>

        {/* 스티커 7 - aloc */}
        <div
          className='absolute left-[62.1%] top-[-4.7%] transform origin-top-left rotate-[9.59deg] z-10 w-[41.5%] aspect-[467/375]'
          onMouseEnter={() => handleStickerHover('aloc')}
          onMouseLeave={handleStickerLeave}
        >
          <Link href='/introduction'>
            <Image
              src='/images/main/aloc.png'
              alt='ALL LINKED ONE CODE'
              fill
              className={getStickerClassName('aloc')}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
