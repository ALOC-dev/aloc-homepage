'use client';

import React, { useState, useEffect } from 'react';
import { useDraggable } from './useDraggable';

interface DraggableContainerProps {
  children: React.ReactNode;
  dragColor?: string;
}

export const DraggableContainer = ({
  children,
  dragColor = '#f2f2f4',
}: DraggableContainerProps) => {
  // 기준 크기 고정 (1000x600)
  const baseWidth = 1000;
  const baseHeight = 600;
  const [scale, setScale] = useState(1);

  // 뷰포트 크기에 따라 scale 값 계산
  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // 최대 크기 제한 (뷰포트의 80%까지)
      const maxWidth = viewportWidth * 0.8;
      const maxHeight = viewportHeight * 0.8;

      // 10:6 비율로 scale 계산
      const aspectRatio = 10 / 6; // width / height

      let scaleX, scaleY;

      if (maxWidth / aspectRatio <= maxHeight) {
        // 너비 기준으로 계산
        scaleX = maxWidth / baseWidth;
        scaleY = maxWidth / aspectRatio / baseHeight;
      } else {
        // 높이 기준으로 계산
        scaleY = maxHeight / baseHeight;
        scaleX = (maxHeight * aspectRatio) / baseWidth;
      }

      // 더 작은 scale 값을 사용하여 비율 유지
      const newScale = Math.min(scaleX, scaleY);

      // 최소 scale 보장 (0.5 이상)
      setScale(Math.max(newScale, 0.5));
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const {
    position,
    isInDragArea,
    containerRef,
    handleMouseDown,
    handleContainerMouseMove,
  } = useDraggable({
    containerWidth: baseWidth,
    containerHeight: baseHeight,
    scale,
    dragColor,
  });

  return (
    <div
      ref={containerRef}
      className={`absolute bg-white rounded-[20.57px] overflow-hidden shadow-lg select-none ${
        isInDragArea ? 'cursor-move' : 'cursor-default'
      }`}
      style={{
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `scale(${scale})`,
        transformOrigin: 'top left',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleContainerMouseMove}
    >
      {children}
    </div>
  );
};
