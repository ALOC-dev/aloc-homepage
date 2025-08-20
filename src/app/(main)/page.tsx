'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
  return (
    <div className='w-screen h-screen bg-white overflow-hidden'>
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
      <div className='absolute right-[1%] top-[1%] z-20'>
        <button className='text-[30px] cursor-pointer font-bold font-inter hover:text-blue-600 transition-colors bg-transparent border-none outline-none focus:outline-none'>
          Login
        </button>
      </div>
      {/* 배경 이미지와 스티커들을 포함하는 컨테이너 */}
      <div className='w-full h-full absolute inset-0 flex items-center justify-center'>
        {/* 배경 이미지의 실제 렌더링 영역에 맞춘 컨테이너 */}
        <div className='relative aspect-[4/3] w-auto h-auto'>
          {/* 배경 이미지 */}
          <Image
            src='/images/main/macbook.png'
            alt='Background'
            width={1440}
            height={1080}
            className='w-full h-full object-contain'
            priority
          />

          {/* 스티커 1 - activity 스티커 */}
          <div className='absolute left-[5.75%] top-[15.5%] transform origin-top-left -rotate-[17.14deg] z-10 w-fit h-fit'>
            <Link href='/activity'>
              <Image
                src='/images/main/activity.png'
                alt='Activity Sticker'
                width={400}
                height={100}
                className='w-[54.1%] h-[35.7%] hover:scale-110 transition-transform duration-200 cursor-pointer object-contain'
              />
            </Link>
          </div>

          {/* 스티커 2 - camera 스티커 */}
          <div className='absolute left-[70%] top-[2.5%] transform origin-top-left rotate-[9.52deg] z-10 w-fit h-fit'>
            <Link href='/gallery'>
              <Image
                src='/images/gallery/camera.png'
                alt='Camera Sticker'
                width={512}
                height={512}
                className='w-[80%] h-[80%] object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
              />
            </Link>
          </div>

          {/* 스티커 3 - 맥주잔 스티커 */}
          <div className='absolute left-[7.9%] top-[60.8%] transform origin-top-left rotate-[10.61deg] z-10 w-fit h-fit'>
            <Link href='/members'>
              <Image
                src='/images/main/맥주잔.png'
                alt='Beer Sticker'
                width={320}
                height={320}
                className='w-[32.2%] h-[29.6%] object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
              />
            </Link>
          </div>

          {/* 스티커 4 - computer-science 스티커 */}
          <div className='absolute left-[55%] top-[25%] transform origin-top-left rotate-[5deg] z-10 w-fit h-fit'>
            <Image
              src='/images/main/computer-science.png'
              alt='Computer Science Sticker'
              width={400}
              height={300}
              className='w-[70%] h-[25%] object-contain'
            />
          </div>

          {/* 스티커 5 - 부엉이 캐릭터 */}
          <div className='absolute left-[72.1%] top-[60.8%] z-10 w-fit h-fit'>
            <Image
              src='/images/main/시립대마스코트.png'
              alt='University Mascot'
              width={288}
              height={288}
              className='w-[50%] h-[26.7%] '
            />
          </div>

          {/* 스티커 6 - 서울시립대 로고 */}
          <div className='absolute left-[28.3%] top-[68%] z-10 w-fit h-fit'>
            <Image
              src='/images/main/서울시립대로고.png'
              alt='University of Seoul Logo'
              width={3020}
              height={320}
              className='w-[52.2%] h-[29.6%] object-contain'
            />
          </div>

          {/* 스티커 7 - aloc */}
          <div className='absolute left-[25.1%] top-[41.7%] transform origin-top-left -rotate-[9.59deg] z-10 w-fit h-fit'>
            <Link href='/introduction'>
              <Image
                src='/images/main/aloc.png'
                alt='ALL LINKED ONE CODE'
                width={464}
                height={320}
                className='w-[50%] h-[29.6%] object-contain hover:scale-110 transition-transform duration-200 cursor-pointer'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
