'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div className='relative min-w-[1440px] min-h-[1080px] bg-white overflow-hidden flex items-center justify-center'>
      {/* 로고 아이콘 */}
      <div className='absolute left-[1.1%] top-[3%] z-20'>
        <Image
          src='/images/common/아이콘.png'
          alt='ALOC Logo'
          width={80}
          height={80}
          className='object-contain'
        />
      </div>
      {/* Login 버튼 */}
      <div className='absolute right-[2%] top-[1%] z-20'>
        <button className='text-[30px] cursor-pointer font-bold font-inter hover:text-blue-600 transition-colors bg-transparent border-none outline-none focus:outline-none'>
          login
        </button>
      </div>
      {/* 배경 이미지와 스티커들을 포함하는 컨테이너 */}
      <div className='w-[1188px] relative aspect-[2054/1377] rounded-4xl bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 shadow-2xl'>
        {/* 메인 로고 - 정중앙 */}
        <div className='absolute inset-0 flex items-center justify-center z-5'>
          <Image
            src='/images/main/logo.png'
            alt='ALOC Main Logo'
            width={150}
            height={150}
            className='object-contain'
          />
        </div>
        {/* 스티커 1 - activity 스티커 */}
        <div className='absolute left-[5.75%] top-[18.5%] transform origin-top-left -rotate-[17.14deg] z-10 w-[400px] aspect-[1150/396]'>
          <Link href='/activity'>
            <Image
              src='/images/main/activity.png'
              alt='Activity Sticker'
              fill
              className='hover:scale-110 transition-transform duration-200 cursor-pointer object-contain'
            />
          </Link>
        </div>

        {/* 스티커 2 - camera 스티커 */}
        <div className='absolute left-[70%] top-[32.5%]  origin-top-left transform rotate-[9.52deg] z-10 w-[300px] aspect-[464/696]'>
          <Link href='/gallery'>
            <Image
              src='/images/main/camera.png'
              alt='Camera Sticker'
              fill
              className='object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
            />
          </Link>
        </div>

        {/* 스티커 3 - 맥주잔 스티커 */}
        <div className='absolute left-[7.9%] top-[50.8%] transform origin-top-left rotate-[10.61deg] z-10 w-[320px] aspect-[1/1]'>
          <Link href='/members'>
            <Image
              src='/images/main/맥주잔.png'
              alt='Beer Sticker'
              fill
              className='object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
            />
          </Link>
        </div>

        {/* 스티커 4 - computer-science 스티커 */}
        <div className='absolute left-[15%] top-[38%] transform origin-top-left rotate-[5deg] z-10 w-[280px] aspect-[740/302]'>
          <Image
            src='/images/main/computer_science.png'
            alt='Computer Science Sticker'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 5 - 부엉이 캐릭터 */}
        <div className='absolute left-[53.1%] top-[58.8%] -rotate-[10deg] z-10 w-[144px] aspect-[782/1173]'>
          <Image
            src='/images/main/시립대마스코트.png'
            alt='University Mascot'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 6 - 서울시립대 로고 */}
        <div className='absolute left-[48.3%] top-[78%] z-10 w-[400px] aspect-[347/152]'>
          <Image
            src='/images/main/서울시립대로고.png'
            alt='University of Seoul Logo'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 7 - aloc */}
        <div className='absolute left-[62.1%] top-[-4.7%] transform origin-top-left rotate-[9.59deg] z-10 w-[452px] aspect-[467/375]'>
          <Link href='/introduction'>
            <Image
              src='/images/main/aloc.png'
              alt='ALL LINKED ONE CODE'
              fill
              className='object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
