'use client';

import { useState, useMemo } from 'react';
import { type Member } from '@/app/data/members';

export const useMemberSearch = (
  members: Member[],
  selectedGeneration: number | null,
) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // 필터링된 멤버 목록
  const filteredMembers = useMemo(() => {
    const generationFiltered = selectedGeneration
      ? members.filter((member) => member.generation === selectedGeneration)
      : members;

    return generationFiltered.filter((member) =>
      searchQuery.trim() === ''
        ? true
        : member.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [members, selectedGeneration, searchQuery]);

  // 검색창 토글
  const toggleSearch = () => setIsSearchOpen((prev) => !prev);

  // 검색어 변경
  const handleSearchChange = (query: string) => setSearchQuery(query);

  // 검색 초기화
  const clearSearch = () => {
    setSearchQuery('');
    setIsSearchOpen(false);
  };

  return {
    isSearchOpen,
    searchQuery,
    filteredMembers,
    toggleSearch,
    handleSearchChange,
    clearSearch,
  } as const;
};
