import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  alt: string;
  href: string;
  width: number;
  height: number;
  className?: string;
}

interface WidgetProps {
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ className = '' }) => {
  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: '/images/members/home-icon.png',
      alt: 'Home',
      href: '/',
      width: 67,
      height: 67,
      className: 'w-[67px] h-[67px] rounded-lg overflow-hidden shadow-md',
    },
    {
      id: 'activity',
      label: 'Activity',
      icon: '/images/members/activity-icon.png',
      alt: 'Activity',
      href: '/activity',
      width: 68,
      height: 68,
      className: 'w-[68px] h-[68px] rounded-lg overflow-hidden',
    },
    {
      id: 'members',
      label: '멤버 소개',
      icon: '/images/members/member-icon.svg',
      alt: '멤버 소개',
      href: '/members',
      width: 63,
      height: 52,
      className: 'w-[63px] h-[52px]',
    },
    {
      id: 'photos',
      label: '활동 사진',
      icon: '/images/figma/activity-photo.png',
      alt: '활동 사진',
      href: '/gallery',
      width: 64,
      height: 64,
      className: 'w-[64px] h-[64px] rounded-lg overflow-hidden',
    },
  ];

  return (
    <div
      className={`fixed w-[110px] h-[441px] right-[30px] top-[104px] rounded-[30px] z-50 ${className}`}
      style={{ background: 'rgba(255, 255, 255, 0.70)' }}
    >
      <div className='flex flex-col items-center space-y-4'>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className='block no-underline hover:no-underline focus:no-underline visited:no-underline'
          >
            <div className={`text-center mt-[20px]`}>
              <div className={item.className}>
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className='object-cover'
                />
              </div>
              <span className='text-[13px] font-normal text-black tracking-[-0.8px] leading-[22px]'>
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Widget;
