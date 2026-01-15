'use client';

import { useState, useRef } from 'react';
import { IoMdArrowForward, IoMdArrowBack } from 'react-icons/io';

interface Hobby {
  emoji: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
}

const hobbies: Hobby[] = [
  {
    emoji: '🎮',
    title: 'Gaming',
    description: 'I enjoy various games that challenge my strategic thinking',
    gradient: 'from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800',
    borderColor: 'border-blue-200 dark:border-blue-700',
  },
  {
    emoji: '📚',
    title: 'Reading',
    description: 'Exploring different genres from fiction to tech articles',
    gradient: 'from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800',
    borderColor: 'border-purple-200 dark:border-purple-700',
  },
  {
    emoji: '🎵',
    title: 'Music',
    description: 'Listening to various genres and discovering new artists',
    gradient: 'from-pink-50 to-pink-100 dark:from-pink-900 dark:to-pink-800',
    borderColor: 'border-pink-200 dark:border-pink-700',
  },
  {
    emoji: '🚴',
    title: 'Sports',
    description: 'Staying active with cycling and other physical activities',
    gradient: 'from-green-50 to-green-100 dark:from-green-900 dark:to-green-800',
    borderColor: 'border-green-200 dark:border-green-700',
  },
  {
    emoji: '✈️',
    title: 'Traveling',
    description: 'Exploring new places and experiencing different cultures',
    gradient: 'from-yellow-50 to-yellow-100 dark:from-yellow-900 dark:to-yellow-800',
    borderColor: 'border-yellow-200 dark:border-yellow-700',
  },
  {
    emoji: '📸',
    title: 'Photography',
    description: 'Capturing moments and expressing creativity visually',
    gradient: 'from-indigo-50 to-indigo-100 dark:from-indigo-900 dark:to-indigo-800',
    borderColor: 'border-indigo-200 dark:border-indigo-700',
  },
];

export function HobbiesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400; // pixels to scroll
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Button */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
        aria-label="Scroll left"
      >
        <IoMdArrowBack size={24} />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-20 py-8 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-80 p-8 rounded-lg bg-gradient-to-br ${hobby.gradient} border ${hobby.borderColor} text-center hover:shadow-lg transition-all duration-300 min-h-72 flex flex-col justify-center`}
          >
            <div className="text-6xl mb-6 animate-fadeInUp">
              {hobby.emoji}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
              {hobby.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {hobby.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white transition-all duration-300 hover:scale-110 flex items-center justify-center shadow-lg"
        aria-label="Scroll right"
      >
        <IoMdArrowForward size={24} />
      </button>
    </div>
  );
}

