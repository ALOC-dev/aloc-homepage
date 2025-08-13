'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { members, type Member } from '@/app/data/members';
import '@/app/global.css';

// 세대 타입 정의
interface Generation {
  id: number;
  name: string;
  color: string;
}

export default function Members() {
  const [selectedGeneration, setSelectedGeneration] = useState<number | null>(
    null,
  );

  // 세대 데이터
  const generations: Generation[] = [
    { id: 3, name: '3기', color: 'var(--color-brand-orange)' },
    { id: 2, name: '2기', color: 'var(--color-brand-green-primary)' },
    { id: 1, name: '1기', color: 'var(--color-brand-blue)' },
  ];

  // 멤버 데이터는 외부 파일에서 가져옴

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
      <div className='w-[232.59px] h-full bg-border-muted shadow-[2.457px_0_5.733px_0_rgba(0,0,0,0.25)] flex-shrink-0 relative z-30'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-[47.5px] left-[49.96px] flex space-x-[29px]'>
          <div className='w-[24.57px] h-[24.57px] bg-red rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-yellow rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-green rounded-full' />
        </div>

        {/* 왼쪽 사이드바 컨텐츠 그룹 */}
        <div className='mt-[140px] flex flex-col items-center'>
          {/* 즐겨찾기 섹션 */}
          <div className='mb-8'>
            <h2 className='text-[18.84px] font-[700] text-border-gray mb-4'>
              즐겨찾기
            </h2>
            <div className='bg-border-light w-[200px] h-[41px] rounded-[12.28px] p-4 flex items-center'>
              <div className='w-[24.57px] h-[19.66px] ml-[13px]'>
                <Image
                  src='/images/members/member-folder-icon.svg'
                  alt='멤버폴더'
                  width={24.57}
                  height={19.66}
                  className='object-contain'
                />
              </div>
              <span className='ml-[10px] text-[18.84px] font-[700] text-text-primary'>
                멤버 소개
              </span>
            </div>
          </div>

          {/* 기수 필터 섹션 */}
          <div className='mt-[10px]'>
            <h2 className='text-[18.84px] font-[700] text-border-gray'>기수</h2>
            <div>
              {generations.map((generation) => (
                <button
                  key={generation.id}
                  onClick={() => handleGenerationClick(generation.id)}
                  className={`flex items-center rounded-[12.28px] border-none gap-[15px] w-[200px] h-[41px] transition-opacity ${
                    selectedGeneration === generation.id
                      ? 'opacity-100 bg-border-light'
                      : ' hover:opacity-100 bg-transparent'
                  }`}
                >
                  <div
                    className='ml-[10px] w-[20.47px] h-[20.47px] rounded-full'
                    style={{ backgroundColor: generation.color }}
                  />
                  <span className='text-[18.84px] font-[700] text-text-primary'>
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
        <div className='w-full h-[118.75px] bg-bg-light shadow-[0_2.457px_5.733px_0_rgba(0,0,0,0.25)] flex-shrink-0 relative'>
          {/* 제목 */}
          <h1 className='absolute top-[29.14px] left-[182.81px] text-[24.57px] font-[700] text-text-primary'>
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

        {/* 테이블 헤더 그룹 */}
        <div className='flex items-center border-b border-border-gray h-[38px] relative bg-white flex-shrink-0'>
          <span className='absolute left-[99.27px] text-[16.38px] font-[700] text-text-secondary'>
            이름
          </span>
          <span className='absolute left-[435px] text-[16.38px] font-[700] text-text-secondary'>
            역할
          </span>
          <span className='absolute left-[555px] text-[16.38px] font-[700] text-text-secondary'>
            관련스택
          </span>
        </div>

        {/* 메인 콘텐츠 그룹 */}
        <div className='flex-1 bg-white overflow-auto scrollbar-hide'>
          {/* 멤버 목록 */}
          <div className='px-[12.28px] py-[10px] space-y-0'>
            {filteredMembers.map((member, index) => (
              <Link
                key={member.id}
                href={`/members/detail?id=${member.id}`}
                className={`w-full h-[36.04px] rounded-[9.83px] flex items-center relative cursor-pointer transition-colors group ${
                  index % 2 === 1
                    ? 'bg-gray-light hover:bg-brand-blue-hover'
                    : 'bg-white hover:bg-brand-blue-hover'
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

                {/* 역할 */}
                <div>
                  <span className='text-[18.02px] absolute left-[420px] top-[7.37px] font-[700] text-text-secondary group-hover:text-white'>
                    {member.role}
                  </span>
                </div>

                {/* 관련스택 */}
                <div>
                  <span className='text-[18.02px]  absolute left-[540px] top-[7.37px] font-[700] text-text-secondary group-hover:text-white'>
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
