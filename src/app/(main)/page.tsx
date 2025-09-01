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
    const baseClasses = 'object-contain duration-200 cursor-pointer z-20';
    if (!hoveredSticker) return `${baseClasses} brightness-100`; 
    return hoveredSticker === stickerId
      ? `${baseClasses} brightness-100 z-30`
      : `${baseClasses} brightness-50`; 
  };

  return (
    <div className='fixed w-screen h-screen bg-cover bg-center overflow-hidden'
      style={{ backgroundImage: "url('/images/main/main-background-2.png')" }}
    >

      {/* 헤더 영역 - flexbox 밖으로 분리 */}
      <div className='absolute top-[4%] right-[1%] h-[10%] z-40'>
        {/* Login 버튼 */}
        <Link href="/login">
          <div
            onMouseEnter={() => setHoveredSticker("login")}
            onMouseLeave={() => setHoveredSticker(null)}
            className="cursor-pointer inline-block"
          >
            <Image
              src={hoveredSticker === "login" ? "/images/main/login-2.png" : "/images/main/login.png"}
              alt="Login"
              width={200}   
              height={1}  
            />
          </div>
        </Link>
      </div>

      {/* 배경화면만 어둡게 하는 오버레이 */}
      {hoveredSticker && (
        <div className="absolute inset-0 bg-black opacity-40 z-10 pointer-events-none"></div>
      )}

      {/* 맥북 컨테이너 - 중앙 정렬 */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 relative z-20'
        style={{
          width: "750px",
          height: "500px",
          background: "linear-gradient(113.96deg, #E6E5E6 0%, #35302B 100%)",
          boxShadow: "30px 30px 50px rgba(0, 0, 0, 0.8)",
          borderRadius: "30px",
        }}
      >
        {hoveredSticker && (
          <div className="absolute inset-0 bg-black z-25 pointer-events-none transition-opacity opacity-60"
          style={{ borderRadius: "30px" }}
          />
        )}

        {/* 메인 로고 - 정중앙 */}
        <div
          className='absolute inset-0 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-[1/1] z-30'
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
          onMouseEnter={() => handleStickerHover('about')}
          onMouseLeave={handleStickerLeave}
          style={{ zIndex: hoveredSticker === 'about' ? 30 : 20 }}
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
          style={{ zIndex: hoveredSticker === 'activity' ? 30 : 20 }}
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
          style={{ zIndex: hoveredSticker === 'member' ? 30 : 20 }}
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
          style={{ zIndex: hoveredSticker === 'camera' ? 30 : 20 }}
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
