'use client';

import { signIn, getSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // 이미 로그인된 사용자인지 확인
    const checkSession = async () => {
      const session = await getSession();
      if (session) {
        router.push('/');
      }
    };
    checkSession();
  }, [router]);

  const handleGithubLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signIn('github', {
        callbackUrl: '/',
        redirect: false,
      });

      if (result?.ok) {
        router.push('/');
      } else {
        console.error('로그인 실패:', result?.error);
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100'>
      <div className='max-w-md w-full space-y-8 p-8'>
        <div className='text-center'>
          <div className='mx-auto h-20 w-20 relative mb-4'>
            <Image
              src='/images/common/github-logo.png'
              alt='ALOC 로고'
              fill
              className='object-contain'
            />
          </div>
          <h2 className='text-3xl font-bold text-gray-900 mb-2'>
            ALOC에 오신 것을 환영합니다
          </h2>
          <p className='text-gray-600'>깃허브 계정으로 로그인하여 시작하세요</p>
        </div>

        <div className='mt-8 space-y-6'>
          <button
            onClick={handleGithubLogin}
            disabled={isLoading}
            className='group relative w-full flex justify-center py-4 px-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
          >
            {isLoading ? (
              <div className='flex items-center'>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3'></div>
                로그인 중...
              </div>
            ) : (
              <div className='flex items-center'>
                <Image
                  src='/images/common/github-mark-white.svg'
                  alt='GitHub'
                  width={20}
                  height={20}
                  className='mr-3'
                />
                GitHub로 로그인
              </div>
            )}
          </button>

          <div className='text-center'>
            <p className='text-sm text-gray-500'>
              로그인하면 ALOC의 모든 서비스를 이용할 수 있습니다
            </p>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <div className='text-xs text-gray-400'>
            <p>처음 방문하시나요? 깃허브 계정으로 자동 회원가입됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
