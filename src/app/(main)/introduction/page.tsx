'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ActivityLabel,
  activityImageMap,
  activityConfigMap,
} from '@/app/data/introduction';
import Widget from '@/components/Widget';

// GSAP ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

// 상수 정의
const ANIMATION_CONFIG = {
  DURATION: 1.5,
  EASE: 'power2.out',
  SCROLL_DEBOUNCE: 16,
  PROGRESS_STEP: 5,
} as const;

const SCROLL_TRIGGER_CONFIG = {
  START: 'top 80%',
  END: 'bottom 20%',
  TOGGLE_ACTIONS: 'play none none reverse',
} as const;

interface BrowserTabHeaderProps {
  label: string;
  gapClass?: string;
  labelClassName?: string;
}

function BrowserTabHeader({
  label,
  gapClass = 'gap-3',
  labelClassName = 'text-xs',
}: BrowserTabHeaderProps) {
  return (
    <div className='bg-gray-200 px-4 py-2 flex items-center justify-between'>
      <div className={`flex items-center ${gapClass}`}>
        <div className='w-3 h-3 bg-red-400 rounded-full'></div>
        <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
        <div className='w-3 h-3 bg-green-400 rounded-full'></div>
      </div>
      <div className='absolute left-1/2 transform -translate-x-1/2'>
        <span className={`${labelClassName} text-gray-600`}>{label}</span>
      </div>
    </div>
  );
}

// 애니메이션 유틸리티 함수
const createScrollAnimation = (
  element: HTMLElement,
  config: {
    opacity?: number;
    y?: number;
    x?: number;
    rotation?: number;
    duration?: number;
  } = {},
) => {
  const {
    opacity = 1,
    y = 0,
    x = 0,
    rotation = 0,
    duration = ANIMATION_CONFIG.DURATION,
  } = config;

  // 초기 상태 설정
  gsap.set(element, {
    opacity: 0,
    y: 150,
    x: 100,
    rotation: 5,
  });

  // ScrollTrigger 애니메이션
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: element,
      start: SCROLL_TRIGGER_CONFIG.START,
      end: SCROLL_TRIGGER_CONFIG.END,
      toggleActions: SCROLL_TRIGGER_CONFIG.TOGGLE_ACTIONS,
    },
  });

  tl.to(element, {
    opacity,
    y,
    x,
    rotation,
    duration,
    ease: ANIMATION_CONFIG.EASE,
  });

  return tl;
};

