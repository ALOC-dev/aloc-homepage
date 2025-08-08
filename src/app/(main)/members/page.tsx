'use client';

import Image from 'next/image';
import { useEffect } from 'react';

export default function Members() {
  // 브라우저 기본 스타일 완전 제거 : 배경화면 좌, 상단 빈 공간 제거
  useEffect(() => {
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.documentElement.style.overflow = 'hidden';

    return () => {
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
      document.documentElement.style.margin = '';
      document.documentElement.style.padding = '';
      document.documentElement.style.overflow = '';
    };
  }, []);
  return (
    <div className='w-screen h-screen bg-white overflow-hidden fixed inset-0'>
      {/* 7번 컨테이너 - 뷰포트에 완전히 맞춘 고정 크기 */}
      <div className='relative w-full h-full'>
        {/* 배경 이미지 - 뷰포트 전체를 채우도록 */}
        <img
          className='absolute inset-0 w-full h-full object-cover'
          src='/images/common/맥북배경이미지.png'
          alt='Background'
        />

        {/* 메인 윈도우 */}
        <div className='absolute left-[2.01%] top-[13.24%] w-[81.9%] h-[81.9%] bg-white rounded-3xl overflow-hidden'>
          {/* 윈도우 헤더 */}
          <div className='w-full h-[12.6%] left-0 top-0 absolute bg-zinc-100 shadow-[0px_2.456943988800049px_5.732870578765869px_0px_rgba(0,0,0,0.25)]' />

          {/* 사이드바 */}
          <div className='w-[20.35%] h-full left-0 top-0 absolute bg-zinc-200 shadow-[2.456943988800049px_0px_5.732870578765869px_0px_rgba(0,0,0,0.25)]' />

          {/* 윈도우 컨트롤 버튼들 */}
          <div className='w-[2.03%] aspect-square left-[4.24%] top-[5.37%] absolute bg-red-400 rounded-full' />
          <div className='w-[2.03%] aspect-square left-[8.82%] top-[5.37%] absolute bg-amber-400 rounded-full' />
          <div className='w-[2.03%] aspect-square left-[13.41%] top-[5.37%] absolute bg-green-500 rounded-full' />

          {/* 즐겨찾기 섹션 */}
          <div className='w-[44.14%] h-[4.52%] left-[11.8%] top-[19.54%] absolute bg-stone-300 rounded-xl' />
          <div className="left-[18.76%] top-[15.84%] absolute text-gray-400 text-lg font-bold font-['Noto_Sans_KR']">
            즐겨찾기
          </div>
          <div className="left-[17.8%] top-[26.45%] absolute text-gray-400 text-lg font-bold font-['Noto_Sans_KR']">
            기수
          </div>

          {/* 폴더 아이콘 */}
          <div className='w-[2.03%] h-[1.58%] left-[27.78%] top-[21.49%] absolute bg-stone-300 rounded-bl rounded-br border-[1.64px] border-yellow-600' />
          <div className='w-[2.03%] h-[0.9%] left-[27.78%] top-[20.75%] absolute bg-stone-300 rounded-sm border-[1.64px] border-yellow-600' />
          <div className="left-[60.42%] top-[20.65%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            멤버 소개
          </div>

          {/* 페이지 제목 */}
          <div className="left-[35.14%] top-[5.18%] absolute text-zinc-700 text-2xl font-bold font-['Noto_Sans_KR']">
            멤버 소개
          </div>

          {/* 네비게이션 버튼들 */}
          <div className='w-[1.02%] h-[2.26%] left-[26.32%] top-[5.55%] absolute bg-zinc-400' />
          <div className='w-[1.02%] h-[2.26%] left-[32.23%] top-[7.94%] absolute origin-top-left rotate-180 bg-zinc-400' />

          {/* 설정 아이콘 */}
          <div className='w-[2.71%] aspect-square left-[93.89%] top-[4.45%] absolute overflow-hidden'>
            <div className='w-[87.5%] h-[87.5%] left-[6.25%] top-[6.25%] absolute bg-zinc-700' />
          </div>

          {/* 기수 목록 */}
          <div className='w-[1.69%] aspect-square left-[33.08%] top-[30.41%] absolute bg-orange-600 rounded-full' />
          <div className="left-[62.93%] top-[30.41%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            3기
          </div>
          <div className='w-[1.69%] aspect-square left-[33.08%] top-[34.58%] absolute bg-green-500 rounded-full' />
          <div className="left-[62.93%] top-[34.58%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            2기
          </div>
          <div className='w-[1.69%] aspect-square left-[33.08%] top-[38.75%] absolute bg-blue-600 rounded-full' />
          <div className="left-[62.93%] top-[38.75%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            1기
          </div>

          {/* 테이블 헤더 구분선 */}
          <div className='w-[80.3%] h-0 left-[19.72%] top-[17.78%] absolute border-t border-gray-400' />

          {/* 테이블 헤더 */}
          <div className="left-[28.62%] top-[14.63%] absolute text-zinc-700 text-base font-normal font-['Noto_Sans_KR']">
            이름
          </div>
          <div className="left-[73.7%] top-[14.63%] absolute text-zinc-700 text-base font-normal font-['Noto_Sans_KR']">
            역할
          </div>
          <div className="left-[83.51%] top-[14.63%] absolute text-zinc-700 text-base font-normal font-['Noto_Sans_KR']">
            관련스택
          </div>

          {/* 첫 번째 멤버 행 - 박주영 (회장) */}
          <div className='w-[78.48%] h-[4.06%] left-[20.77%] top-[18.89%] absolute'>
            <div className='w-full h-full left-0 top-0 absolute bg-blue-600 rounded-[9.83px]' />
            <img
              className='w-[2.59%] aspect-square left-[5.74%] top-[15.08%] absolute shadow-[0px_4px_5.800000190734863px_0px_rgba(0,0,0,0.25)] border border-black rounded'
              src='https://placehold.co/25x25'
              alt='Profile'
            />
            <div className="left-[9.65%] top-[20.56%] absolute text-white text-lg font-bold font-['Noto_Sans_KR']">
              2기 박주영
            </div>
            <div className="left-[67.09%] top-[20.56%] absolute text-blue-200 text-lg font-bold font-['Noto_Sans_KR']">
              회장
            </div>
            <div className="left-[79.57%] top-[20.56%] absolute text-blue-200 text-lg font-bold font-['Noto_Sans_KR']">
              백엔드, AI
            </div>
          </div>

          {/* 두 번째 멤버 행 - 송희영 */}
          <div className='w-[78.48%] h-[4.06%] left-[20.77%] top-[22.87%] absolute bg-neutral-100 rounded-[9.83px]' />
          <img
            className='w-[2.03%] aspect-square left-[25.21%] top-[23.48%] absolute shadow-[0px_4px_5.800000190734863px_0px_rgba(0,0,0,0.25)] border border-black rounded'
            src='https://placehold.co/25x25'
            alt='Profile'
          />
          <div className="left-[28.34%] top-[23.72%] absolute text-black text-lg font-bold font-['Noto_Sans_KR']">
            3기 송희영
          </div>
          <div className="left-[73.45%] top-[23.72%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            부원
          </div>
          <div className="left-[83.25%] top-[23.72%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            프론트엔드
          </div>

          {/* 세 번째 멤버 행 - 이채우 */}
          <div className='w-[78.48%] h-[4.06%] left-[20.77%] top-[26.94%] absolute bg-white rounded-[9.83px]' />
          <img
            className='w-[2.03%] aspect-square left-[25.21%] top-[27.55%] absolute shadow-[0px_4px_5.800000190734863px_0px_rgba(0,0,0,0.25)] border border-black rounded'
            src='https://placehold.co/25x25'
            alt='Profile'
          />
          <div className="left-[28.34%] top-[27.79%] absolute text-black text-lg font-bold font-['Noto_Sans_KR']">
            3기 이채우
          </div>
          <div className="left-[73.45%] top-[27.79%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            부원
          </div>
          <div className="left-[83.25%] top-[27.79%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            백엔드
          </div>

          {/* 네 번째 멤버 행 - 김정훈 */}
          <div className='w-[78.48%] h-[4.06%] left-[20.77%] top-[30.92%] absolute bg-neutral-100 rounded-[9.83px]' />
          <img
            className='w-[2.03%] aspect-square left-[25.21%] top-[31.53%] absolute shadow-[0px_4px_5.800000190734863px_0px_rgba(0,0,0,0.25)] border border-black rounded'
            src='https://placehold.co/25x25'
            alt='Profile'
          />
          <div className="left-[28.34%] top-[31.77%] absolute text-black text-lg font-bold font-['Noto_Sans_KR']">
            3기 김정훈
          </div>
          <div className="left-[73.45%] top-[31.77%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            부원
          </div>
          <div className="left-[83.25%] top-[31.77%] absolute text-zinc-700 text-lg font-bold font-['Noto_Sans_KR']">
            AI
          </div>

          {/* 테이블 컬럼 구분선 */}
          <div className='w-0 h-[2.71%] left-[73.07%] top-[14.26%] absolute border-l border-gray-400' />
          <div className='w-0 h-[2.71%] left-[82.87%] top-[14.26%] absolute border-l border-gray-400' />
        </div>

        {/* 우측 사이드바 - 뷰포트 기준으로 조정 */}
        <div className='w-[10vw] h-[54vh] right-[2vw] top-[26vh] absolute bg-white/70 rounded-[40px] overflow-hidden'>
          {/* 홈 로고 */}
          <img
            className='w-[61.11%] aspect-square left-[20.83%] top-[4.59%] absolute shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] rounded'
            src='https://placehold.co/89x89'
            alt='Home'
          />
          <div className="left-[34.03%] top-[18.54%] absolute text-center text-black text-lg font-normal font-['Noto_Sans_KR'] leading-[48px]">
            Home
          </div>

          {/* Activity */}
          <img
            className='w-[66.67%] aspect-square left-[19.44%] top-[29.42%] absolute rounded'
            src='https://placehold.co/90x90'
            alt='Activity'
          />
          <div className="left-[32.64%] top-[43.03%] absolute text-center text-black text-lg font-normal font-['Noto_Sans_KR'] leading-[48px]">
            Activity
          </div>

          {/* 멤버 소개 (현재 페이지 - 활성 상태) */}
          <div className='w-[55.56%] h-[4.08%] left-[22.44%] top-[54.93%] absolute bg-gradient-to-b from-sky-400 to-cyan-800' />
          <div className='w-[55.56%] h-[9.52%] left-[22.22%] top-[57.0%] absolute bg-gradient-to-b from-sky-300 via-sky-300 to-sky-500 rounded-[5px]' />
          <div className="left-[28.47%] top-[64.97%] absolute text-center text-black text-lg font-normal font-['Noto_Sans_KR'] leading-[48px]">
            멤버 소개
          </div>

          {/* 활동 사진 */}
          <img
            className='w-[55.56%] aspect-square left-[20.83%] top-[76.87%] absolute rounded'
            src='https://placehold.co/85x85'
            alt='Gallery'
          />
          <div className="left-[27.08%] top-[88.78%] absolute text-center text-black text-lg font-normal font-['Noto_Sans_KR'] leading-[48px]">
            활동 사진
          </div>
        </div>
      </div>
    </div>
  );
}
