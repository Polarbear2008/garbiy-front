
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url("/lovable-uploads/f9339616-612b-4c2b-9699-1c6a10cc091a.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={`max-w-4xl text-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="font-typewriter text-paper-light text-xl md:text-2xl mb-3">Erich Maria Remarque asari</h2>
        <h1 className="font-typewriter text-4xl md:text-6xl lg:text-7xl text-paper mb-6">
          G'arbiy frontda o'zgarish yo'q
        </h1>
        <p className="war-quote max-w-3xl mx-auto">
          "Urush paytida hech narsa avvalgidek emas."
        </p>
        <p className="text-primary/90 text-lg md:text-xl mt-6 mb-8 max-w-2xl mx-auto">
          Birinchi jahon urushi transheyalarida omon qolish uchun kurashayotgan yosh nemis askari Paul Bäumerning achinarli qismatini kuzating.
        </p>
        <Button 
          className="bg-blood hover:bg-blood-faded text-primary text-lg px-8 py-6 rounded font-typewriter"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Boshlash
        </Button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <ChevronDown 
          className="text-primary/70 cursor-pointer" 
          size={32} 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        />
      </div>
    </section>
  );
};

export default HeroSection;
