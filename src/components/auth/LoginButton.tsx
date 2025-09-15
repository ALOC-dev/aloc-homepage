'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface LoginButtonProps {
  variant?: 'login' | 'logout';
  className?: string;
}

export default function LoginButton({
  variant = 'login',
  className = '',
}: LoginButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogin = () => {
    signIn('github', { callbackUrl: '/' });
  };

  const handleLogout = () => {
    signOut({ callbackUrl: '/login' });
  };

  if (status === 'loading') {
    return (
      <div className='animate-pulse bg-gray-200 rounded-lg h-10 w-24'></div>
    );
  }

  if (session && variant === 'logout') {
    return (
      <div className='flex items-center space-x-3'>
        <div className='flex items-center space-x-2'>
          <Image
            src={session.user?.image || '/images/common/github-logo.png'}
            alt='프로필'
            width={32}
            height={32}
            className='rounded-full'
          />
          <span className='text-sm font-medium text-gray-700'>
            {session.user?.name}
          </span>
        </div>
        <button
          onClick={handleLogout}
          className={`px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ${className}`}
        >
          로그아웃
        </button>
      </div>
    );
  }

  if (!session && variant === 'login') {
    return (
      <button
        onClick={handleLogin}
        className={`flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200 ${className}`}
      >
        <Image
          src='/images/common/github-mark-white.svg'
          alt='GitHub'
          width={16}
          height={16}
          className='mr-2'
        />
        로그인
      </button>
    );
  }

  return null;
}
