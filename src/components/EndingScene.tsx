import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const EndingScene = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [hasReachedBottom, setHasReachedBottom] = useState(false);
  
  const endingTexts = [
    "Paul Baymer  1899-1928",
    "U 1918-yilning oktabr oyida halok bo'ldi. Urush tugashiga atigi bir oy qolgan edi.",
    "O'sha kun tinchgina o'tgan, g'alati sukunat hukm surgan edi. Frontda hech qanday hujum bo'lmagan.",
    "Ofitserlar hisobotga faqat bir so'z yozishdi: 'G'arbiy frontda o'zgarish yo'q…'"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Check if scrolling down to the bottom
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setHasReachedBottom(true);
      } else {
        setHasReachedBottom(false);
      }
      
      // Show ending scene only when at bottom
      if (hasReachedBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setTextIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasReachedBottom]);

  useEffect(() => {
    if (isVisible && textIndex < endingTexts.length) {
      const timer = setTimeout(() => {
        setTextIndex(prev => prev + 1);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, textIndex]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black transition-opacity duration-1000 z-50">
      <div className="max-w-2xl mx-auto h-full flex flex-col items-center justify-center px-4 sm:px-6">
        {endingTexts.map((text, index) => (
          <p
            key={index}
            className={cn(
              "text-paper text-center font-typewriter mb-6 sm:mb-8 transition-opacity duration-1000",
              index === 0 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
              index <= textIndex ? "opacity-100" : "opacity-0"
            )}
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default EndingScene;
