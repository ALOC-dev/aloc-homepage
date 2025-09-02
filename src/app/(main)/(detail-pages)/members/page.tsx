'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { members, type Member } from '@/app/data/members';
import {
  SidebarContainer,
  HeaderContainer,
  PlusButton,
} from '@/components/layout-components';
import { useGenerationNavigation } from '@/components/members/useGenerationNavigation';
import { useMemberSearch } from '@/components/members/useMemberSearch';

// 세대 타입 정의
interface Generation {
  id: number;
  name: string;
  color: string;
}

// 세대 데이터 (레퍼런스 안정화를 위해 컴포넌트 외부에 정의)
const generations: Generation[] = [
  { id: 3, name: '3기', color: '#C3FFCC' },
  { id: 2, name: '2기', color: '#FFF8C1' },
  { id: 1, name: '1기', color: '#FFC4E3' },
];

export default function Members() {
  // 세대 데이터는 상단 모듈 레벨 상수 사용

  const {
    selectedGeneration,
    handleGenerationClick,
    goToPrevGeneration,
    goToNextGeneration,
    toggleAllOrCurrent,
  } = useGenerationNavigation(generations);

  // 검색 기능
  const {
    isSearchOpen,
    searchQuery,
    filteredMembers,
    toggleSearch,
    handleSearchChange,
  } = useMemberSearch(members, selectedGeneration);

  // 멤버 데이터는 외부 파일에서 가져옴

  return (
    <div className='w-full h-full flex'>
      {/* 왼쪽 사이드바 그룹 */}
      <SidebarContainer>
        {/* 즐겨찾기 섹션 */}
        <div className='mt-18 mb-6'>
          <h2 className='text-[15.84px] font-bold text-border-dark'>
            즐겨찾기
          </h2>
          <button
            type='button'
            onClick={toggleAllOrCurrent}
            className={`w-[150px] h-[41px] rounded-[12.28px] flex items-center cursor-pointer transition-colors ${
              !selectedGeneration ? 'bg-border-bright' : 'bg-transparent'
            }`}
          >
            <div className='w-[24.57px] h-[19.66px] ml-[13px]'>
              <Image
                src={
                  !selectedGeneration
                    ? '/images/members/folder-icon1.svg'
                    : '/images/members/folder-icon2.svg'
                }
                alt='멤버폴더'
                width={24.57}
                height={19.66}
                className='object-contain'
              />
            </div>
            <span className='ml-[10px] text-[18.84px] font-bold text-text-primary'>
              전체 멤버
            </span>
          </button>
        </div>

        {/* 기수 선택 섹션 */}
        <div className='mt-[10px]'>
          <h2 className='text-[15.84px] font-bold text-border-dark'>기수</h2>
          <div>
            {generations.map((generation) => (
              <button
                key={generation.id}
                onClick={() => handleGenerationClick(generation.id)}
                className={`cursor-pointer flex items-center rounded-[12.28px] border-none gap-[15px] w-[150px] h-[41px] transition-opacity ${
                  selectedGeneration === generation.id
                    ? 'opacity-100 bg-border-bright'
                    : ' hover:opacity-100 bg-transparent'
                }`}
              >
                <div
                  className='ml-[10px] w-[20.47px] h-[20.47px] rounded-full'
                  style={{ backgroundColor: generation.color }}
                />
                <span className='text-[18.84px] font-bold text-text-primary'>
                  {generation.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </SidebarContainer>

      {/* 오른쪽 영역 (헤더바 + 메인 콘텐츠) */}
      <div className='flex-1 h-full flex flex-col'>
        {/* 상단 헤더바 그룹 */}
        <HeaderContainer>
          {/* 네비게이션 아이콘 */}
          <div className='absolute top-1/2 -translate-y-1/2 left-[50px] flex space-x-[45px]'>
            <button
              type='button'
              onClick={goToPrevGeneration}
              aria-label='이전 기수'
              className='cursor-pointer hover:opacity-80 transition-opacity'
            >
              <Image
                src='/images/members/arrow-left.svg'
                alt='이전'
                width={12.39}
                height={21.11}
                className='object-contain'
              />
            </button>
            <button
              type='button'
              onClick={goToNextGeneration}
              aria-label='다음 기수'
              className='cursor-pointer hover:opacity-80 transition-opacity'
            >
              <Image
                src='/images/members/arrow-right.svg'
                alt='다음'
                width={12.39}
                height={21.11}
                className='object-contain'
              />
            </button>
          </div>

          {/* 추가하기 버튼 */}
          <PlusButton
            title='멤버 정보 추가'
            fields={[
              {
                name: 'name',
                label: '이름',
                type: 'text',
                placeholder: '이름을 입력하세요',
              },
              {
                name: 'generation',
                label: '기수',
                type: 'select',
                placeholder: '기수를 선택하세요',
                options: [
                  { value: '1', label: '1기' },
                  { value: '2', label: '2기' },
                  { value: '3', label: '3기' },
                  { value: '4', label: '4기' },
                ],
              },
              {
                name: 'role',
                label: '역할',
                type: 'select',
                placeholder: '역할을 선택하세요',
                options: [
                  { value: '회장', label: '회장' },
                  { value: '부회장', label: '부회장' },
                  { value: '총무', label: '총무' },
                  { value: '브랜드매니저', label: '브랜드매니저' },
                  { value: '부원', label: '부원' },
                ],
              },
              {
                name: 'stack',
                label: '관련 스택',
                type: 'select',
                placeholder: '관련 스택을 선택하세요',
                options: [
                  { value: '프론트엔드', label: '프론트엔드' },
                  { value: '백엔드', label: '백엔드' },
                  { value: 'AI', label: 'AI' },
                ],
              },
            ]}
            onSave={(data) => {
              console.log('멤버 정보 추가:', data);
              // TODO: 실제 데이터 추가 로직 구현
            }}
          />

          {/* 검색 아이콘 및 검색창 */}
          <div
            className={`absolute top-1/2 -translate-y-1/2 right-[50px] flex items-center rounded-2xl transition-all duration-300 ${
              isSearchOpen
                ? 'border-blue-500 border-4 opacity-70'
                : 'border-transparent border-2'
            }`}
          >
            <button
              type='button'
              aria-label='검색'
              onClick={toggleSearch}
              className='w-[32.76px] h-[32.76px] flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer'
            >
              <Image
                src='/images/members/search-icon.svg'
                alt='검색'
                width={26.62}
                height={26.62}
                className='object-contain'
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isSearchOpen ? 'w-[150px] opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <input
                type='text'
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder='이름 검색'
                className='h-[32px] w-[150px] px-2 rounded-md text-[15px] outline-none'
              />
            </div>
          </div>
        </HeaderContainer>

        {/* 테이블 헤더 그룹 */}
        <div className='flex items-center border-b border-border-gray h-[38px] relative bg-white flex-shrink-0'>
          <span className='absolute left-[89.27px] text-[16.38px] text-text-secondary'>
            이름
          </span>
          {/* 기수 + 역할 + 관련스택 (그룹) */}
          <div className='absolute left-[490px] top-1/2 -translate-y-1/2 flex items-center gap-[50px]'>
            <span className='text-[16.38px] text-text-secondary'>기수</span>
            <span className='text-[16.38px] text-text-secondary'>역할</span>
            <span className='text-[16.38px] text-text-secondary'>관련스택</span>
          </div>
        </div>

        {/* 메인 콘텐츠 그룹 */}
        <div className='flex-1 bg-white overflow-auto scrollbar-hide'>
          {/* 멤버 목록 */}
          <div className='px-[12.28px] py-[10px] space-y-0'>
            {filteredMembers.map((member, index) => (
              <Link
                key={member.id}
                href={`/members/detail?id=${member.id}`}
                className={`w-full h-[36.04px] rounded-[9.83px] flex items-center relative cursor-pointer transition-colors group hover:bg-brand-blue-hover ${
                  index % 2 === 1 ? 'bg-brighter-gray ' : 'bg-white '
                }`}
              >
                {/* 프로필 이미지 */}
                <div className='absolute left-[53.13px] top-[5.43px] w-[25px] h-[25px] rounded-full overflow-hidden border border-black shadow-md'>
                  <Image
                    src={member.avatar}
                    alt={`${member.name} 프로필`}
                    width={25}
                    height={25}
                    className='object-cover'
                  />
                </div>

                {/* 이름 */}
                <div className='absolute left-[89.27px] top-[7.37px]'>
                  <span className='text-[18.02px] font-[700] text-black group-hover:text-white'>
                    {member.name}
                  </span>
                </div>

                {/* 기수 + 역할 + 관련스택 (그룹) */}
                <div className='absolute left-[480px] top-[7.37px] flex items-center gap-[50px]'>
                  <span className='text-[18.02px] font-[700] text-text-secondary group-hover:text-white'>
                    {member.generation}기
                  </span>
                  <span className='text-[18.02px] font-[700] text-text-secondary group-hover:text-white'>
                    {member.role}
                  </span>
                  <span className='text-[18.02px] font-[700] text-text-secondary group-hover:text-white'>
                    {member.stack}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
