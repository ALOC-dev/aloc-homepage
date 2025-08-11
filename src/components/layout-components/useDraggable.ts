'use client';

import { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DragOffset {
  x: number;
  y: number;
}

interface UseDraggableProps {
  containerWidth: number;
  containerHeight: number;
  dragColor?: string;
}

export const useDraggable = ({
  containerWidth,
  containerHeight,
  dragColor = '#f2f2f4',
}: UseDraggableProps) => {
  const [position, setPosition] = useState<Position>(() => {
    if (typeof window === 'undefined') {
      return { x: 0, y: 0 };
    }
    const centerX = (window.innerWidth - containerWidth) / 2;
    const centerY = (window.innerHeight - containerHeight) / 2;
    return { x: centerX, y: centerY };
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<DragOffset>({ x: 0, y: 0 });
  const [isInDragArea, setIsInDragArea] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const element = document.elementFromPoint(e.clientX, e.clientY);

      // 지정된 색상 영역에서만 드래그 가능
      if (element && element instanceof HTMLElement) {
        const computedStyle = window.getComputedStyle(element);
        const backgroundColor = computedStyle.backgroundColor;

        // rgb(242, 242, 244) 또는 #f2f2f4 색상 확인
        if (
          backgroundColor === 'rgb(242, 242, 244)' ||
          backgroundColor === dragColor
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

      // 지정된 색상 영역에서만 커서 변경
      setIsInDragArea(
        backgroundColor === 'rgb(242, 242, 244)' ||
          backgroundColor === dragColor,
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
      const maxX = window.innerWidth - containerWidth;
      const maxY = window.innerHeight - containerHeight;

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

  return {
    position,
    isDragging,
    isInDragArea,
    containerRef,
    handleMouseDown,
    handleContainerMouseMove,
  };
};
