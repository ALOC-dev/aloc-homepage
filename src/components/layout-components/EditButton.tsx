'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface EditButtonProps {
  title?: string;
  fields?: Array<{
    name: string;
    label: string;
    type: 'text' | 'select';
    options?: Array<{ value: string; label: string }>;
    placeholder?: string;
  }>;
  onSave?: (data: Record<string, string>) => void;
  className?: string;
}

export function EditButton({
  title = '정보 수정',
  fields = [],
  onSave,
  className = 'w-[80px] h-[32px] bg-orange-500 text-white rounded-md text-[14px] font-medium hover:bg-orange-600 transition-colors cursor-pointer flex items-center justify-center',
}: EditButtonProps) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave(formData);
    }
    setIsEditModalOpen(false);
    setFormData({});
  };

  const handleCancel = () => {
    setIsEditModalOpen(false);
    setFormData({});
  };

  return (
    <>
      {/* 수정하기 버튼 */}
      <button
        type='button'
        onClick={() => setIsEditModalOpen(true)}
        className={className}
      >
        <Image
          src='/images/common/edit.svg'
          alt='수정'
          width={16}
          height={16}
          className='mr-1'
        />
        수정하기
      </button>

      {/* 수정하기 모달 */}
      {isEditModalOpen && (
        <div className='absolute inset-0 bg-gray-500 bg-opacity-20 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-[400px] max-w-[90vw] max-h-[80vh] overflow-y-auto'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-[20px] font-bold text-text-primary'>
                {title}
              </h2>
              <button
                type='button'
                onClick={handleCancel}
                className='w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </button>
            </div>

            <div className='space-y-4'>
              {fields.map((field) => (
                <div key={field.name}>
                  <label className='block text-[14px] font-medium text-text-secondary mb-2'>
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      className='w-full h-[40px] px-3 border border-border-gray rounded-md text-[14px] outline-none focus:border-brand-blue'
                      value={formData[field.name] || ''}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                    >
                      <option value=''>
                        {field.placeholder || '선택하세요'}
                      </option>
                      {field.options?.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type='text'
                      className='w-full h-[40px] px-3 border border-border-gray rounded-md text-[14px] outline-none focus:border-brand-blue'
                      placeholder={field.placeholder || '입력하세요'}
                      value={formData[field.name] || ''}
                      onChange={(e) =>
                        handleInputChange(field.name, e.target.value)
                      }
                    />
                  )}
                </div>
              ))}
            </div>

            <div className='flex gap-3 mt-6'>
              <button
                type='button'
                onClick={handleCancel}
                className='flex-1 h-[40px] border border-border-gray text-text-secondary rounded-md text-[14px] font-medium hover:bg-gray-50 transition-colors'
              >
                취소
              </button>
              <button
                type='button'
                onClick={handleSave}
                className='flex-1 h-[40px] bg-orange-500 text-white rounded-md text-[14px] font-medium hover:bg-orange-600 transition-colors'
              >
                수정 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
