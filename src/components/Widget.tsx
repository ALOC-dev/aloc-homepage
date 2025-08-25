import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef } from 'react';

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
  style?: React.CSSProperties;
}

const Widget = forwardRef<HTMLDivElement, WidgetProps>(({ className = '', style }, ref) => {
  const navItems: NavItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: '/images/widget/home-icon.png',
      alt: 'Home',
      href: '/',
      width: 67,
      height: 67,
      className: 'w-[67px] h-[67px] overflow-hidden',
    },
    {
      id: 'about',
      label: 'About',
      icon: '/images/widget/about-icon.png',
      alt: 'About',
      href: '/introduction',
      width: 67,
      height: 67,
    },
    {
      id: 'activity',
      label: 'Activity',
      icon: '/images/widget/activity-icon.png',
      alt: 'Activity',
      href: '/activity',
      width: 68,
      height: 68,
      className: 'w-[68px] h-[68px] overflow-hidden',
    },
    {
      id: 'member',
      label: 'Member',
      icon: '/images/members/member-icon.svg',
      alt: '멤버 소개',
      href: '/members',
      width: 63,
      height: 52,
      className: 'w-[63px] h-[52px]',
    },
    {
      id: 'photos',
      label: 'Photo',
      icon: '/images/widget/activity-photo.png',
      alt: '활동 사진',
      href: '/gallery',
      width: 64,
      height: 64,
      className: 'w-[64px] h-[64px] overflow-hidden',
    },
  ];

  return (
    <div
      ref={ref}
      className={`fixed w-[110px] h-fit pb-5 right-[30px] top-[104px] rounded-[30px] z-50 ${className}`}
      style={{ 
        background: 'rgba(255, 255, 255, 0.70)',
        ...style
      }}
    >
      <div className='flex flex-col items-center '>
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            aria-label={item.label}
            className='block no-underline hover:no-underline focus:no-underline visited:no-underline'
          >
            <div className={`text-center mt-[20px]`}>
              <div
                className={`${item.className} duration-300 ease-in-out hover:scale-120`}
              >
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
});

Widget.displayName = 'Widget';

export default Widget;
