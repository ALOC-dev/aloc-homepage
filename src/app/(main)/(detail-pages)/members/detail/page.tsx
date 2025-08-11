'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { getMemberById } from '@/app/data/members';

export default function MemberDetail() {
  const searchParams = useSearchParams();
  const memberId = searchParams.get('id');
  const member = memberId ? getMemberById(parseInt(memberId)) : null;

  if (!member) {
    return (
      <div className='relative w-full h-full bg-[#FFFFFF] flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-[24px] font-[700] text-[#3C414C] mb-4'>
            멤버를 찾을 수 없습니다
          </h1>
          <Link href='/members' className='text-[#408CFF] hover:underline'>
            멤버 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className='relative w-full h-full bg-[#FFFFFF]'>
      {/* 상단 헤더 바 */}
      <div className='w-full h-[63.1px] bg-[#f2f2f4] relative shadow-[0_2px_4px_rgba(0,0,0,0.05)]'>
        {/* macOS 트래픽 라이트 */}
        <div className='absolute top-[18.03px] left-[15.57px] flex space-x-[14.33px]'>
          <div className='w-[24.58px] h-[24.58px] bg-[#FF5F56] rounded-full' />
          <div className='w-[24.58px] h-[24.58px] bg-[#FDBC2E] rounded-full' />
          <div className='w-[24.58px] h-[24.58px] bg-[#28C83E] rounded-full' />
        </div>

        {/* 페이지 타이틀 */}
        <h1 className='absolute top-[5px] left-1/2 -translate-x-1/2 text-[20.49px] font-[700] text-black center'>
          {member.name}
        </h1>
      </div>

      {/* 좌측 패널 */}
      <div className='absolute bottom-0 w-[289.89px]'>
        {/* 프로필 이미지 */}
        <div className='absolute left-[40.97px] top-[32.76px] w-[196.67px] h-[196.67px] rounded-[19.67px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.1)]'>
          <Image
            src='/images/members/detail-icon.png'
            alt='프로필 이미지'
            fill
            className='object-cover'
            sizes='(max-width: 281px) 196px, 196px'
          />
        </div>

        {/* 역할 배지 */}
        <div className='absolute left-[44.25px] top-[281.56px]'>
          <span className='text-[21.31px] font-[700] text-[#408CFF]'>
            {member.role}
          </span>
        </div>

        {/* 이름 */}
        <div className='absolute left-[44.25px] top-[320.07px]'>
          <span className='text-[40.97px] font-[700] text-[#3C414C]'>
            {member.name.split(' ')[1] || member.name}
          </span>
        </div>

        {/* 태그(직무/관심분야) */}
        <div className='absolute left-[44.25px] top-[382.35px] flex gap-[8.19px]'>
          {member.stack.split(', ').map((skill, index) => (
            <span
              key={index}
              className='px-[8.19px] py-[5.74px] rounded-[9.83px] border border-[#A9ADB9] text-[13.93px] font-[700] text-black'
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
          className='absolute left-[44.25px] top-[432.33px] w-[73.76px] h-[73.76px]'
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

      {/* 뒤로가기 버튼 - 전체 페이지 레벨에서 고정 */}
      <Link
        href='/members'
        className='absolute top-[83px] right-[20px] flex z-10'
      >
        <Image
          src='/images/members/arrow-back-up.svg'
          alt='뒤로가기'
          width={24}
          height={24}
          className='object-contain'
        />
      </Link>

      {/* 우측 콘텐츠 */}
      <div className='absolute left-[281.89px] right-0 top-[63.1px] h-full border-l border-[#A9ADB9]/70'>
        {/* 내부 패딩과 타이포 */}
        <div className='relative h-full px-[60px] pt-[30.16px]'>
          <h2 className='text-[#3C414C] text-[32.78px] font-[700] leading-[1.2] mb-[24px]'>
            자기소개
          </h2>
          <p className='text-[#5C5E66] text-[18.58px] leading-[1.2] max-w-[573px] pr-[30px]'>
            {member.introduction}
          </p>
        </div>
      </div>
    </div>
  );
}
