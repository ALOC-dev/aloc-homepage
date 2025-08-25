'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { getMemberById } from '@/app/data/members';
import { SmallHeaderContainer } from '@/components/layout-components';

export default function MemberDetail() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const memberId = searchParams?.get('id') || '';
  const member = memberId ? getMemberById(parseInt(memberId)) : null;

  // 뒤로가기 함수
  const handleGoBack = () => {
    router.back();
  };

  if (!member) {
    return (
      <div className='flex w-full h-full bg-white items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[24px] font-bold text-text-primary mb-4'>
            멤버를 찾을 수 없습니다
          </h1>
          <button
            onClick={handleGoBack}
            className='text-brand-blue-link hover:underline'
          >
            이전 페이지로 돌아가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col w-full h-full bg-white'>
      {/* 상단 헤더 바 */}
      <SmallHeaderContainer>
        {/* 페이지 타이틀 */}
        <h1 className='text-[20.49px] font-bold text-black'>{member.name}</h1>
        {/* 뒤로가기 버튼 - 우측 상단 고정 */}
        <button
          onClick={handleGoBack}
          className='absolute right-[20px] flex z-10'
        >
          <Image
            src='/images/members/arrow-back-up.svg'
            alt='뒤로가기'
            width={34}
            height={34}
            className='object-contain'
          />
        </button>
      </SmallHeaderContainer>

      {/* 메인 콘텐츠 영역 */}
      <div className='flex flex-1 relative'>
        {/* 좌측 패널 */}
        <div className='flex flex-col w-[289.89px] min-w-[289.89px] p-[40.97px]'>
          {/* 프로필 이미지 */}
          <div className='flex justify-center mb-[52.13px]'>
            <div className='w-[196.67px] h-[196.67px] rounded-[19.67px] overflow-hidden shadow-header relative'>
              <Image
                src='/images/members/detail-icon.png'
                alt='프로필 이미지'
                fill
                className='object-cover'
                sizes='(max-width: 281px) 196px, 196px'
              />
            </div>
          </div>

          {/* 역할 배지 */}
          <div className=''>
            <span className='text-[21.31px] font-bold text-brand-blue-link'>
              {member.role}
            </span>
          </div>

          {/* 이름 */}
          <div className='pt-2'>
            <span className='text-[40.97px] font-bold text-text-primary'>
              {member.name.split(' ')[1] || member.name}
            </span>
          </div>

          {/* 태그(직무/관심분야) */}
          <div className='flex flex-wrap gap-[8.19px] pt-3'>
            {member.stack.split(', ').map((skill, index) => (
              <span
                key={index}
                className='px-[8.19px] py-[5.74px] rounded-[9.83px] border border-border-gray text-[13.93px] font-bold text-black'
              >
                {skill}
              </span>
            ))}
          </div>

          {/* GitHub 아이콘 버튼 */}
          <a
            href={member.githubUrl || '#'}
            target='_blank'
            rel='noreferrer noopener'
            aria-label='GitHub 프로필'
            className='w-[73.76px] h-[73.76px] mt-6'
          >
            <Image
              src='/images/members/profile-icon.png'
              alt='GitHub'
              width={44}
              height={44}
              className='object-contain'
            />
          </a>
        </div>

        {/* 우측 콘텐츠 */}
        <div className='flex flex-1 border-l border-border-gray/70'>
          {/* 내부 패딩과 타이포 */}
          <div className='flex flex-col px-[60px] pt-[30.16px] pb-[30px]'>
            <h2 className='text-text-primary text-[32.78px] font-bold leading-[1.2] mb-[24px]'>
              자기소개
            </h2>
            <p className='text-text-tertiary text-[18.58px] leading-[1.2] max-w-[573px] pr-[30px]'>
              {member.introduction}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
