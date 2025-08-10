import React from 'react';
import Image from 'next/image';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  marginTop?: string;
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
      width: 89,
      height: 89,
      className: 'w-[89px] h-[89px] rounded-lg overflow-hidden shadow-md',
      marginTop: 'mt-[27px]',
    },
    {
      id: 'activity',
      label: 'Activity',
      icon: '/images/members/activity-icon.png',
      alt: 'Activity',
      width: 90,
      height: 90,
      className: 'w-[90px] h-[90px] rounded-lg overflow-hidden',
      marginTop: 'mt-[16px]',
    },
    {
      id: 'members',
      label: '멤버 소개',
      icon: '/images/members/member-icon.svg',
      alt: '멤버 소개',
      width: 84,
      height: 69,
      className: 'w-[84px] h-[69px]',
      marginTop: 'mt-[16px]',
    },
    {
      id: 'photos',
      label: '활동 사진',
      icon: '/images/members/photo-icon.png',
      alt: '활동 사진',
      width: 85,
      height: 85,
      className: 'w-[85px] h-[85px] rounded-lg overflow-hidden',
      marginTop: 'mt-[16px]',
    },
  ];

  return (
    <div
      className={`absolute w-[146px] h-[588px] left-[1256px] top-[284px] rounded-[40px] ${className}`}
      style={{ background: 'rgba(255, 255, 255, 0.70)' }}
    >
      <div className='flex flex-col items-center space-y-6'>
        {navItems.map((item) => (
          <div key={item.id} className={`text-center ${item.marginTop}`}>
            <div className={item.className}>
              <Image
                src={item.icon}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className='object-cover'
              />
            </div>
            <span className='text-[18px] font-normal text-black tracking-[-1.2px] leading-[30px]'>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;
