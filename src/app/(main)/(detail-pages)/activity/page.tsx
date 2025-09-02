'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Document, Page, pdfjs } from 'react-pdf';
import {
  SidebarContainer,
  HeaderContainer,
  PlusButton,
  EditButton,
} from '@/components/layout-components';
import { projects, studies } from '@/app/data/activities';
import { members } from '@/app/data/members';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

export default function ActivityPage() {
  const [selectedTab, setSelectedTab] = useState<'project' | 'study'>(
    'project',
  );
  const [selectedItem, setSelectedItem] = useState<string>('1');
  const [currentSlide, setCurrentSlide] = useState<number>(1);
  const [numPages, setNumPages] = useState<number>(0);
  const currentList = selectedTab === 'project' ? projects : studies;
  const currentItem =
    currentList.find((item) => item.id === selectedItem) ?? currentList[0];

  // PDF.js 워커 설정 (Next.js 환경에 맞게 수정)
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
  }, []);

  // 선택된 아이템이 변경될 때 슬라이드를 1로 리셋
  React.useEffect(() => {
    setCurrentSlide(1);
    setNumPages(0); // PDF 페이지 수도 리셋
  }, [selectedItem]);

  // 컴포넌트 언마운트 시 cleanup
  React.useEffect(() => {
    return () => {
      setCurrentSlide(1);
      setNumPages(0);
    };
  }, []);

  // PDF 문서 로드 성공 핸들러
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  // PDF 문서 로드 에러 핸들러
  function onDocumentLoadError(error: Error) {
    console.error('PDF 로드 에러:', error);
    setNumPages(0);
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
  const pdfPath =
    currentItem?.pdfPath ||
    '/pdfs/activities/projects/ALOC_최종발표회_UOScholar.pdf';
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
      <div className='flex-col flex-1 relative'>
        {/* 추가하기 버튼 */}
        <PlusButton
          title='활동 정보 추가'
          className='absolute z-50 w-[80px] h-[32px] left-[150px] top-[30px] bg-blue-500 text-white rounded-md text-[14px] font-medium hover:bg-brand-blue-hover transition-colors cursor-pointer flex items-center justify-center'
          fields={[
            {
              name: 'type',
              label: '활동 유형',
              type: 'select',
              placeholder: '활동 유형을 선택하세요',
              options: [
                { value: 'project', label: '프로젝트' },
                { value: 'study', label: '스터디' },
              ],
            },
            {
              name: 'title',
              label: '제목',
              type: 'text',
              placeholder: '활동 제목을 입력하세요',
            },
            {
              name: 'subtitle',
              label: '부제목',
              type: 'text',
              placeholder: '활동 부제목을 입력하세요',
            },
            {
              name: 'date',
              label: '날짜',
              type: 'text',
              placeholder: '활동 날짜를 입력하세요',
            },
          ]}
          onSave={(data) => {
            console.log('활동 정보 추가:', data);
            // TODO: 실제 데이터 추가 로직 구현
          }}
        />

        {/* 수정하기 버튼 */}
        <EditButton
          title={`${currentItem.title} 관리`}
          //EditButton의 className 속성을 덮어씀
          className='absolute z-40 w-[80px] h-[80px] right-[5px] top-[90px] hover:opacity-50 transition-colors cursor-pointer flex items-center justify-center'
          fields={[
            {
              name: 'type',
              label: '활동 유형',
              type: 'select',
              placeholder: '활동 유형을 선택하세요',
              options: [
                { value: 'project', label: '프로젝트' },
                { value: 'study', label: '스터디' },
              ],
            },
            {
              name: 'title',
              label: '제목',
              type: 'text',
              placeholder: '활동 제목을 입력하세요',
            },
            {
              name: 'subtitle',
              label: '부제목',
              type: 'text',
              placeholder: '활동 부제목을 입력하세요',
            },
            {
              name: 'date',
              label: '날짜',
              type: 'text',
              placeholder: '활동 날짜를 입력하세요',
            },
          ]}
          onSave={(data) => {
            console.log('활동 정보 수정:', data);
            // TODO: 실제 데이터 수정 로직 구현
          }}
        />

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

        {/* 프로젝트/스터디 목록 컨테이너 */}
        <div className='flex h-full'>
          {/* 프로젝트/스터디 목록 컨테이너 */}
          <div className='flex flex-col items-center w-[220px] h-full border-r border-border-bright'>
            <div className='mt-[15px] flex flex-col'>
              {currentList.map((item, index) => (
                <div
                  key={item.id}
                  className={`w-[170px] min-h-[80px] rounded-[7.5px] p-5 ${
                    selectedItem === item.id
                      ? 'bg-yellow-200'
                      : 'bg-transparent'
                  }`}
                >
                  <button
                    onClick={() => setSelectedItem(item.id)}
                    className='w-full text-left cursor-pointer transition-colors'
                  >
                    <h3 className='text-[15.5px] font-bold text-text-primary mb-[4.5px] truncate w-full'>
                      {item.title}
                    </h3>
                    <p className='text-[14.5px] font-bold text-text-secondary leading-tight truncate w-full'>
                      {item.subtitle}
                    </p>
                  </button>
                </div>
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
              <Link
                href={`/activity/detail?id=${currentItem?.id}&type=${selectedTab}`}
                className='w-[400px] h-[198px] border border-border-bright rounded-[20px] overflow-hidden cursor-pointer hover:opacity-90 transition-opacity'
              >
                <Document
                  file={pdfPath}
                  onLoadSuccess={onDocumentLoadSuccess}
                  onLoadError={onDocumentLoadError}
                  loading={
                    <div className='w-full h-full rounded-[20px] overflow-hidden flex items-center justify-center bg-gray-200'>
                      <Image
                        src='/images/activity/loading.png'
                        alt='PDF 로딩 중'
                        width={400}
                        height={198}
                        className='w-full h-full object-cover'
                      />
                    </div>
                  }
                  error={
                    <div className='w-full h-full rounded-[20px] overflow-hidden flex items-center justify-center bg-gray-200'>
                      <div className='text-red-500 text-sm'>PDF 로드 실패</div>
                    </div>
                  }
                >
                  <Page
                    pageNumber={currentSlide}
                    width={400}
                    renderTextLayer={false}
                    renderAnnotationLayer={false}
                    loading={
                      <div className='w-full h-full flex items-center justify-center'>
                        <div className='text-gray-500 text-xs'>
                          페이지 로딩 중...
                        </div>
                      </div>
                    }
                    error={
                      <div className='w-full h-full flex items-center justify-center'>
                        <div className='text-red-500 text-xs'>
                          페이지 로드 실패
                        </div>
                      </div>
                    }
                  />
                </Document>
              </Link>
              {/* 미니 슬라이드 쇼 */}
              <div className='w-full mt-[5px] h-[15px] bg-white flex items-center justify-center gap-[15px]'>
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
                  {currentSlide}/{numPages || 1}
                </span>
                <button
                  onClick={goToNextSlide}
                  disabled={currentSlide === (numPages || 1)}
                  className={`w-[51.5px] h-[51.5px] cursor-pointer transition-opacity ${
                    currentSlide === (numPages || 1)
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
                  <h2 className='text-[25px] font-bold text-text-primary mb-[3.5px] whitespace-nowrap'>
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
                          src='/images/common/github-logo.png'
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
                          src='/images/common/notion-logo.png'
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
                <p className='mt-[18px] text-[17.6px] text-[#5C5E66] leading-[1.2]'>
                  {currentItem?.description}
                </p>
              </div>

              {/* 태그 */}
              <div>
                <p className='text-[17.5px] text-[#5C5E66] font-inter'>
                  {currentItem?.tags?.map((tag) => `#${tag}`).join(' ')}
                </p>
              </div>

              {/* 팀 멤버 */}
              <div className='flex mt-[8px] gap-[13px] flex-row w-full justify-center'>
                {currentItem?.members?.map((name, index) => {
                  // 멤버 이름으로 ID 찾기
                  const member = members.find(
                    (m) =>
                      m.name.includes(name) ||
                      name.includes(m.name.split(' ').slice(-1)[0]),
                  );

                  return (
                    <Link
                      key={name}
                      href={member ? `/members/detail?id=${member.id}` : '#'}
                      className={`w-20 h-8 border border-[#A9ADB9] rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity ${
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
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