export default function Introduction() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrollLocked, setIsScrollLocked] = useState(true);
  const [selectedActivity, setSelectedActivity] =
    useState<ActivityLabel>('지식공유회');
  const [showWidget, setShowWidget] = useState(false);
  const [transitionStage, setTransitionStage] = useState<'idle' | 'out' | 'in'>(
    'idle',
  );
  const [inActive, setInActive] = useState(false);

  const timeoutsRef = useRef<number[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const modalSectionRef = useRef<HTMLDivElement>(null);
  const introSectionRef = useRef<HTMLDivElement>(null);
  const widgetRef = useRef<HTMLDivElement>(null);

  // 알록이란? 섹션 카드들에 대한 ref
  const cardRefs = {
    note: useRef<HTMLDivElement>(null),
    orgChart: useRef<HTMLDivElement>(null),
    centerTab: useRef<HTMLDivElement>(null),
    leftTopTab: useRef<HTMLDivElement>(null),
    mainIntro: useRef<HTMLDivElement>(null),
  };

  const clearAllTimers = useCallback(() => {
    timeoutsRef.current.forEach((id) => window.clearTimeout(id));
    timeoutsRef.current = [];
  }, []);

  const handleSelectActivity = useCallback(
    (next: ActivityLabel) => {
      if (next === selectedActivity) return;

      clearAllTimers();
      setTransitionStage('out');
      setInActive(false);

      const t1 = window.setTimeout(() => {
        setSelectedActivity(next);
        setTransitionStage('in');

        const t2 = window.setTimeout(() => {
          setInActive(true);
        }, 10);
        timeoutsRef.current.push(t2);

        const t3 = window.setTimeout(() => {
          setTransitionStage('idle');
          setInActive(false);
        }, 500);
        timeoutsRef.current.push(t3);
      }, 250);
      timeoutsRef.current.push(t1);
    },
    [selectedActivity, clearAllTimers],
  );

  const getAnimClasses = useCallback(() => {
    const base = 'transition-all duration-500 ease-out will-change-transform';
    if (transitionStage === 'out') return `${base} opacity-0 translate-y-4`;
    if (transitionStage === 'in') {
      return `${base} ${inActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`;
    }
    return `${base} opacity-100 translate-y-0`;
  }, [transitionStage, inActive]);

  // 스크롤 게이지바 처리
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleWheel = (e: WheelEvent) => {
      if (scrollProgress < 100) {
        e.preventDefault();
        const scrollDelta =
          e.deltaY > 0
            ? ANIMATION_CONFIG.PROGRESS_STEP
            : -ANIMATION_CONFIG.PROGRESS_STEP;

        setScrollProgress((prev) => {
          const newProgress = Math.max(0, Math.min(100, prev + scrollDelta));

          if (newProgress >= 100) {
            setTimeout(() => {
              setIsScrollLocked(false);
              document.body.style.overflow = 'auto';
            }, 1000);
          }

          return newProgress;
        });
      }
    };

    const preventScroll = (e: Event) => {
      if (scrollProgress < 100) {
        e.preventDefault();
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (scrollProgress < 100) {
        e.preventDefault();
      }
    };

    if (isScrollLocked) {
      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('scroll', preventScroll, { passive: false });
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', preventScroll);
      window.removeEventListener('touchmove', handleTouchMove);
      document.body.style.overflow = 'auto';
    };
  }, [scrollProgress, isScrollLocked]);

  // 모달 섹션 애니메이션
  useEffect(() => {
    if (!modalSectionRef.current) return;

    const tl = createScrollAnimation(modalSectionRef.current);

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Widget 표시 제어
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!introSectionRef.current) return;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const rect = introSectionRef.current?.getBoundingClientRect();
        if (!rect) return;

        const windowHeight = window.innerHeight;
        const isAtBottom =
          window.scrollY + windowHeight >=
          document.documentElement.scrollHeight - 10;

        if (rect.top <= windowHeight * 0.8 && !isAtBottom) {
          setShowWidget(true);
        } else {
          setShowWidget(false);
        }
      }, ANIMATION_CONFIG.SCROLL_DEBOUNCE);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Widget 애니메이션
  useEffect(() => {
    if (!widgetRef.current) return;

    gsap.killTweensOf(widgetRef.current);

    if (showWidget) {
      gsap.to(widgetRef.current, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
        onStart: () => {
          if (widgetRef.current) {
            widgetRef.current.style.visibility = 'visible';
          }
        },
      });
    } else {
      gsap.to(widgetRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.8,
        duration: 0.4,
        ease: 'power2.in',
        onComplete: () => {
          if (widgetRef.current && !showWidget) {
            widgetRef.current.style.visibility = 'hidden';
          }
        },
      });
    }
  }, [showWidget]);

  // 배경색 변화 애니메이션
  useEffect(() => {
    if (!backgroundRef.current) return;

    backgroundRef.current.style.backgroundColor = 'rgb(0, 0, 0)';

    const initialTimer = setTimeout(() => {
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
      }
    }, 10);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: backgroundRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const blackToWhite = Math.round(1500 * progress);
          const backgroundColor = `rgb(${blackToWhite}, ${blackToWhite}, ${blackToWhite})`;

          if (backgroundRef.current) {
            backgroundRef.current.style.backgroundColor = backgroundColor;
          }
        },
        onEnter: () => {
          if (backgroundRef.current) {
            backgroundRef.current.style.backgroundColor = 'rgb(0, 0, 0)';
          }
        },
        onLeave: () => {
          if (backgroundRef.current) {
            backgroundRef.current.style.backgroundColor = 'rgb(255, 255, 255)';
          }
        },
      },
    });

    return () => {
      clearTimeout(initialTimer);
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (backgroundRef.current) {
        backgroundRef.current.style.backgroundColor = '';
      }
    };
  }, []);

  // 알록이란? 섹션 카드들 애니메이션
  useEffect(() => {
    const cardElements = Object.values(cardRefs)
      .map((ref) => ref.current)
      .filter(Boolean);
    if (cardElements.length === 0) return;

    // 초기 상태 설정
    gsap.set(cardElements, {
      opacity: 0,
      x: 100,
      y: 50,
      rotation: 5,
    });

    // 순차적 애니메이션
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardElements[0],
        start: SCROLL_TRIGGER_CONFIG.START,
        end: SCROLL_TRIGGER_CONFIG.END,
        toggleActions: SCROLL_TRIGGER_CONFIG.TOGGLE_ACTIONS,
      },
    });

    cardElements.forEach((element, index) => {
      tl.to(
        element,
        {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 1,
          ease: ANIMATION_CONFIG.EASE,
        },
        index === 0 ? 0 : '-=0.5',
      );
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className='min-h-screen min-w-screen bg-white'>
      {/* 게이지바 섹션 */}
      <div
        ref={backgroundRef}
        className='bg-black pb-50'
        style={{ backgroundColor: 'rgb(0, 0, 0)' }}
      >
        <div className='flex flex-col items-center justify-center px-4 min-h-screen'>
          <div className='z-10 flex flex-col items-center justify-center relative'>
            {/* 스크롤 안내 */}
            <div
              className={`mt-36 transition-all duration-1500 ease-in-out ${
                scrollProgress >= 100 ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className='w-full h-64 mb-16 relative'>
                <Image
                  src='/images/introduction/aloc-logo.png'
                  alt='ALOC'
                  fill
                  className='object-contain'
                  priority
                />
              </div>
              <div
                className={`z-20 transition-all duration-1000 ease-in-out ${
                  scrollProgress >= 100
                    ? 'opacity-0 pointer-events-none'
                    : 'opacity-100'
                }`}
              >
                <div className='w-72 md:w-96 h-4 bg-gray-600 rounded-full overflow-hidden'>
                  <div
                    className='h-full bg-white transition-all duration-300 ease-out'
                    style={{ width: `${scrollProgress}%` }}
                  />
                </div>
              </div>
              <div className='text-center text-white mt-8 animate-bounce'>
                <p className='text-sm text-gray-400 mb-2'>
                  스크롤하여 계속하기
                </p>
                <div className='w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center'>
                  <div className='w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse'></div>
                </div>
              </div>
            </div>
            {/* 동아리 소개 메인 텍스트 */}
            <div
              className={`transition-all duration-1500 ease-in-out text-center text-white max-w-2xl mx-auto absolute ${
                scrollProgress === 100
                  ? 'opacity-100 transform translate-y-0'
                  : 'opacity-0 transform translate-y-[40px]'
              }`}
            >
              <h1 className='text-[120px] font-bold mb-6'>ALOC</h1>
              <p className='text-[20px] text-white leading-relaxed'>
                서울시립대학교 컴퓨터과학부 학술 소모임
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 알록이란? 섹션 */}
      <div className='flex justify-center -mt-50'>
        <div
          ref={introSectionRef}
          id='intro-section'
          className='relative min-h-[1080px] w-[1440px] scale-[0.8] z-20'
        >
          {/* 1. 노트 스타일 카드 (우상단) */}
          <div
            ref={cardRefs.note}
            className='absolute top-[61px] right-[106px] w-[389px] h-[224px] bg-yellow-50 rounded-xl shadow-lg border-l-4 border-yellow-400'
          >
            <div className='bg-yellow-100 rounded-lg p-6 h-full'>
              <h3 className='text-2xl font-medium text-gray-800 mb-4'>
                <span className='text-blue-600'>A</span>
                <span className='text-blue-600'>L</span>
                <span className='text-blue-600'>O</span>
                <span className='text-blue-600'>C</span>,{' '}
                <span className='text-blue-600'>A</span>
                <span className='text-black'>ll </span>
                <span className='text-blue-600'>L</span>
                <span className='text-black'>inked </span>
                <span className='text-blue-600'>O</span>
                <span className='text-black'>ne </span>
                <span className='text-blue-600'>C</span>
                <span className='text-black'>ode</span>. 하나의 연결된~
              </h3>
            </div>
          </div>

          {/* 2. 조직도 스타일 카드 (좌하단) */}
          <div
            ref={cardRefs.orgChart}
            className='absolute bottom-[93px] left-[67px] w-[511px] h-[320px]'
          >
            <div className='inset-0 p-5 w-[346px] h-[298px] grid grid-rows-3 bg-gray-100 rounded-xl shadow-lg'>
              {(() => {
                const orgData = [
                  {
                    items: [
                      {
                        text: 'Univ Of Seoul',
                        className: 'text-xl font-small tracking-tight',
                      },
                      {
                        text: 'Computer Science',
                        className: 'text-xl font-small tracking-tight',
                      },
                    ],
                    containerClass:
                      'grid grid-rows-2 mx-3 border-b-2 border-gray-300',
                  },
                  {
                    items: [
                      {
                        text: 'ALOC',
                        className: 'text-xl font-small tracking-tight',
                      },
                      {
                        text: 'All Linked One Code',
                        className: 'text-xl font-small tracking-tight',
                      },
                    ],
                    containerClass:
                      'grid grid-rows-2 mx-3 border-b-2 border-gray-300',
                  },
                  {
                    items: [
                      {
                        text: 'Activity',
                        className:
                          'text-xl text-white font-small tracking-tight',
                        itemClass: 'bg-blue-500 rounded-2xl p-3 my-1',
                      },
                      {
                        text: 'All Linked One Code',
                        className: 'text-xl font-small tracking-tight',
                      },
                    ],
                    containerClass: 'grid grid-rows-2',
                  },
                ];

                return orgData.map((section, sectionIndex) => (
                  <div key={sectionIndex} className={section.containerClass}>
                    {section.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex items-center justify-between ${item.itemClass || ''}`}
                      >
                        <span className={item.className}>{item.text}</span>
                        <div className='w-4 h-4'>
                          <Image
                            src='/images/members/arrow-right.svg'
                            alt='arrow-right'
                            width={8}
                            height={8}
                            className='object-contain'
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                ));
              })()}
            </div>

            <div className='absolute w-[173px] h-[129px] bottom-0 right-0 bg-gray-100 rounded-xl shadow-lg p-3'>
              <div className='grid grid-cols-1 gap-2'>
                <span className='text-xl font-small tracking-tight'>Study</span>
                <span className='text-xl font-small tracking-tight'>
                  Project
                </span>
                <span className='text-xl font-small tracking-tight'>
                  Networking
                </span>
              </div>
            </div>
          </div>

          {/* 3. 중앙 탭 */}
          <div
            ref={cardRefs.centerTab}
            className='absolute top-[166px] left-[310px] z-10'
          >
            <div className='w-[794px] h-[649px] bg-gray-100 rounded-xl overflow-hidden shadow-lg'>
              <BrowserTabHeader label='ALOC' />
              <div className='h-full flex items-center justify-center'>
                <Image
                  src='/images/introduction/알록이란2.png'
                  alt='ALOC 소개'
                  width={794}
                  height={649}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>

          {/* 4. 좌 상단 탭 */}
          <div
            ref={cardRefs.leftTopTab}
            className='absolute top-[30px] left-[75px] w-[299px] h-[290px] bg-gray-100 rounded-xl overflow-hidden shadow-lg z-20'
          >
            <BrowserTabHeader
              label='ALOC'
              gapClass='gap-2'
              labelClassName='text-xs'
            />
            <div className='h-full flex items-center justify-center'>
              <Image
                src='/images/introduction/알록이란1.png'
                alt='Study'
                width={299}
                height={290}
                className='w-full h-full object-cover'
              />
            </div>
          </div>

          {/* 5. 메인 소개 카드 (우하단) */}
          <div
            ref={cardRefs.mainIntro}
            className='absolute bottom-[59px] right-[200px] w-[335px] h-[520px] bg-gray-100 rounded-3xl p-8 shadow-lg overflow-hidden z-40'
          >
            <div className='absolute top-4 right-4'>
              <button className='w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-black text-sm hover:bg-gray-400 transition-colors'>
                ?
              </button>
            </div>
            <div className='relative z-10 flex flex-col items-center text-center h-full'>
              <div className='w-28 h-28 rounded-full overflow-hidden shadow-md flex-shrink-0 mb-6'>
                <Image
                  src='/images/introduction/aloc-logo.png'
                  alt='ALOC Logo'
                  width={112}
                  height={112}
                  className='object-cover'
                />
              </div>

              <div className='mb-8'>
                <h2 className='text-4xl font-bold text-black mb-4'>ALOC</h2>
                <p className='text-base text-gray-600 leading-relaxed'>
                  ALOC은 서울시립대학교 컴퓨터과학부
                  <br />
                  학술 소모임입니다.
                  <br />
                  함께 성장하는 개발 문화를 만듭니다.
                </p>
              </div>

              <div className='w-full space-y-3'>
                <button className='w-full bg-gradient-to-b from-blue-500 to-blue-600 text-white px-8 py-2 rounded-4xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-md'>
                  가입하기!
                </button>
                <button className='w-full bg-gray-300 text-black px-8 py-2 rounded-4xl font-medium hover:bg-gray-400 transition-all duration-300'>
                  재밌겠다!
                </button>
              </div>

              <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 flex items-center gap-2'>
                <input type='checkbox' id='dontAsk' className='w-4 h-4' />
                <label htmlFor='dontAsk' className='text-sm text-gray-600'>
                  다시 묻지 않기
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Widget 컴포넌트 */}
      <Widget
        ref={widgetRef}
        style={{
          visibility: 'hidden',
          background: 'rgba(240, 240, 240, 0.8)',
        }}
      />

      {/* 무엇을 하나요?(모달) 섹션 */}
      <div className='relative py-20 flex justify-center'>
        <div id='modal-section' className='relative py-20 scale-[0.6]'>
          <div className='mx-auto px-4'>
            <div className='w-[769px] h-[460px] mx-auto flex flex-col justify-center items-center'>
              <div
                ref={modalSectionRef}
                className='w-full h-full bg-gray-200 rounded-3xl shadow-lg relative overflow-hidden'
              >
                <div className='text-center w-full h-[329px] flex flex-col justify-center items-center'>
                  <h2 className='text-6xl font-bold text-black mb-6'>
                    Activity
                  </h2>
                  <p className='text-4xl text-black'>
                    ALOC에서는 무엇을 하나요?
                  </p>
                </div>
                <div className='border-t-4 border-gray-300'></div>
                <div className='flex flex-row w-full h-[131px]'>
                  <div className='basis-1/2 border-r-4 border-gray-300 flex justify-center items-center'>
                    <span className='text-4xl text-blue-500'>options</span>
                  </div>
                  <div className='basis-1/2 flex justify-center items-center'>
                    <span className='text-4xl text-blue-500'>close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 알록의 활동 섹션 */}
      <div className='relative py-20 flex justify-center'>
        <div className='relative pb-20 scale-[0.7]'>
          <div className='mx-auto px-4'>
            <div className='w-[1440px] mx-auto h-[950px]'>
              {/* 활동 폴더들 */}
              {(() => {
                const activityCards = [
                  { label: '지식공유회' },
                  { label: '스터디/프로젝트' },
                  { label: '네트워킹' },
                ] as const;

                return (
                  <div className='absolute left-[0px] top-[214px] w-[289px] flex flex-col items-center gap-[80px]'>
                    {activityCards.map((card, index) => (
                      <button
                        key={index}
                        type='button'
                        onClick={() =>
                          handleSelectActivity(card.label as ActivityLabel)
                        }
                        className='group cursor-pointer flex flex-col items-center gap-2 focus:outline-none'
                      >
                        <div
                          className={`relative w-[189px] h-[155px] transition-transform duration-200 ease-out ${
                            selectedActivity === card.label
                              ? 'scale-105'
                              : 'scale-[0.8]'
                          } group-hover:scale-105`}
                        >
                          <Image
                            src='/images/introduction/folder.svg'
                            alt='folder'
                            fill
                            className='object-cover'
                          />
                        </div>
                        <div
                          className={`text-[30px] text-center transition-[font-weight] duration-150 ${
                            selectedActivity === card.label
                              ? 'text-blue-600 font-bold'
                              : 'text-black'
                          } group-hover:font-bold`}
                        >
                          {card.label}
                        </div>
                      </button>
                    ))}
                  </div>
                );
              })()}

              {/* 메모 탭 */}
              <div
                className={`${activityConfigMap[selectedActivity].memoTab.positionClass} w-[676px] h-[425px] bg-yellow-200 rounded-lg shadow-lg ${getAnimClasses()}`}
              >
                <div className='w-full h-[29px] bg-yellow-300 rounded-t-lg flex items-center px-3'>
                  <div className='flex items-center gap-1'>
                    <div className='w-[19px] h-[18px] bg-yellow-200 border-2 border-yellow-600 rounded'></div>
                  </div>
                  <div className='flex-1'></div>
                </div>
                <div className='w-full h-[396px] bg-yellow-100 p-6'>
                  <p className='text-[30px] leading-[1.33] tracking-[-3.33%] text-gray-800'>
                    {activityConfigMap[selectedActivity].memoTab.content}
                  </p>
                </div>
              </div>

              {/* 중앙 사진 탭 */}
              <div
                className={`${activityConfigMap[selectedActivity].centralPhotoTab.positionClass}`}
              >
                <div
                  className={`w-[748px] h-[584px] bg-gray-100 rounded-xl overflow-hidden shadow-lg ${getAnimClasses()}`}
                >
                  <div className='bg-gray-200 px-4 py-2 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <div className='w-3 h-3 bg-red-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-yellow-400 rounded-full'></div>
                      <div className='w-3 h-3 bg-green-400 rounded-full'></div>
                    </div>
                    <div className='absolute left-1/2 transform -translate-x-1/2'>
                      <span className='text-m text-gray-600'>
                        {
                          activityConfigMap[selectedActivity].centralPhotoTab
                            .headerText
                        }
                      </span>
                    </div>
                  </div>
                  <div className='h-full flex items-center justify-center'>
                    <Image
                      src={activityImageMap[selectedActivity]}
                      alt={selectedActivity}
                      width={748}
                      height={584}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
              </div>

              {/* 우측 하단 알림 카드 */}
              <div
                className={`${activityConfigMap[selectedActivity].alertCard.positionClass} shadow-lg w-[521px] h-[312px] bg-gray-200 rounded-[24px] flex justify-center relative ${getAnimClasses()}`}
              >
                <div className='absolute top-[41px] left-[201px] w-[132px] h-[132px]'>
                  <Image
                    src='/images/introduction/alert.png'
                    alt='alert'
                    width={132}
                    height={132}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='absolute top-[165px] text-[24px] text-black text-center'>
                  {activityConfigMap[selectedActivity].alertCard.text}
                </div>
                <Link
                  href={activityConfigMap[selectedActivity].alertCard.link}
                  className='absolute top-[219px] left-[37px] w-[461px] h-[48px] bg-gradient-to-b from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-[16px] flex items-center justify-center cursor-pointer transition-all duration-200'
                >
                  <span className='text-[24px] text-white'>더보기</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-black text-white py-12 px-8'>
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center mb-6 md:mb-0'>
            <div className='w-12 h-12 mr-4'>
              <Image
                src='/images/introduction/aloc-logo.png'
                alt='ALOC Logo'
                width={48}
                height={48}
                className='object-contain'
              />
            </div>
            <div>
              <h3 className='text-xl font-bold text-white mb-1'>ALOC</h3>
              <p className='text-gray-400 text-sm'>All Linked One Code</p>
              <p className='text-gray-400 text-xs'>
                서울시립대학교 컴퓨터과학부 학술 소모임
              </p>
            </div>
          </div>

          <div className='flex flex-col items-end'>
            <div className='flex space-x-4 mb-4'>
              <a
                href='https://github.com/orgs/ALOC-dev/dashboard'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors'
                aria-label='GitHub'
              >
                <Image
                  src='/images/common/github-mark-white.svg'
                  alt='GitHub'
                  width={20}
                  height={20}
                  className='object-contain'
                />
              </a>
              <a
                href='https://notion.so'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors'
                aria-label='Notion'
              >
                <Image
                  src='/images/common/notion-logo.png'
                  alt='Notion'
                  width={20}
                  height={20}
                  className='object-contain'
                />
              </a>
              <a
                href='mailto:aloc@uos.ac.kr'
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors'
                aria-label='Email'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors'
                aria-label='More'
              >
                <svg
                  className='w-5 h-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 10C13.1 10 14 10.9 14 12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10ZM12 18C13.1 18 14 18.9 14 20C14 21.1 13.1 22 12 22C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18Z' />
                </svg>
              </a>
            </div>
            <p className='text-gray-400 text-sm'>
              © ALOC 2025. Made in Seoul.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
