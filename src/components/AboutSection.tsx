
import React from 'react';
import { Book, BookOpen, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  return (
    <section 
      id="about" 
      className="py-20 px-6 relative bg-trench/90"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Kitob haqida</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="paper-effect p-8 animate-fade-in">
            <p className="text-lg mb-6">
              <span className="font-typewriter text-primary text-xl">"G'arbiy frontda o'zgarish yo'q"</span> (nemis tilida: Im Westen nichts Neues) - Erix Mariya Remark tomonidan 1929 yilda nashr qilingan roman. Asar birinchi jahon urushi o'z domiga tortgan o'spirinlar obrazi orqali urush dahshatlarini boshidan kechirgan, ruhan ezilgan, jamiyatdan begonalashgan va bolalik orzu-umidlari chilparchin bo'lgan butun bir "yo'qotilgan avlod"ning ayanchli qismati mahorat bilan aks ettirilgan.
            </p>
            <p className="text-lg mb-6">
              Roman Paul Bäumer degan yosh nemis askari haqida hikoya qiladi. U o'qituvchisining gaplari bilan Birinchi jahon urushi boshlanganidan ko'p o'tmay nemis armiyasiga qo'shiladi. Shuningdek asar uning Birinchi jahon urushidagi frontdoshlari haqida ham hikoya qiladi.
            </p>
            <p className="text-lg">
              Bu roman eng kuchli va mashhur urushga qarshi asarlardan biri hisoblanadi, u urushdagi ayanchli hayot va urushning inson qalbini vayron qiluvchi ta'sirini yaqqol ko'rsatib beradi.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8 justify-start">
              <Button 
                className="bg-secondary hover:bg-secondary/80 text-primary font-typewriter flex items-center gap-2"
                onClick={() => window.open('https://mover.uz/watch/9ZEcf9hL', '_blank')}
              >
                <Book size={18} />
                <span>To'liq kino</span>
              </Button>
              <Button 
                className="bg-secondary hover:bg-secondary/80 text-primary font-typewriter flex items-center gap-2"
                onClick={() => window.open('https://youtube.com/playlist?list=PLG9kLRiYLzBoR8z6mLqLIYDGtD91FEIXy&si=9sCHxGnwhGTQzyxm', '_blank')}
              >
                <Volume2 size={18} />
                <span>Romanni tinglar</span>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="relative overflow-hidden rounded-lg shadow-xl border-2 border-trench-light/30 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <img 
                src="/lovable-uploads/2d87fd43-3f9f-4776-ac27-9960be29ea73.png" 
                alt="G'arbiy frontda o'zgarish yo'q kitob muqovasi"
                className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-paper text-xl font-typewriter">"G'arbiy frontda o'zgarish yo'q"</h3>
                </div>
              </div>
            </div>
            
            <div className="paper-effect p-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-4 mb-4">
                <BookOpen className="text-primary" size={28} />
                <h3 className="font-typewriter text-xl">Muallif: Erix Mariya Remark</h3>
              </div>
              <p>
                1898 yilda Germaniyada tug'ilgan Remark 18 yoshida nemis armiyasiga chaqirilgan. Birinchi jahon urushidagi tajribalari uni urushni ulug'lamaslikka undagan va shu ruhda bu ajoyib romanini yozishga ilhomlantirgan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
