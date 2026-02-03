import React from 'react';
import { motion } from 'framer-motion';

import logoKE from '../assets/partnerkazeng.png';
import logoAselsan from '../assets/partneraselsan.svg';
import logoSSB from '../assets/parnerSSB.png';

const Partners = () => {
  const partners = [
    { 
      id: 1, 
      img: logoKE, 
      name: 'Kazakhstan Engineering', 
      url: 'https://ke.kz/', // Ссылка на КЕ
      bgClass: 'bg-black border-white/10' 
    },
    { 
      id: 2, 
      img: logoAselsan, 
      name: 'Aselsan', 
      url: 'https://www.aselsan.com.tr/en', // Ссылка на Aselsan
      bgClass: 'bg-white border-slate-200' 
    },
    { 
      id: 3, 
      img: logoSSB, 
      name: 'SSB', 
      url: 'https://www.ssb.gov.tr/', // Ссылка на турецкий комитет
      bgClass: 'bg-white border-slate-200' 
    },
  ];

  return (
    <section className="py-16 md:py-24 border-t border-current/5">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-stretch gap-6 md:gap-8">
          {partners.map((partner) => (
            <motion.a // Заменили div на a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }} // Плавный эффект при наведении
              className={`flex items-center justify-center p-8 md:p-12 rounded-3xl border transition-all hover:shadow-2xl cursor-pointer w-full sm:w-72 md:w-85 h-36 md:h-48 ${partner.bgClass}`}
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="max-w-full max-h-full object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;