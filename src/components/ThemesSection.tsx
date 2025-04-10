
import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "Bu kitob aybnoma ham, afvnoma ham emas. Bu shunchaki urush dastidan juvonmarg bo'lgan avlod haqidagi, garchi zambarak o'qidan omon qolsa-da, shu urushning qurboniga aylanganlar to'g'risidagi ko'ngil izhoridir",
    context: "Romanning dastlabki satrlarida, kelgusi urushning qattiq, hech qanday murosasiz tasvirlanishiga ruhiy tayyorgarlik ko'rilgan."
  },
  {
    text: "Biz endi yoshlar emasmiz. Biz dunyoni bo'ron bilan zabt etishni istamaymiz. Biz o'zimizdan, hayotimizdan qochmoqdamiz. Biz o'n sakkiz yoshda edik va hayotni, dunyoni sevishni boshlagandik; va biz uni parchalashga majbur edik.",
    context: "Paul o'zi va do'stlari boshidan kechirgan ma'sumlik va yoshlikning yo'qolishi haqida mulohaza yuritadi."
  },
  {
    text: "Taqdirga tan berib qo'yganingda barcha azoblarga chidash mumkin, lekin ular haqida hadeb o'y sursang, bu o'ylar seni adoyi tamom qiladi.",
    context: ""
  },
  {
    text: "O'tmishni qumsash, xuddi general bo'lishni orzu qilishday, besamara xayolparastlik.",
    context: ""
  },
  {
    text: "Zaminning qadrini hech kim askarchalik bilmaydi. O'lim vahimasi uni chalpak qilib tuproqqa qapishtirib tashlaganda yer askar uchun yakka-yu yagona do'st, og'a va onaga aylanadi. Askar butun vujudi bilan zaminga yopishib, yuz va lablarini tuproqqa surtib, yuragidagi qo'rquv, dard hamda iztiroblarni ana shu sodiq va tilsiz homiysiga aytadi — yer uni quchog'iga oladi, keyin o'n daqiqaga yana bag'ridan bo'shatadi, askar o'n daqiqa chopib o'tishi, o'n daqiqa yashab qolishi uchun bo'shatadi, so'ng tag'in ko'ksidan joy beradi, ba'zan mangu joy beradi...",
    context: ""
  }
];

interface ThemeCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ThemeCard: React.FC<ThemeCardProps> = ({ title, description, icon }) => {
  return (
    <div className="paper-effect p-6 animate-fade-in hover:bg-paper/20 transition-colors duration-300">
      <div className="flex items-center gap-3 mb-3">
        {icon}
        <h3 className="font-typewriter text-xl text-primary">{title}</h3>
      </div>
      <p className="text-paper-light/90">{description}</p>
    </div>
  );
};

const ThemesSection = () => {
  const [activeQuote, setActiveQuote] = useState(quotes[0]);
  
  return (
    <section 
      id="themes" 
      className="py-20 px-6 relative bg-trench-dark/90"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-heading">Urushning Shafqatsizligi</h2>
        
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div>
            <p className="text-lg mb-6">
              "G'arbiy frontda o'zgarish yo'q" urushning haqiqiy tabiati va uning inson ruhiyatiga ta'sirini ochib beradigan bir necha kuchli mavzularni o'rganadi. Paul Bäumerning sayohati orqali o'quvchilar guvohi bo'lishadi:
            </p>
            
            <div className="grid gap-4 mt-8">
              <ThemeCard 
                title="Hissiyotlarning yo'qolishi" 
                description="Maktabni endi bitirib chiqqan yosh askarlar urushning ayanchli oqibatlariga to'qnash kelishadi. Xursandchilik va shodliklaridan asar ham qolmaydi."
                icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">1</div>}
              />
              
              <ThemeCard 
                title="Jarohat" 
                description="Jangning vayron qiluvchi ta'siri, shu jumladan jangdagi turli jarohatlar, qo'rqinchli voqealar va fuqarolik hayotiga qayta qo'shila olmaslik."
                icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">2</div>}
              />
              
              <ThemeCard 
                title="Do'stlik" 
                description="Hattoki urush paytlarida ham biriga yordam beradigan va bir-birini tushuna oladigan askarlar o'rtasida shakllangan munosabatlar."
                icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">3</div>}
              />
            </div>
          </div>
          
          <div>
            <div className="relative h-full paper-effect p-8 flex flex-col justify-center">
              <Quote className="text-primary/30 absolute top-4 left-4" size={32} />
              <div className="mb-6">
                <p className="war-quote">{activeQuote.text}</p>
                {activeQuote.context && <p className="text-paper-dark/80 italic text-sm">{activeQuote.context}</p>}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {quotes.map((quote, index) => (
                  <button 
                    key={index}
                    className={`w-4 h-4 rounded-full transition-colors ${activeQuote === quote ? 'bg-blood' : 'bg-trench-light hover:bg-blood/60'}`}
                    onClick={() => setActiveQuote(quote)}
                    aria-label={`${index + 1}-iqtibosni ko'rish`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ThemeCard 
            title="Urushning befoydaligi" 
            description="Roman jang va millatchilikni ulug'lashga qarshi chiqib, urush orqali nimaga erishilishini chindan ham so'roq ostiga oladi."
            icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">4</div>}
          />
          
          <ThemeCard 
            title="Insoniylikning yo'qolishi" 
            description="Urush askarlarni shunchaki qurolga aylantirib, ularni hissiyot va insoniylikni yo'q qilish."
            icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">5</div>}
          />
          
          <ThemeCard 
            title="Uzoqlashish" 
            description="Askarlar va fuqorolik hayoti o'rtasida katta uzilish va askarlarning uyga qaytishi imkonsiz ekanligini tushunib yetishgan."
            icon={<div className="w-10 h-10 rounded-full bg-military flex items-center justify-center">6</div>}
          />
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
