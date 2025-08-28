'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { folderData, folderImages, type FolderType } from '@/app/data/gallery';
import { SmallHeaderContainer } from '@/components/layout-components/SmallHeaderContainer';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState<FolderType>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('전체');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 카테고리 옵션들
  const categoryOptions = [
    '전체',
    '지식공유회',
    '최종발표회',
    '뒷풀이',
    '일상사진',
  ];
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 현재 선택된 폴더의 이미지들
  const currentImages = folderImages[selectedFolder];

  // 폴더 변경 시 이미지 인덱스 초기화
  const handleFolderChange = (folderId: FolderType) => {
    setSelectedFolder(folderId);
    setCurrentImageIndex(0);
  };

  return (
    <div className='w-full h-full bg-gray-100 flex flex-col'>
      <SmallHeaderContainer>
        <h1 className='text-[20px] font-bold text-black'>
          {folderData[selectedFolder].name}
        </h1>
      </SmallHeaderContainer>

      {/* 메인 이미지 영역 */}
      <div className='relative bg-black w-full h-[343px] overflow-hidden'>
        <Image
          src={currentImages[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          fill
          className='object-contain'
          priority
        />
      </div>

      {/* 카테고리 선택 드롭다운 */}
      <div className='w-full px-2 py-1.5 h-7'>
        <div className='relative' ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className='w-30 flex justify-center items-center gap-2 rounded-xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 focus:outline-none relative overflow-hidden'
          >
            <span className='text-md font-medium text-white'>
              {selectedCategory}
            </span>
          </button>

          {/* 드롭다운 메뉴 */}
          <div
            className={`absolute w-30 bottom-full left-0 right-0 mb-3 bg-white border border-gray-300 rounded-2xl z-50 transition-all duration-300 ease-in-out transform ${
              isDropdownOpen
                ? 'opacity-100 scale-100 translate-y-0'
                : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
            }`}
          >
            {categoryOptions.map((option: string) => (
              <button
                key={option}
                onClick={() => {
                  setSelectedCategory(option);
                  setIsDropdownOpen(false);
                  // 카테고리에 따라 폴더 변경
                  if (option === '전체') {
                    handleFolderChange('all');
                  } else if (option === '지식공유회') {
                    handleFolderChange('knowledge-sharing');
                  } else if (option === '최종발표회') {
                    handleFolderChange('final-presentation');
                  } else if (option === '뒷풀이') {
                    handleFolderChange('after-party');
                  } else if (option === '일상사진') {
                    handleFolderChange('daily-life');
                  }
                }}
                className={`w-full px-4 py-2 text-left text-sm hover:text-blue-600 transition-colors ${
                  selectedCategory === option
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 하단 갤러리 영역 */}
      <div className='relative w-full h-[100px]'>
        {/* 갤러리 썸네일들 */}
        <div className='w-full h-full overflow-x-auto overflow-y-hidden'>
          <div className='flex h-full items-center'>
            {/* 메인 썸네일들 */}
            {currentImages.map((image, index) => (
              <div
                key={index}
                className={`w-[120px] h-[78px] mx-[1.5px] overflow-hidden cursor-pointer flex-shrink-0 ${
                  currentImageIndex === index ? 'ring-3 ring-blue-500' : ''
                }`}
                onClick={() => setCurrentImageIndex(index)}
              >
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  width={125}
                  height={88}
                  className='w-full h-full object-cover'
                />
              </div>
            ))}
          </div>
        </div>

        {/* 중앙 카메라 버튼 */}
        <div className='w-full h-full flex justify-center items-center pb-2'>
          <div className='mb-6 w-[60px] h-[60px] bg-white rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors'>
            <Image
              src='/images/gallery/camera.svg'
              alt='camera'
              width={34}
              height={34}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
