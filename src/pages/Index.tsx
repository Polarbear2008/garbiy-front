import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ThemesSection from '@/components/ThemesSection';
import SoldierExperienceSection from '@/components/SoldierExperienceSection';
import Footer from '@/components/Footer';
import EndingScene from '@/components/EndingScene';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "G'arbiy frontda o'zgarish yo'q - Paul Bäumer sayohati";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Smooth scroll for in-page navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.slice(1);
        if (targetId) {
          document.getElementById(targetId)?.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href')?.slice(1);
          if (targetId) {
            document.getElementById(targetId)?.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-trench text-foreground">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ThemesSection />
        <SoldierExperienceSection />
      </main>
      
      <Footer />
      <EndingScene />
    </div>
  );
};

export default Index;
