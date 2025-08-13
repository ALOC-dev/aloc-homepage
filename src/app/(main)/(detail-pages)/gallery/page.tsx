'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // 갤러리 카테고리
  const categories = [
    { id: 'all', name: '전체' },
    { id: 'study', name: '스터디' },
    { id: 'project', name: '프로젝트' },
    { id: 'event', name: '행사' },
  ];

  // 갤러리 이미지 데이터
  const galleryItems = [
    {
      id: 1,
      title: '알고리즘 스터디',
      category: 'study',
      date: '2024.01.15',
      image: 'https://placehold.co/300x200',
      description: '정기 알고리즘 스터디 모임',
    },
    {
      id: 2,
      title: '팀 프로젝트 발표',
      category: 'project',
      date: '2023.12.20',
      image: 'https://placehold.co/300x200',
      description: '웹 개발 프로젝트 최종 발표',
    },
    {
      id: 3,
      title: 'ALOC 신입생 환영회',
      category: 'event',
      date: '2023.03.10',
      image: 'https://placehold.co/300x200',
      description: '새 학기 신입생 환영 행사',
    },
    {
      id: 4,
      title: '코딩 테스트 스터디',
      category: 'study',
      date: '2023.11.05',
      image: 'https://placehold.co/300x200',
      description: '코딩 테스트 대비 집중 스터디',
    },
    {
      id: 5,
      title: '해커톤 참가',
      category: 'event',
      date: '2023.10.28',
      image: 'https://placehold.co/300x200',
      description: '서울시립대 해커톤 대회 참가',
    },
    {
      id: 6,
      title: '앱 개발 프로젝트',
      category: 'project',
      date: '2023.09.15',
      image: 'https://placehold.co/300x200',
      description: 'React Native 앱 개발 프로젝트',
    },
  ];

  // 필터링된 갤러리 아이템
  const filteredItems =
    selectedCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className='w-full h-full'>
      {/* 상단 헤더 바 (macOS 스타일) */}
      <div className='w-full h-[118.75px] bg-bg-light relative shadow-md'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-[47.5px] left-[49.96px] flex space-x-[29px]'>
          <div className='w-[24.57px] h-[24.57px] bg-brand-red rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-yellow rounded-full' />
          <div className='w-[24.57px] h-[24.57px] bg-brand-green rounded-full' />
        </div>

        {/* 제목 */}
        <h1 className='absolute top-[45.86px] left-[414.4px] text-[24.57px] font-bold text-text-primary'>
          활동 사진
        </h1>

        {/* 네비게이션 버튼들 */}
        <div className='absolute top-[49.14px] left-[310.4px] flex space-x-[45px]'>
          <button className='w-[12.39px] h-[21.11px] text-text-muted hover:text-gray-600'>
            ←
          </button>
          <button className='w-[12.39px] h-[21.11px] text-text-muted hover:text-gray-600'>
            →
          </button>
        </div>

        {/* 검색 버튼 */}
        <button className='absolute top-[39.31px] right-[32.76px] w-[32.76px] h-[32.76px] bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow'>
          <div className='w-[26.62px] h-[26.62px] text-text-secondary'>🔍</div>
        </button>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className='p-8 bg-white'>
        {/* 카테고리 필터 */}
        <div className='mb-8'>
          <div className='flex gap-4 justify-center'>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-brand-blue text-white'
                    : 'bg-gray-light text-text-secondary hover:bg-[#E9ECEF]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* 갤러리 그리드 */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group'
            >
              {/* 이미지 */}
              <div className='relative w-full h-48 overflow-hidden'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
              </div>

              {/* 카드 내용 */}
              <div className='p-4'>
                <div className='flex justify-between items-start mb-2'>
                  <h3 className='font-bold text-text-primary text-lg'>
                    {item.title}
                  </h3>
                  <span className='text-sm text-text-secondary bg-gray-light px-2 py-1 rounded'>
                    {item.date}
                  </span>
                </div>
                <p className='text-text-secondary text-sm leading-relaxed'>
                  {item.description}
                </p>

                {/* 카테고리 태그 */}
                <div className='mt-3'>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      item.category === 'study'
                        ? 'bg-brand-blue/10 text-brand-blue'
                        : item.category === 'project'
                          ? 'bg-brand-green-primary/10 text-brand-green-primary'
                          : 'bg-brand-orange/10 text-brand-orange'
                    }`}
                  >
                    {categories.find((cat) => cat.id === item.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 빈 상태 */}
        {filteredItems.length === 0 && (
          <div className='text-center py-12'>
            <div className='w-16 h-16 bg-gray-light rounded-full flex items-center justify-center mx-auto mb-4'>
              <span className='text-2xl'>📷</span>
            </div>
            <h3 className='text-lg font-medium text-text-primary mb-2'>
              해당 카테고리에 사진이 없습니다
            </h3>
            <p className='text-text-secondary'>다른 카테고리를 선택해보세요</p>
          </div>
        )}
      </div>
    </div>
  );
}
