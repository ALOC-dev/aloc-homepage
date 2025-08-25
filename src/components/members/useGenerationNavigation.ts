'use client';

import { useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export interface Generation {
  id: number;
  name: string;
  color: string;
}

export const useGenerationNavigation = (generations: Generation[]) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const lastSelectedRef = useRef<number | null>(null);

  // URL 쿼리에서 selectedGeneration 파생
  const selectedGeneration = useMemo<number | null>(() => {
    const genParam = searchParams?.get('generation');
    if (!genParam) return null;
    const genNum = parseInt(genParam, 10);
    return generations.some((g) => g.id === genNum) ? genNum : null;
  }, [searchParams, generations]);

  // generation 변경 시 URL 업데이트
  const pushGenerationToUrl = (gen: number | null) => {
    const params = new URLSearchParams(searchParams?.toString());
    if (gen) {
      params.set('generation', String(gen));
    } else {
      params.delete('generation');
    }
    router.push(`/members?${params.toString()}`);
  };

  // 세대 버튼 클릭
  const handleGenerationClick = (generationId: number) => {
    // 동일 기수를 다시 눌러도 해제하지 않고 그대로 유지
    lastSelectedRef.current = generationId;
    pushGenerationToUrl(generationId);
  };

  // 즐겨찾기 컨테이너 토글: 전체 보기 <-> 마지막 선택 기수 보기
  const toggleAllOrCurrent = () => {
    if (selectedGeneration === null && lastSelectedRef.current) {
      pushGenerationToUrl(lastSelectedRef.current);
    } else {
      pushGenerationToUrl(null);
    }
  };

  // 좌우 이동 핸들러 (이전/다음 기수)
  const orderedGenIds = useMemo(
    () => generations.map((g) => g.id),
    [generations],
  );

  const goToPrevGeneration = () => {
    if (!orderedGenIds.length) return;
    const current = selectedGeneration ?? orderedGenIds[0];
    const idx = orderedGenIds.indexOf(current);
    const prevIdx = (idx - 1 + orderedGenIds.length) % orderedGenIds.length;
    const target = orderedGenIds[prevIdx];
    pushGenerationToUrl(target);
  };

  const goToNextGeneration = () => {
    if (!orderedGenIds.length) return;
    const current = selectedGeneration ?? orderedGenIds[0];
    const idx = orderedGenIds.indexOf(current);
    const nextIdx = (idx + 1) % orderedGenIds.length;
    const target = orderedGenIds[nextIdx];
    pushGenerationToUrl(target);
  };

  return {
    selectedGeneration,
    handleGenerationClick,
    goToPrevGeneration,
    goToNextGeneration,
    toggleAllOrCurrent,
  } as const;
};
