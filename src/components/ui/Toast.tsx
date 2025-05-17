"use client";

import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  visible: boolean;
  onClose: () => void;
  duration?: number;
};

export default function Toast({
  message,
  type,
  visible,
  onClose,
  duration = 5000,
}: ToastProps) {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setIsLeaving(true);
      }, duration - 500);

      const closeTimer = setTimeout(() => {
        onClose();
        setIsLeaving(false);
      }, duration);

      return () => {
        clearTimeout(timer);
        clearTimeout(closeTimer);
      };
    }
  }, [visible, duration, onClose]);

  if (!visible) return null;

  const getToastStyles = () => {
    switch (type) {
      case "success":
        return "bg-green-50 text-green-800 border-green-500";
      case "error":
        return "bg-red-50 text-red-800 border-red-500";
      case "info":
      default:
        return "bg-blue-50 text-blue-800 border-blue-500";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "success":
        return (
          <svg
            className='w-5 h-5 text-green-500'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
              clipRule='evenodd'
            />
          </svg>
        );
      case "error":
        return (
          <svg
            className='w-5 h-5 text-red-500'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
              clipRule='evenodd'
            />
          </svg>
        );
      case "info":
      default:
        return (
          <svg
            className='w-5 h-5 text-blue-500'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z'
              clipRule='evenodd'
            />
          </svg>
        );
    }
  };

  return (
    <div className='fixed bottom-5 right-5 z-50'>
      <div
        className={`
          max-w-md border-l-4 rounded-md shadow-md px-4 py-3 flex items-center
          ${getToastStyles()}
          transition-all duration-500 ease-in-out transform 
          ${
            isLeaving
              ? "translate-x-full opacity-0"
              : "translate-x-0 opacity-100"
          }
        `}
      >
        <div className='mr-3'>{getIcon()}</div>
        <div className='flex-grow'>
          <p className='font-medium'>{message}</p>
        </div>
        <button
          type='button'
          onClick={onClose}
          className='ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 hover:bg-gray-200 focus:outline-none'
        >
          <span className='sr-only'>Close</span>
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
