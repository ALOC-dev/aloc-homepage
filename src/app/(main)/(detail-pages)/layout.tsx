'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Widget from '@/components/Widget';

interface DetailPageLayoutProps {
  children: React.ReactNode;
}

export default function DetailPageLayout({ children }: DetailPageLayoutProps) {
  const [position, setPosition] = useState({ x: 100, y: 70 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isInDragArea, setIsInDragArea] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const element = document.elementFromPoint(e.clientX, e.clientY);

      // #f2f2f4 색상 영역에서만 드래그 가능
      if (element && element instanceof HTMLElement) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;

        // rgb(242, 242, 244) 또는 #f2f2f4 색상 확인
        if (
          backgroundColor === 'rgb(242, 242, 244)' ||
          backgroundColor === '#f2f2f4'
        ) {
          setDragOffset({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
          });
          setIsDragging(true);
        }
      }
    }
  };

  const handleContainerMouseMove = (e: React.MouseEvent) => {
    const element = document.elementFromPoint(e.clientX, e.clientY);

    if (element && element instanceof HTMLElement) {
      const computedStyle = window.getComputedStyle(element);
      const backgroundColor = computedStyle.backgroundColor;

      // #f2f2f4 색상 영역에서만 커서 변경
      setIsInDragArea(
        backgroundColor === 'rgb(242, 242, 244)' ||
          backgroundColor === '#f2f2f4',
      );
    } else {
      setIsInDragArea(false);
    }
  };

  const handleDocumentMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      const newX = e.clientX - dragOffset.x;
      const newY = e.clientY - dragOffset.y;

      // 화면 경계 내에서만 이동하도록 제한
      const maxX = window.innerWidth - 890; // 컨테이너 너비
      const maxY = window.innerHeight - 600; // 컨테이너 높이

      setPosition({
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        document.removeEventListener('mousemove', handleDocumentMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div className='w-screen h-screen fixed object-cover'>
      {/* 배경 이미지 */}
      <Image
        src='/images/figma/background.png'
        alt='배경'
        fill
        className='object-cover'
      />

      {/* 내부 페이지 윈도우 */}
      <div
        ref={containerRef}
        className={`absolute bg-[#FFFFFF] rounded-[24.57px] overflow-hidden shadow-lg select-none ${
          isInDragArea ? 'cursor-move' : 'cursor-default'
        }`}
        style={{
          width: '890px',
          height: '600px',
          left: `${position.x}px`,
          top: `${position.y}px`,
          minWidth: '890px',
          minHeight: '600px',
          maxHeight: '700px',
          maxWidth: '1100px',
          userSelect: 'none',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleContainerMouseMove}
      >
        {children}
      </div>

      {/* 오른쪽 사이드바 네비게이션 */}
      <Widget />
    </div>
  );
}
