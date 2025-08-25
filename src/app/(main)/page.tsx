'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div className='fixed w-screen h-screen bg-white overflow-hidden'>
      {/* 헤더 영역 - flexbox 밖으로 분리 */}
      <div className='absolute top-0 left-0 right-0 h-[10%] z-20'>
        {/* 로고 아이콘 */}
        <div className='absolute left-[1.1%] top-[20%]'>
          <Image
            src='/images/common/아이콘.png'
            alt='ALOC Logo'
            width={80}
            height={80}
            className='object-contain'
          />
        </div>
        {/* Login 버튼 */}
        <div className='absolute right-[2%] top-[10%]'>
          <button className='text-[30px] cursor-pointer font-bold font-inter hover:text-blue-600 transition-colors bg-transparent border-none outline-none focus:outline-none'>
            login
          </button>
        </div>
      </div>

      {/* 맥북 컨테이너 - 중앙 정렬 */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] aspect-[2054/1377] rounded-4xl bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 shadow-2xl'>
        {/* 메인 로고 - 정중앙 */}
        <div className='absolute inset-0 left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-[1/1] z-5'>
          <Image
            src='/images/main/logo.png'
            alt='ALOC Main Logo'
            fill
            className='object-contain'
          />
        </div>
        {/* 스티커 1 - activity 스티커 */}
        <div className='absolute left-[5.75%] top-[18.5%] transform origin-top-left -rotate-[17.14deg] z-10 w-[36.8%] aspect-[1150/396]'>
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
        <div className='absolute left-[70%] top-[32.5%]  origin-top-left transform rotate-[9.52deg] z-10 w-[27.6%] aspect-[464/696]'>
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
        <div className='absolute left-[7.9%] top-[50.8%] transform origin-top-left rotate-[10.61deg] z-10 w-[29.4%] aspect-[1/1]'>
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
        <div className='absolute left-[15%] top-[38%] transform origin-top-left rotate-[5deg] z-10 w-[25.7%] aspect-[740/302]'>
          <Image
            src='/images/main/computer_science.png'
            alt='Computer Science Sticker'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 5 - 부엉이 캐릭터 */}
        <div className='absolute left-[53.1%] top-[58.8%] -rotate-[10deg] z-10 w-[13.2%] aspect-[782/1173]'>
          <Image
            src='/images/main/시립대마스코트.png'
            alt='University Mascot'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 6 - 서울시립대 로고 */}
        <div className='absolute left-[48.3%] top-[78%] z-10 w-[36.8%] aspect-[347/152]'>
          <Image
            src='/images/main/서울시립대로고.png'
            alt='University of Seoul Logo'
            fill
            className='object-contain'
          />
        </div>

        {/* 스티커 7 - aloc */}
        <div className='absolute left-[62.1%] top-[-4.7%] transform origin-top-left rotate-[9.59deg] z-10 w-[41.5%] aspect-[467/375]'>
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
