import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ArtifactProps {
  id: string;
  name: string;
  image: string;
  description: string;
}

const artifacts: ArtifactProps[] = [
  {
    id: 'helmet',
    name: 'Askar dubulg\'asi',
    image: '/images/askar-dubulgasi.jpg',
    description: 'Dubulg\'alarimiz biz uchun boshqa hamma narsadan ham muhimroq bo\'lib qoldi. Ular bizni o\'lim bilan bizning oramizdagi yagona narsa edi. Menikinidagi o\'yiqlar va tirnalishlar so\'zlar ifoda qila olmaydigan hikoyalarni so\'zlaydi.'
  },
  {
    id: 'boots',
    name: 'Harbiy etiklar',
    image: '/images/harbiy-etiklar.jpg',
    description: 'Kemmerichning etiklari. Butun kompaniyadagi eng yaxshi etiklar. U menga ularni birinchi ko\'rsatganda qanchalik hasad qilganimni eslayman. Endi u o\'ldi, va men uning etiklariga qarab, keyingi kim ularni kiyishini o\'ylab turibman.'
  },
  {
    id: 'letters',
    name: 'Uydan kelgan xatlar',
    image: '/images/uydan-kelgan-xatlar.jpg',
    description: 'Uydan kelgan xatlar meni xursand qilishi kerak, lekin ular yuragimni battar ezadi. Har bir satrda onamning sog\'inchini, otamning umidini, do\'stlarimning sog\' bo\'lishimni tilagan duolarini his qilaman. Ammo ular meni tushunmaydi...'
  },
  {
    id: 'food',
    name: 'Oziq-ovqat ulushi',
    image: '/images/oziq-ovqat-ulushi.jpg',
    description: 'Urush maydonida har bir bo\'lak non, har bir chelak sho\'rva – bu g\'alaba. Bu yerda ovqat nafaqat tanani, balki ruhni ham saqlab qoladi. Ovqat bor joyda, kulgi bor. Ovqat bor joyda, ozgina bo\'lsa ham, hayot bor.'
  }
];

const SoldierExperienceSection = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<ArtifactProps | null>(null);
  
  return (
    <section 
      id="experience" 
      className="py-20 px-6 relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/images/background.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Paul Baymer</h2>
        
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="paper-effect p-8 animate-fade-in">
            <p className="text-lg mb-6">
              Paul Baymer 19 yoshida Birinchi jahon urushi paytida G'arbiy frontda jang qilish uchun yuborilgan yosh nemis askari. Ko'pchilik tengdoshlari singari, Paul ham vatanparvarlik ruhi va urush ajoyib tasavvurlarga to'lib, o'qituvchisining nuqtlarida ilhomlangan holda armiyaga yozildi
            </p>
            <p className="text-lg mb-6">
              Keyingi voqealar uning barcha orzularini o'zgartirib yubordi. Urush haqida yaxshi xissiyotlarining o'rnini frontdagi urushning ayanchli haqiqatlari almashdi: o'limning doimiy tahdidi, chidab bo'lmas sharoitlar va yaqin do'stlarining birin-ketin halok bo'lishini ko'rish unga kuchli zarba bo'ldi.
            </p>
            <p className="text-lg">
              Paulning sodda maktab o'quvchisidan tajribali askarga aylanish yo'li orqali Remark urushning asl yuzini ochib beradi - bu ulug'vor sarguzasht emas, balki omon qolganlarni butunlay o'zgartirib yuboradigan insoniylikdan uzoqlashtiruvchi qurilma.
            </p>
            
            <div className="mt-10">
              <h3 className="font-typewriter text-xl text-primary mb-4">Paulning shaxsiy buyumlarini o'rganing</h3>
              <p className="text-sm text-paper-dark/80 mb-4">Paulning fikrlarini o'qish uchun biror buyumga bosing</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {artifacts.map(artifact => (
                  <button
                    key={artifact.id}
                    className={cn(
                      "aspect-square rounded-md overflow-hidden border-2 transition-all relative",
                      selectedArtifact?.id === artifact.id 
                        ? "border-blood scale-105 shadow-lg" 
                        : "border-trench-light hover:border-blood/50"
                    )}
                    onClick={() => setSelectedArtifact(artifact)}
                    aria-label={`${artifact.name}ni ko'rish`}
                  >
                    <img 
                      src={artifact.image} 
                      alt={artifact.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity hover:opacity-0">
                      <span className="font-typewriter text-primary text-sm">{artifact.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="h-full">
            {selectedArtifact ? (
              <div className="paper-effect p-6 h-full flex flex-col animate-fade-in">
                <div className="rounded-md overflow-hidden mb-6 max-h-[300px]">
                  <img 
                    src={selectedArtifact.image} 
                    alt={selectedArtifact.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-typewriter text-2xl text-primary mb-4">{selectedArtifact.name}</h3>
                <p className="war-quote flex-grow">{selectedArtifact.description}</p>
                <button 
                  className="mt-6 self-end text-primary/70 hover:text-primary font-typewriter text-sm transition-colors"
                  onClick={() => setSelectedArtifact(null)}
                >
                  Yopish
                </button>
              </div>
            ) : (
              <div className="paper-effect p-8 h-full">
                <div className="relative h-[600px] mb-6">
                  <img 
                    src="/images/soldier-default.jpg" 
                    alt="Paul Baymer"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-black/40">
                    <p className="font-typewriter text-xl text-center text-paper">
                      Paulning fikrlarini ko'rish uchun uning buyumlaridan birini tanlang
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoldierExperienceSection;
