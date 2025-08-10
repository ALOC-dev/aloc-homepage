'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Widget from '@/app/components/Widget';

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

  // HTML/body 기본 여백 제거로 배경 이미지 흰색선 해결
  useEffect(() => {
    // 기존 스타일 백업
    const originalHtmlStyle = {
      margin: document.documentElement.style.margin,
      padding: document.documentElement.style.padding,
    };
    const originalBodyStyle = {
      margin: document.body.style.margin,
      padding: document.body.style.padding,
    };

    // HTML과 body의 여백/패딩 제거
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // 컴포넌트 언마운트 시 원래 스타일로 복원
    return () => {
      document.documentElement.style.margin = originalHtmlStyle.margin;
      document.documentElement.style.padding = originalHtmlStyle.padding;
      document.body.style.margin = originalBodyStyle.margin;
      document.body.style.padding = originalBodyStyle.padding;
    };
  }, []);

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
    <div className='w-[1440px] h-[1080px] relative object-cover'>
      {/* 배경 이미지 */}
      <Image
        src='/images/members/background.png'
        alt='배경'
        fill
        className='object-cover'
      />

      {/* 메인 멤버 소개 윈도우 */}
      <div className='absolute w-[1179px] h-[884px] left-[29px] top-[143px] bg-white rounded-[24.57px] overflow-hidden shadow-lg'>
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
            멤버 소개
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
          <button className='absolute top-[39.31px] right-[32.76px] w-[32.76px] h-[32.76px] bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow'>
            <div className='w-[26.62px] h-[26.62px] text-[#494949]'>🔍</div>
          </button>
        </div>

        <div className='flex'>
          {/* 왼쪽 사이드바 */}
          <div className='w-[232.59px] h-[765.75px] bg-[#DFDFE1] shadow-lg'>
            <div className='p-4'>
              {/* 즐겨찾기 섹션 */}
              <div className='mt-[120px] mb-8'>
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
                          ? 'opacity-100 bg-white/20'
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

          {/* 메인 콘텐츠 영역 */}
          <div className='flex-1 bg-white'>
            {/* 테이블 헤더 구분선 */}
            <div className='w-[946.74px] h-[1px] bg-[#A9ADB9] ml-[232.59px] mt-[38px]' />

            {/* 테이블 헤더 */}
            <div className='flex justify-between items-center px-8 py-4'>
              <div className='flex space-x-[300px]'>
                <span className='text-[16.38px] font-normal text-[#494949] ml-[245px]'>
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

            {/* 세로 구분선들 */}
            <div className='absolute left-[861.57px] top-[285px] w-[1px] h-[23.75px] bg-[#A9ADB9]' />
            <div className='absolute left-[977.04px] top-[285px] w-[1px] h-[23.75px] bg-[#A9ADB9]' />

            {/* 멤버 목록 */}
            <div className='px-6 space-y-0'>
              {filteredMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`w-[925.45px] h-[36.04px] rounded-[9.83px] flex items-center relative ${
                    member.isHighlighted
                      ? 'bg-[#0265E1]'
                      : index % 2 === 1
                        ? 'bg-[#F4F5F5]'
                        : 'bg-white'
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
                  <div className='absolute left-[620.8px] top-[7.37px]'>
                    <span
                      className={`text-[18.02px] font-bold ${
                        member.isHighlighted
                          ? 'text-[#BBD1F7]'
                          : 'text-[#494949]'
                      }`}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* 관련스택 */}
                  <div className='absolute left-[736.27px] top-[7.37px]'>
                    <span
                      className={`text-[18.02px] font-bold ${
                        member.isHighlighted
                          ? 'text-[#BBD1F7]'
                          : 'text-[#494949]'
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

      {/* 오른쪽 사이드바 네비게이션 */}
      <Widget />
    </div>
  );
}
