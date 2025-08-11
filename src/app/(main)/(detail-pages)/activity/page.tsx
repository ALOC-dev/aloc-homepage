'use client';

import React from 'react';

export default function Activity() {
  return (
    <div className='w-full h-full'>
      {/* 상단 헤더 바 (macOS 스타일) */}
      <div className='w-full h-[118.75px] bg-[#F2F2F4] relative shadow-md'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-[47.5px] left-[49.96px] flex space-x-[29px]'>
          <div className='w-[24.57px] h-[24.57px] bg-[#FF5F56] rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-[#FDBC2E] rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-[#28C83E] rounded-full' />
        </div>

        {/* 제목 */}
        <h1 className='absolute top-[45.86px] left-[414.4px] text-[24.57px] font-bold text-[#3C414C]'>
          활동 현황
        </h1>

        {/* 네비게이션 버튼들 */}
        <div className='absolute top-[49.14px] left-[310.4px] flex space-x-[45px]'>
          <button className='w-[12.39px] h-[21.11px] text-[#B5B4B9] hover:text-gray-600'>
            ←
          </button>
          <button className='w-[12.39px] h-[21.11px] text-[#B5B4B9] hover:text-gray-600'>
            →
          </button>
        </div>

        {/* 검색 버튼 */}
        <button className='absolute top-[39.31px] right-[32.76px] w-[32.76px] h-[32.76px] bg-[#FFFFFF] rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow'>
          <div className='w-[26.62px] h-[26.62px] text-[#494949]'>🔍</div>
        </button>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className='p-8 bg-[#FFFFFF]'>
        <div className='max-w-4xl mx-auto'>
          {/* 활동 개요 섹션 */}
          <div className='mb-8'>
            <h2 className='text-2xl font-bold text-[#3C414C] mb-4'>
              ALOC 활동
            </h2>
            <p className='text-[#494949] leading-relaxed'>
              서울시립대 알고리즘 동아리 ALOC의 다양한 활동들을 소개합니다.
              알고리즘 스터디, 프로젝트 개발, 대회 참가 등 활발한 활동을
              진행하고 있습니다.
            </p>
          </div>

          {/* 활동 카테고리 */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
            {/* 알고리즘 스터디 */}
            <div className='bg-[#F4F5F5] rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#107EFF] rounded-full flex items-center justify-center mb-4'>
                <span className='text-white text-xl'>📚</span>
              </div>
              <h3 className='text-lg font-bold text-[#3C414C] mb-2'>
                알고리즘 스터디
              </h3>
              <p className='text-[#494949] text-sm'>
                정기적인 알고리즘 문제 해결 스터디를 통해 실력 향상을
                도모합니다.
              </p>
            </div>

            {/* 프로젝트 개발 */}
            <div className='bg-[#F4F5F5] rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#23CC3D] rounded-full flex items-center justify-center mb-4'>
                <span className='text-white text-xl'>💻</span>
              </div>
              <h3 className='text-lg font-bold text-[#3C414C] mb-2'>
                프로젝트 개발
              </h3>
              <p className='text-[#494949] text-sm'>
                팀을 이루어 실제 서비스를 개발하며 협업 능력을 기릅니다.
              </p>
            </div>

            {/* 대회 참가 */}
            <div className='bg-[#F4F5F5] rounded-lg p-6 hover:shadow-md transition-shadow'>
              <div className='w-12 h-12 bg-[#ED6900] rounded-full flex items-center justify-center mb-4'>
                <span className='text-white text-xl'>🏆</span>
              </div>
              <h3 className='text-lg font-bold text-[#3C414C] mb-2'>
                대회 참가
              </h3>
              <p className='text-[#494949] text-sm'>
                각종 프로그래밍 대회 및 해커톤에 참가하여 실전 경험을 쌓습니다.
              </p>
            </div>
          </div>

          {/* 최근 활동 */}
          <div>
            <h3 className='text-xl font-bold text-[#3C414C] mb-4'>최근 활동</h3>
            <div className='space-y-4'>
              <div className='border-l-4 border-[#107EFF] bg-[#F8F9FA] p-4 rounded-r-lg'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-bold text-[#3C414C]'>
                    정기 알고리즘 스터디
                  </h4>
                  <span className='text-sm text-[#494949]'>2024.01</span>
                </div>
                <p className='text-[#494949] text-sm'>
                  백준 온라인 저지 문제를 활용한 주간 스터디 진행
                </p>
              </div>

              <div className='border-l-4 border-[#23CC3D] bg-[#F8F9FA] p-4 rounded-r-lg'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-bold text-[#3C414C]'>웹 개발 프로젝트</h4>
                  <span className='text-sm text-[#494949]'>2023.12</span>
                </div>
                <p className='text-[#494949] text-sm'>
                  React와 Node.js를 활용한 팀 프로젝트 개발
                </p>
              </div>

              <div className='border-l-4 border-[#ED6900] bg-[#F8F9FA] p-4 rounded-r-lg'>
                <div className='flex justify-between items-start mb-2'>
                  <h4 className='font-bold text-[#3C414C]'>ICPC 대회 참가</h4>
                  <span className='text-sm text-[#494949]'>2023.11</span>
                </div>
                <p className='text-[#494949] text-sm'>
                  국제 대학생 프로그래밍 대회 한국 지역 대회 참가
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
