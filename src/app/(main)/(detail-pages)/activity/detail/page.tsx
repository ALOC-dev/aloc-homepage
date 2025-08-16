'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';
import { SmallHeaderContainer } from '@/components/layout-components';
import { useSearchParams } from 'next/navigation';
import { projects, studies } from '@/app/data/activities';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// PDF.js 워커 설정 (공식 문서 권장 방법)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function ActivityDetail() {
  const searchParams = useSearchParams();
  const activityId = searchParams?.get('id') || '';
  const activityType =
    (searchParams?.get('type') as 'project' | 'study') || 'project';

  const currentList = activityType === 'project' ? projects : studies;
  const currentItem = currentList.find((item) => item.id === activityId);
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);

  // PDF 문서 로드 성공 핸들러
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  if (!currentItem) {
    return (
      <div className='relative w-full h-full bg-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[24px] font-[700] text-text-primary mb-4'>
            활동을 찾을 수 없습니다
          </h1>
        </div>
      </div>
    );
  }

  // 슬라이드 네비게이션 함수들
  const goToPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToNextSlide = () => {
    const maxPages = numPages || currentItem?.slidesCount || 1;
    if (currentSlide < maxPages) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // PDF 파일 경로 (activities 데이터에서 가져오거나 기본값 사용)
  const pdfPath = currentItem?.pdfPath;

  return (
    <div className='flex flex-col w-full h-full bg-gray-300'>
      <SmallHeaderContainer>
        {/* 페이지 타이틀 */}
        <h1 className='h-full text-[25.49px] font-bold text-text-primary justify-center items-center flex'>
          {currentItem.title}
        </h1>
      </SmallHeaderContainer>

      {/* 메인 콘텐츠 영역 */}
      <div className='relative '>
        {/* 뒤로가기 버튼 */}
        <div className='absolute top-5 right-4 z-10'>
          <Link href='/activity'>
            <Image
              src='/images/members/arrow-back-up.svg'
              alt='뒤로가기'
              width={34}
              height={34}
              className='object-contain'
            />
          </Link>
        </div>

        {/* PDF 뷰어 */}
        <div className=' mt-[20px] w-[850px] h-[478px] overflow-hidden bg-white object-contain mx-auto'>
          <Document
            file={pdfPath}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className='w-full h-full flex items-center justify-center'>
                <div className='text-gray-500'>PDF 로딩 중...</div>
              </div>
            }
            error={
              <div className='w-full h-full flex items-center justify-center'>
                <div className='text-red-500'>PDF 로드 실패</div>
              </div>
            }
          >
            <Page
              pageNumber={currentSlide}
              width={850}
              height={478}
              loading={
                <div className='w-full h-full flex items-center justify-center'>
                  <div className='text-gray-500'>페이지 로딩 중...</div>
                </div>
              }
            />
          </Document>
        </div>

        {/* 슬라이드 네비게이션 */}
        <div className='w-full mt-[10px] h-[15px] flex items-center justify-center gap-[15px]'>
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
              alt='이전 페이지'
              width={11.5}
              height={11.5}
              className='w-full h-full object-contain'
            />
          </button>
          <span className='text-[17.5px] text-black'>
            {currentSlide}/{numPages || currentItem?.slidesCount || 1}
          </span>
          <button
            onClick={goToNextSlide}
            disabled={
              currentSlide === (numPages || currentItem?.slidesCount || 1)
            }
            className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
              currentSlide === (numPages || currentItem?.slidesCount || 1)
                ? 'opacity-20 cursor-not-allowed'
                : 'hover:opacity-80'
            }`}
          >
            <Image
              src='/images/activity/right-arrow.svg'
              alt='다음 페이지'
              width={11.5}
              height={11.5}
              className='w-full h-full object-contain'
            />
          </button>
        </div>
      </div>
    </div>
  );
}
