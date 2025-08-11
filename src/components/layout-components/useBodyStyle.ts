'use client';

import { useEffect } from 'react';

export const useBodyStyle = () => {
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
};
