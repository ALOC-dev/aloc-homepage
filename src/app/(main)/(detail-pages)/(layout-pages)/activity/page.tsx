'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { SidebarContainer } from '@/components/layout-components';
import { HeaderContainer } from '@/components/layout-components';
import { projects, studies } from '@/app/data/activities';

export default function ProjectsPage() {
  const [selectedTab, setSelectedTab] = useState<'project' | 'study'>(
    'project',
  );
  const [selectedItem, setSelectedItem] = useState<string>('1');
  return (
    <div className='w-full h-full flex'>
      {/* 좌측 사이드바 */}
      <SidebarContainer>
        {/* Project/Study 탭 */}
        <div className='mt-[59px] flex flex-col items-center justify-center'>
          {/* ALOC Team List 제목 */}
          <h1 className='text-[17.84px] font-semibold text-border-dark leading-[1.2]'>
            ALOC Team List
          </h1>
          {/* Project 탭 */}
          <button
            onClick={() => setSelectedTab('project')}
            className={`w-[150px] h-[41px] rounded-[12.28px] flex items-center mt-[10px] cursor-pointer transition-colors ${
              selectedTab === 'project'
                ? 'bg-border-bright'
                : 'bg-transparent hover:bg-gray-100'
            }`}
          >
            <div className='w-[24.57px] h-[19.66px] ml-[13px]'>
              <Image
                src={
                  selectedTab === 'project'
                    ? '/images/activity/folder-icon1.svg'
                    : '/images/activity/folder-icon2.svg'
                }
                alt='활동 아이콘'
                width={24.57}
                height={19.66}
                className='object-contain'
              />
            </div>
            <span
              className={`ml-[10px] text-[18.84px] font-bold ${
                selectedTab === 'project'
                  ? 'text-text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Project
            </span>
            {/* 프로젝트 개수 - 선택된 상태에서만 보임 */}
            {selectedTab === 'project' && (
              <span className='ml-[15px] text-[17.84px] font-bold text-gray-400'>
                2
              </span>
            )}
          </button>

          {/* Study 탭 */}
          <button
            onClick={() => setSelectedTab('study')}
            className={`w-[150px] h-[41px] rounded-[12.28px] flex items-center cursor-pointer transition-colors ${
              selectedTab === 'study'
                ? 'bg-border-bright'
                : 'bg-transparent hover:bg-gray-100'
            }`}
          >
            <div className='w-[24.57px] h-[19.66px] ml-[13px]'>
              <Image
                src={
                  selectedTab === 'study'
                    ? '/images/activity/folder-icon1.svg'
                    : '/images/activity/folder-icon2.svg'
                }
                alt='스터디 아이콘'
                width={24.57}
                height={19.66}
                className='object-contain'
              />
            </div>
            <span
              className={`ml-[10px] text-[18.84px] font-bold ${
                selectedTab === 'study'
                  ? 'text-text-primary'
                  : 'text-text-secondary'
              }`}
            >
              Study
            </span>
            {/* 스터디 개수 - 선택된 상태에서만 보임 */}
            {selectedTab === 'study' && (
              <span className='ml-[27px] text-[17.84px] font-bold text-gray-400'>
                1
              </span>
            )}
          </button>
        </div>
      </SidebarContainer>

      {/* 메인 콘텐츠 영역 */}
      <div className='flex-col flex-1'>
        {/* 상단 헤더 */}
        <HeaderContainer>
          <div className='absolute top-1/2 -translate-y-1/2 left-[50px]'>
            <Image
              src='/images/activity/list-button.svg'
              alt='활동 아이콘'
              width={67}
              height={53}
              className='object-contain'
            />
          </div>
        </HeaderContainer>
        <div className='flex h-full'>
          {/* 프로젝트/스터디 목록 컨테이너 */}
          <div className='flex flex-col items-center w-[220px] h-full border-r border-border-bright'>
            <div className='mt-[15px] flex flex-col'>
              {(selectedTab === 'project' ? projects : studies).map(
                (item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item.id)}
                    className={`w-[170px] h-[80px] flex flex-col justify-center items-start rounded-[7.5px] p-5 cursor-pointer transition-colors ${
                      selectedItem === item.id
                        ? 'bg-yellow-200'
                        : 'bg-transparent'
                    }`}
                  >
                    <h3 className='text-[15.5px] font-bold text-text-primary mb-[4.5px]'>
                      {item.title}
                    </h3>
                    <p className='text-[14.5px] text-text-secondary'>
                      {item.description}
                    </p>
                  </button>
                ),
              )}
            </div>
          </div>

          {/* 프로젝트 상세 정보 컨테이너 */}
          <div className='flex-1 flex flex-col items-center'>
            {/* 날짜 및 이미지 컨테이너 */}
            <div className='flex flex-col items-center gap-[10px] mt-5'>
              {/* 날짜 */}
              <div>
                <p className='text-[15.5px] font-bold text-text-tertiary'>
                  2025년 3월 2일 ~ 진행 중
                </p>
              </div>
              {/* 프로젝트 이미지 */}
              <div className='w-[350px] h-[148px] rounded-[25px] overflow-hidden'>
                <Image
                  src='/images/figma/project-image-2b1b0e.png'
                  alt='프로젝트 이미지'
                  width={213}
                  height={98}
                  className='w-full h-full object-cover'
                />
              </div>
              {/* 이미지 갤러리 네비게이션 */}
              <div className='w-[96px] h-[15px] bg-white rounded-[5px] border border-[rgba(169,173,185,0.5)] flex items-center justify-between px-[9px]'>
                <span className='text-[11.5px] text-[#A9ADB9]'>←</span>
                <span className='text-[11.5px] text-black'>1/36</span>
                <span className='text-[11.5px] text-black'>→</span>
              </div>
            </div>

            {/* 아이콘들 */}
            <div className='flex-row flex justify-end w-full space-x-5 mr-13'>
              <div className='w-[40px] h-[40px]'>
                <Image
                  src='/images/figma/images-icon.png'
                  alt='이미지 아이콘'
                  width={19}
                  height={19.5}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='w-[40px] h-[40px]'>
                <Image
                  src='/images/figma/notion-logo.png'
                  alt='Notion 로고'
                  width={20.5}
                  height={20.5}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>

            {/* 프로젝트 상세 정보 컨테이너 */}
            <div className='flex flex-col items-start w-full p-5 space-y-1'>
              {/* 프로젝트 상세 정보 */}
              <div className='w-full'>
                <h2 className='text-[28px] font-bold text-text-primary mb-[3.5px]'>
                  이시대맛집
                </h2>
                <p className='text-[19px] text-text-secondary'>
                  시립대 주변 맛집 지도
                </p>
              </div>

              {/* 프로젝트 설명 */}
              <div className='w-full'>
                <p className='mt-[10px] text-[14.5px] text-[#5C5E66] leading-[1.2]'>
                  설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명설명
                </p>
              </div>

              {/* 태그 */}
              <div>
                <p className='text-[16.5px] text-[#5C5E66] font-inter'>
                  #react #next #typescript
                </p>
              </div>

              {/* 팀 멤버 */}
              <div className='flex gap-[5px]'>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
