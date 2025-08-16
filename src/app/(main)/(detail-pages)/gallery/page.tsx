'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { folderData, folderImages, type FolderType } from '@/app/data/gallery';
import { SmallHeaderContainer } from '@/components/layout-components/SmallHeaderContainer';

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState<FolderType>('all');

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
        {/* 폴더 선택 위젯 (iOS 스타일) */}
        <div className='w-[150px] absolute top-0 left-0 z-30'>
          <div className='flex flex-col items-start px-4 py-3 space-y-3'>
            {Object.values(folderData).map((folder) => (
              <button
                key={folder.id}
                onClick={() => handleFolderChange(folder.id)}
                className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                  selectedFolder === folder.id
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-white/70 text-gray-600 hover:bg-white hover:shadow-md'
                }`}
              >
                <span className='text-sm font-medium'>{folder.name}</span>
              </button>
            ))}
          </div>
        </div>
        <Image
          src={currentImages[currentImageIndex]}
          alt={`Gallery image ${currentImageIndex + 1}`}
          fill
          className='object-contain'
          priority
        />
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
        <div className='w-full h-full flex justify-center items-center'>
          <div className='mb-5 w-[60px] h-[60px] bg-white rounded-full border-2 border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors'>
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
