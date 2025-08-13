'use client';

import React from 'react';
import Image from 'next/image';

export default function ProjectsPage() {
  return (
    <div className='w-full h-full bg-white overflow-hidden relative'>
      {/* 상단 헤더 */}
      <div className='w-full h-[120px] bg-bright-gray shadow-header relative'>
        {/* 브라우저 탭 */}
        <div className='absolute top-[20.5px] left-[118.5px] w-[39.5px] h-[31.5px] bg-[#E5E5E7] rounded-[10px] relative'>
          <div className='absolute top-[20px] left-[9.5px] w-[3px] h-[3px] rounded-full bg-black/70'></div>
          <div className='absolute top-[20.5px] left-[14.5px] w-[16.5px] h-[1.5px] rounded-[25px] bg-black/70'></div>
          <div className='absolute top-[14px] left-[9.5px] w-[3px] h-[3px] rounded-full bg-black/70'></div>
          <div className='absolute top-[14.5px] left-[14px] w-[17px] h-[1.5px] rounded-[25px] bg-black/70'></div>
          <div className='absolute top-[8.5px] left-[9.5px] w-[3px] h-[2.5px] rounded-full bg-black/70'></div>
          <div className='absolute top-[8.5px] left-[14px] w-[17px] h-[1.5px] rounded-[25px] bg-black/70'></div>
        </div>
      </div>

      {/* 좌측 사이드바 */}
      <div className='absolute left-0 top-0 w-[170.5px] h-full bg-[#DFDFE1] shadow-sidebar'>
        {/* macOS 스타일 버튼들 */}
        <div className='absolute top-[29px] left-1/2 -translate-x-1/2 flex gap-[20px]'>
          <div className='w-[25px] h-[25px] rounded-full bg-[#FF5F56]'></div>
          <div className='w-[25px] h-[25px] rounded-full bg-[#FDBC2E]'></div>
          <div className='w-[25px] h-[25px] rounded-full bg-[#28C83E]'></div>
        </div>
        {/* ALOC Team List 제목 */}
        <div className='mt-[103px] pl-[9.5px]'>
          <h1 className='text-[11.5px] font-bold text-[#A9ADB9] leading-[1.2]'>
            ALOC Team List
          </h1>
        </div>

        {/* Project/Study 탭 */}
        <div className='mt-[6px] ml-[6.5px]'>
          <div className='w-[89px] h-[25px] bg-[#C7C7C9] rounded-[7.5px] relative'>
            <div className='absolute top-[6.5px] left-[8px] flex items-center gap-[5px]'>
              <div className='w-[15px] h-[12px] relative'>
                <div className='absolute top-[4px] w-[15px] h-[8px] bg-[#C7C7C9] border border-[#D18F00] rounded-b-[2.5px]'></div>
                <div className='absolute top-0 w-[15px] h-[5px] bg-[#C7C7C9] border border-[#D18F00] rounded-[1px]'></div>
              </div>
              <span className='text-[11.5px] font-bold text-[#3C414C]'>
                Project
              </span>
            </div>
          </div>
        </div>

        {/* Study 탭 */}
        <div className='mt-[4.5px] ml-[14.5px]'>
          <div className='flex items-center gap-[5px]'>
            <div className='w-[15px] h-[12px] relative'>
              <div className='absolute top-[4px] w-[15px] h-[8px] bg-[#DFDFE1] border border-[#D18F00] rounded-b-[2.5px]'></div>
              <div className='absolute top-0 w-[15px] h-[5px] bg-[#DFDFE1] border border-[#D18F00] rounded-[1px]'></div>
            </div>
            <span className='text-[11.5px] font-bold text-[#3C414C]'>
              Study
            </span>
          </div>
        </div>

        {/* 프로젝트 개수 */}
        <div className='absolute top-[24.5px] right-[10px]'>
          <span className='text-[11.5px] font-bold text-[#A9ADB9]'>2</span>
        </div>

        {/* 구분선 */}
        <div className='absolute bottom-0 left-0 w-[0.5px] h-full bg-[#A9ADB9]'></div>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className='ml-[100.5px] h-full relative'>
        {/* 프로젝트 카드 */}
        <div className='absolute top-[13px] left-[18px] w-[125px] h-[61px] bg-[rgba(253,188,46,0.5)] rounded-[7.5px] p-[10px]'>
          <h3 className='text-[11.5px] font-bold text-[#3C414C] mb-[4.5px]'>
            이시대맛집
          </h3>
          <p className='text-[11.5px] text-[#5C5E66]'>시립대 주변 맛집 지도</p>
        </div>

        {/* 프로젝트 이미지 */}
        <div className='absolute top-[37px] left-[220.5px] w-[213px] h-[98px] rounded-[10px] overflow-hidden'>
          <Image
            src='/images/figma/project-image-2b1b0e.png'
            alt='프로젝트 이미지'
            width={213}
            height={98}
            className='w-full h-full object-cover'
          />
        </div>

        {/* 프로젝트 상세 정보 */}
        <div className='absolute top-[166.5px] left-[173px] w-[103px]'>
          <h2 className='text-[15px] font-bold text-[#3C414C] mb-[7.5px]'>
            이시대맛집
          </h2>
          <p className='text-[11.5px] text-[#5C5E66]'>시립대 주변 맛집 지도</p>
        </div>

        {/* 프로젝트 설명 */}
        <div className='absolute top-[221px] left-[173px] w-[228.5px]'>
          <p className='text-[11.5px] text-[#5C5E66] leading-[1.2]'>
            설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
          </p>
        </div>

        {/* 태그 */}
        <div className='absolute top-[287px] left-[173px]'>
          <p className='text-[11.5px] text-[#5C5E66] font-inter'>
            #react #next #typescript
          </p>
        </div>

        {/* 날짜 */}
        <div className='absolute top-[13px] right-[18px]'>
          <p className='text-[11.5px] font-bold text-[#5C5E66]'>
            2025년 3월 2일 ~ 진행 중
          </p>
        </div>

        {/* 두 번째 프로젝트 */}
        <div className='absolute top-[81px] left-[18px] w-[103.5px]'>
          <h3 className='text-[11.5px] font-bold text-[#3C414C] mb-[4.5px]'>
            UOScholar
          </h3>
          <p className='text-[11.5px] text-[#5C5E66]'>시립대 학칙 안내 챗봇</p>
        </div>

        {/* 팀 멤버 */}
        <div className='absolute bottom-[26px] left-[173px] flex gap-[5px]'>
          <div className='w-[50px] h-[20px] bg-[#FDBC2E] rounded-[15px] flex items-center justify-center'>
            <span className='text-[11.5px] text-white'>이채우</span>
          </div>
          <div className='w-[50px] h-[20px] bg-white border border-[#A9ADB9] rounded-[15px] flex items-center justify-center'>
            <span className='text-[11.5px] text-[#3C414C]'>김영현</span>
          </div>
          <div className='w-[50px] h-[20px] bg-white border border-[#A9ADB9] rounded-[15px] flex items-center justify-center'>
            <span className='text-[11.5px] text-[#3C414C]'>백형우</span>
          </div>
          <div className='w-[50px] h-[20px] bg-white border border-[#A9ADB9] rounded-[15px] flex items-center justify-center'>
            <span className='text-[11.5px] text-[#3C414C]'>정지윤</span>
          </div>
          <div className='w-[50px] h-[20px] bg-white border border-[#A9ADB9] rounded-[15px] flex items-center justify-center'>
            <span className='text-[11.5px] text-[#3C414C]'>최문기</span>
          </div>
        </div>

        {/* 이미지 갤러리 네비게이션 */}
        <div className='absolute top-[145px] right-[24.5px] w-[96px] h-[15px] bg-white rounded-[5px] border border-[rgba(169,173,185,0.5)] flex items-center justify-between px-[9px]'>
          <span className='text-[11.5px] text-[#A9ADB9]'>←</span>
          <span className='text-[11.5px] text-black'>1/36</span>
          <span className='text-[11.5px] text-black'>→</span>
        </div>

        {/* 아이콘들 */}
        <div className='absolute top-[160px] right-[56.5px] w-[19px] h-[19.5px]'>
          <Image
            src='/images/figma/images-icon.png'
            alt='이미지 아이콘'
            width={19}
            height={19.5}
            className='w-full h-full object-cover'
          />
        </div>

        <div className='absolute top-[160px] right-[25.5px] w-[20.5px] h-[20.5px]'>
          <Image
            src='/images/figma/notion-logo.png'
            alt='Notion 로고'
            width={20.5}
            height={20.5}
            className='w-full h-full object-cover'
          />
        </div>

        {/* 닫기 아이콘 */}
        <div className='absolute top-[-16.5px] right-[9.5px] w-[14.34px] h-[17.5px]'>
          <svg
            width='14'
            height='18'
            viewBox='0 0 29 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14.34 0L28.68 35H0L14.34 0Z'
              stroke='#A9ADB9'
              strokeWidth='2'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
