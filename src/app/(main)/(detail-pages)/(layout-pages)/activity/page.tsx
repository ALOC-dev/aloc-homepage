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
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const currentList = selectedTab === 'project' ? projects : studies;
  const currentItem =
    currentList.find((item) => item.id === selectedItem) ?? currentList[0];

  // 선택된 아이템이 변경될 때 슬라이드를 1로 리셋
  React.useEffect(() => {
    setCurrentSlide(1);
  }, [selectedItem]);

  // 슬라이드 네비게이션 함수들
  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    if (currentItem?.slidesCount && currentSlide < currentItem.slidesCount) {
      setCurrentSlide(currentSlide + 1);
    }
  };
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
                {projects.length}
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
                {studies.length}
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
              {currentList.map((item, index) => (
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
                    {item.subtitle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* 프로젝트 상세 정보 컨테이너 */}
          <div className='flex-1 flex flex-col items-center'>
            {/* 날짜 및 이미지 컨테이너 */}
            <div className='flex flex-col items-center gap-[10px] mt-5'>
              {/* 날짜 */}
              <div>
                <p className='text-[15.5px] font-bold text-text-tertiary'>
                  {currentItem?.date}
                </p>
              </div>
              {/* 프로젝트 이미지 */}
              <div className='w-[350px] h-[148px] rounded-[20px] overflow-hidden'>
                <Image
                  src='/images/figma/project-image-2b1b0e.png'
                  alt='프로젝트 이미지'
                  width={213}
                  height={98}
                  className='w-full h-full object-cover'
                />
              </div>
              {/* 미니 슬라이드 쇼 */}
              <div className='w-full mt-[10px] h-[15px] bg-white flex items-center justify-center gap-[15px]'>
                <button
                  onClick={goToPreviousSlide}
                  disabled={currentSlide === 1}
                  className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
                    currentSlide === 1
                      ? 'opacity-20 cursor-not-allowed'
                      : 'hover:opacity-80'
                  }`}
                >
                  <Image
                    src='/images/activity/left-arrow.svg'
                    alt='이전 이미지'
                    width={11.5}
                    height={11.5}
                    className='w-full h-full object-contain'
                  />
                </button>
                <span className='text-[17.5px] text-black'>
                  {currentSlide}/{currentItem?.slidesCount || 1}
                </span>
                <button
                  onClick={goToNextSlide}
                  disabled={currentSlide === (currentItem?.slidesCount || 1)}
                  className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
                    currentSlide === (currentItem?.slidesCount || 1)
                      ? 'opacity-20 cursor-not-allowed'
                      : 'hover:opacity-80'
                  }`}
                >
                  <Image
                    src='/images/activity/right-arrow.svg'
                    alt='다음 이미지'
                    width={11.5}
                    height={11.5}
                    className='w-full h-full object-contain'
                  />
                </button>
              </div>
            </div>

            {/* 프로젝트 상세 정보 컨테이너 */}
            <div className='flex flex-col items-start w-full p-5'>
              {/* 프로젝트 상세 정보 */}
              <div className='w-full'>
                {/* 프로젝트 제목 */}
                <div className='flex flex-row w-full'>
                  <h2 className='text-[28px] font-bold text-text-primary mb-[3.5px] whitespace-nowrap'>
                    {currentItem?.title}
                  </h2>
                  {/* 링크 버튼들 */}
                  <div className='flex-row flex justify-end w-full space-x-5'>
                    {/* GitHub 버튼 */}
                    {currentItem?.github && (
                      <a
                        href={currentItem.github}
                        target='_blank'
                        rel='noopener noreferrer' // 외부 링크 열기
                        className='w-[30px] h-[30px] cursor-pointer hover:opacity-80 transition-opacity'
                      >
                        <Image
                          src='/images/figma/images-icon.png'
                          alt='GitHub 링크'
                          width={19}
                          height={19.5}
                          className='w-full h-full object-cover'
                        />
                      </a>
                    )}
                    {/* Notion 버튼 */}
                    {currentItem?.notion && (
                      <a
                        href={currentItem.notion}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='w-[30px] h-[30px] cursor-pointer hover:opacity-80 transition-opacity'
                      >
                        <Image
                          src='/images/figma/notion-logo.png'
                          alt='Notion 링크'
                          width={20.5}
                          height={20.5}
                          className='w-full h-full object-cover'
                        />
                      </a>
                    )}
                  </div>
                </div>
                {/* 프로젝트 부제목 */}
                <p className='text-[19px] text-text-secondary'>
                  {currentItem?.subtitle}
                </p>
              </div>

              {/* 프로젝트 설명 */}
              <div className='w-full'>
                <p className='mt-[10px] text-[16.5px] text-[#5C5E66] leading-[1.2]'>
                  {currentItem?.description}
                </p>
              </div>

              {/* 태그 */}
              <div>
                <p className='text-[16.5px] text-[#5C5E66] font-inter'>
                  {currentItem?.tags?.map((tag) => `#${tag}`).join(' ')}
                </p>
              </div>

              {/* 팀 멤버 */}
              <div className='flex mt-[10px] gap-[13px] flex-row w-full justify-center'>
                {currentItem?.members?.map((name, index) => (
                  <div
                    key={name}
                    className={`w-20 h-8 border border-[#A9ADB9] rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-brand-yellow border-none' : 'bg-white'
                    }`}
                  >
                    <span
                      className={`text-[17.5px] ${
                        index === 0 ? 'text-white' : 'text-text-primary'
                      }`}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
