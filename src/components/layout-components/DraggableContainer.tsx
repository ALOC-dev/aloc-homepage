'use client';

import React from 'react';
import { useDraggable } from './useDraggable';

interface DraggableContainerProps {
  children: React.ReactNode;
  width: number;
  height: number;
  dragColor?: string;
}

export const DraggableContainer = ({
  children,
  width,
  height,
  dragColor = '#f2f2f4',
}: DraggableContainerProps) => {
  const {
    position,
    isInDragArea,
    containerRef,
    handleMouseDown,
    handleContainerMouseMove,
  } = useDraggable({
    containerWidth: width,
    containerHeight: height,
    dragColor,
  });

  return (
    <div
      ref={containerRef}
      className={`absolute bg-white rounded-[20.57px] overflow-hidden shadow-lg select-none ${
        isInDragArea ? 'cursor-move' : 'cursor-default'
      }`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        left: `${position.x}px`,
        top: `${position.y}px`,
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleContainerMouseMove}
    >
      {children}
    </div>
  );
};
