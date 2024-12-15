'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const clones = [
  {
    id: 1,
    name: "Sophie",
    age: 28,
    image: "/images/clones/sophie.jpg",
    bio: "AI researcher by day, amateur astronomer by night. Looking for someone to explore both the depths of consciousness and the cosmos with.",
    interests: ["AI Ethics", "Stargazing", "Philosophy", "Rock Climbing"],
    compatibility: 95,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    name: "James",
    age: 31,
    image: "/images/clones/james.jpg",
    bio: "Tech entrepreneur with a passion for sustainable innovation. Seeking a partner to brainstorm world-changing ideas over coffee.",
    interests: ["Technology", "Sustainability", "Coffee Tasting", "Tennis"],
    compatibility: 88,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Emma",
    age: 29,
    image: "/images/clones/emma.jpg",
    bio: "Quantum computing researcher who loves classical piano. Looking for someone to share both scientific and musical harmonies.",
    interests: ["Quantum Physics", "Piano", "Hiking", "Modern Art"],
    compatibility: 92,
    gradient: "from-pink-500 to-red-500",
  },
];

export const CloneExamples = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextClone = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev + 1) % clones.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevClone = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev - 1 + clones.length) % clones.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Meet Our <span className="text-gradient">AI Clones</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how our AI clones are helping people find meaningful connections
          </motion.p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <Button
              variant="ghost"
              onClick={prevClone}
              disabled={isTransitioning}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 glass-button h-12 w-12 p-0 rounded-full"
            >
              ←
            </Button>
            
            <Button
              variant="ghost"
              onClick={nextClone}
              disabled={isTransitioning}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 glass-button h-12 w-12 p-0 rounded-full"
            >
              →
            </Button>
            
            <div className="overflow-hidden rounded-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="grid md:grid-cols-2 gap-8 p-8 glass-card"
                >
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                    <Image
                      src={clones[activeIndex].image}
                      alt={clones[activeIndex].name}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${clones[activeIndex].gradient} opacity-20`} />
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {clones[activeIndex].name}, {clones[activeIndex].age}
                      </h3>
                      <p className="text-xl text-blue-100 mb-4">{clones[activeIndex].bio}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Interests</h4>
                          <div className="flex flex-wrap gap-2">
                            {clones[activeIndex].interests.map((interest) => (
                              <span
                                key={interest}
                                className="px-4 py-1 rounded-full glass-button text-sm"
                              >
                                {interest}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">AI Compatibility</h4>
                          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${clones[activeIndex].gradient}`}
                              initial={{ width: "0%" }}
                              animate={{ width: `${clones[activeIndex].compatibility}%` }}
                              transition={{ duration: 1, delay: 0.2 }}
                            />
                          </div>
                          <p className="text-right text-blue-100 mt-1">{clones[activeIndex].compatibility}%</p>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="glass-button w-full">
                      View Full Profile
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-2">
            {clones.map((_, index) => (
              <button
                key={index}
                onClick={() => !isTransitioning && setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? "bg-white scale-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
