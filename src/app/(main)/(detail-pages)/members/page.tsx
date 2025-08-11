'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// 세대 타입 정의
interface Generation {
  id: number;
  name: string;
  color: string;
}

// 멤버 타입 정의
interface Member {
  id: number;
  name: string;
  role: string;
  stack: string;
  generation: number;
  avatar: string;
  isHighlighted?: boolean;
}

export default function Members() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(
    null,
  );

  // 세대 데이터
  const generations: Generation[] = [
    { id: 3, name: '3기', color: '#ED6900' },
    { id: 2, name: '2기', color: '#23CC3D' },
    { id: 1, name: '1기', color: '#107EFF' },
  ];

  // 멤버 데이터
  const members: Member[] = [
    {
      id: 1,
      name: '2기 박주영',
      role: '회장',
      stack: '백엔드, AI',
      generation: 2,
      avatar: 'https://placehold.co/40x40',
      isHighlighted: true,
    },
    {
      id: 2,
      name: '3기 송희영',
      role: '부원',
      stack: '프론트엔드',
      generation: 3,
      avatar: 'https://placehold.co/40x40',
    },
    {
      id: 3,
      name: '3기 이채우',
      role: '부원',
      stack: '백엔드',
      generation: 3,
      avatar: 'https://placehold.co/40x40',
    },
    {
      id: 4,
      name: '3기 김정훈',
      role: '부원',
      stack: 'AI',
      generation: 3,
      avatar: 'https://placehold.co/40x40',
    },
    // 추가 멤버들 (플레이스홀더)
    ...Array.from({ length: 16 }, (_, i) => ({
      id: i + 5,
      name: '이름',
      role: '역할',
      stack: '관련스택',
      generation: 1,
      avatar: 'https://placehold.co/40x40',
    })),
  ];

  // 필터링된 멤버 목록
  const filteredMembers = selectedGeneration
    ? members.filter((member) => member.generation === selectedGeneration)
    : members;

  // 세대 필터 클릭 핸들러
  const handleGenerationClick = (generationId: number) => {
    setSelectedGeneration(
      selectedGeneration === generationId ? null : generationId,
    );
  };

  return (
    <div className='w-full h-full flex'>
      {/* 왼쪽 사이드바 그룹 */}
      <div className='w-[232.59px] h-full bg-[#DFDFE1] shadow-lg flex-shrink-0 relative'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-[47.5px] left-[49.96px] flex space-x-[29px]'>
          <div className='w-[24.57px] h-[24.57px] bg-[#FF5F56] rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-[#FDBC2E] rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-[#28C83E] rounded-full' />
        </div>

        {/* 왼쪽 사이드바 컨텐츠 그룹 */}
        <div className='mt-[140px] ml-[22px]'>
          {/* 즐겨찾기 섹션 */}
          <div className='mb-8'>
            <h2 className='text-[18.84px] font-bold text-[#A9ADB9] mb-4'>
              즐겨찾기
            </h2>
            <div className='bg-[#C7C7C9] rounded-[12.28px] p-3 flex items-center'>
              <div className='w-[24.57px] h-[19.66px] mr-3 relative'>
                <div className='absolute w-[24.57px] h-[13.1px] bottom-0 bg-[#C7C7C9] rounded-b-[4px] border-2 border-[#D18F00]' />
                <div className='absolute w-[24.57px] h-[8.19px] top-0 bg-[#C7C7C9] border-2 border-[#D18F00] rounded-[1.64px]' />
              </div>
              <span className='text-[18.84px] font-bold text-[#3C414C]'>
                멤버 소개
              </span>
            </div>
          </div>

          {/* 기수 필터 섹션 */}
          <div>
            <h2 className='text-[18.84px] font-bold text-[#A9ADB9] mb-6'>
              기수
            </h2>
            <div className='space-y-[15px]'>
              {generations.map((generation) => (
                <button
                  key={generation.id}
                  onClick={() => handleGenerationClick(generation.id)}
                  className={`flex items-center gap-[15px] p-2 rounded transition-opacity ${
                    selectedGeneration === generation.id
                      ? 'opacity-100 bg-[#FFFFFF]'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div
                    className='w-[20.47px] h-[20.47px] rounded-full'
                    style={{ backgroundColor: generation.color }}
                  />
                  <span className='text-[18.84px] font-bold text-[#3C414C]'>
                    {generation.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 오른쪽 영역 (헤더바 + 메인 콘텐츠) */}
      <div className='flex-1 h-full flex flex-col'>
        {/* 상단 헤더바 그룹 */}
        <div className='w-full h-[118.75px] bg-[#F2F2F4] shadow-md flex-shrink-0 relative'>
          {/* 제목 */}
          <h1 className='absolute top-[29.14px] left-[182.81px] text-[24.57px] font-bold text-[#3C414C]'>
            멤버 소개
          </h1>

          {/* 네비게이션 아이콘들 */}
          <div className='absolute top-[49.14px] left-[78.81px] flex space-x-[45px]'>
            <Image
              src='/images/members/arrow-left.svg'
              alt='이전'
              width={12.39}
              height={21.11}
              className='object-contain'
            />
            <Image
              src='/images/members/arrow-right.svg'
              alt='다음'
              width={12.39}
              height={21.11}
              className='object-contain'
            />
          </div>

          {/* 검색 아이콘 */}
          <div className='absolute top-[39.31px] right-[32.76px] w-[32.76px] h-[32.76px]  flex items-center justify-center shadow-sm'>
            <Image
              src='/images/members/search-icon.svg'
              alt='검색'
              width={26.62}
              height={26.62}
              className='object-contain'
            />
          </div>
        </div>

        {/* 메인 콘텐츠 그룹 */}
        <div className='flex-1 bg-[#FFFFFF] overflow-auto'>
          {/* 테이블 헤더 */}
          <div className='flex justify-between items-center px-8 py-4 border-b border-[#A9ADB9]'>
            <div className='flex space-x-[300px]'>
              <span className='text-[16.38px] font-normal text-[#494949] ml-[45px]'>
                이름
              </span>
              <div className='flex space-x-[115px]'>
                <span className='text-[16.38px] font-normal text-[#494949]'>
                  역할
                </span>
                <span className='text-[16.38px] font-normal text-[#494949]'>
                  관련스택
                </span>
              </div>
            </div>
          </div>

          {/* 멤버 목록 */}
          <div className='px-6 space-y-0'>
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className={`w-full h-[36.04px] rounded-[9.83px] flex items-center relative ${
                  member.isHighlighted
                    ? 'bg-[#0265E1]'
                    : index % 2 === 1
                      ? 'bg-[#F4F5F5]'
                      : 'bg-[#FFFFFF]'
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
                  <span
                    className={`text-[18.02px] font-bold ${
                      member.isHighlighted ? 'text-white' : 'text-black'
                    }`}
                  >
                    {member.name}
                  </span>
                </div>

                {/* 역할 */}
                <div className='absolute left-[420px] top-[7.37px]'>
                  <span
                    className={`text-[18.02px] font-bold ${
                      member.isHighlighted ? 'text-[#BBD1F7]' : 'text-[#494949]'
                    }`}
                  >
                    {member.role}
                  </span>
                </div>

                {/* 관련스택 */}
                <div className='absolute left-[540px] top-[7.37px]'>
                  <span
                    className={`text-[18.02px] font-bold ${
                      member.isHighlighted ? 'text-[#BBD1F7]' : 'text-[#494949]'
                    }`}
                  >
                    {member.stack}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
