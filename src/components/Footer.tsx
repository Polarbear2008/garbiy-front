import React from 'react';
import { Book, Github, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-trench-dark py-12 px-4 border-t border-trench-light/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-typewriter text-xl text-primary mb-4">G'arbiy frontda o'zgarish yo'q</h3>
            <p className="text-primary/70">
              Erich Maria Remarquening kuchli urushga qarshi romani, Birinchi jahon urushi paytida G'arbiy frontda jang qilgan yosh nemis askari Paul Bäumerning hayotini kuzatadi.
            </p>
          </div>
          
          <div>
            <h3 className="font-typewriter text-xl text-primary mb-4">Qo'shimcha o'qish</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://namdu.uz/media/Books/pdf/2024/08/02/NamDU-ARM-12607-Garbiy_frontda_ozgarish_yoq.pdf" 
                  className="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Book size={16} />
                  <span>Roman</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtu.be/-YGB4r1DanY?si=RZZxD-tbB5BGz9FK" 
                  className="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>Asar haqida</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://youtu.be/TEeBl4DUWqw?si=inVUip1BPxQ6j84u" 
                  className="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  <span>Film adaptatsiyasi</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-typewriter text-xl text-primary mb-4">Loyiha haqida</h3>
            <p className="text-primary/70 mb-4">
              Bu interaktiv veb-sayt Remarquening klassik urushga qarshi romanidagi obrazlar va mavzularni o'rganishga bag'ishlangan.
            </p>
            <a 
              href="https://github.com" 
              className="text-primary/70 hover:text-primary transition-colors flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={16} />
              <span>GitHub'da ko'rish</span>
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-trench-light/20 text-center">
          <p className="text-primary/50 text-sm mb-4">
            "G'arbiy frontda o'zgarish yo'q" – Erich Maria Remarquening unutilmas romaniga ehtirom. Foydalanilgan tasvirlar faqat ta'lim maqsadida.
          </p>
          <p className="text-primary/50 text-sm">
            Bu veb-sayt
            <a 
              href="https://t.me/Numonov_Samandar" 
              className="text-primary/70 hover:text-primary transition-colors ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Numonov Samandar
            </a>
            tomonidan tayyorlandi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
