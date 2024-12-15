'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const clones = [
  {
    name: "Sophie",
    age: 28,
    occupation: "Tech Entrepreneur",
    interests: ["AI & Tech", "Yoga", "Travel", "Photography"],
    bio: "Passionate about building the future with AI. Love exploring new places and capturing moments through my lens.",
    compatibility: 95,
    image: "/images/clones/sophie.jpg",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "James",
    age: 32,
    occupation: "Data Scientist",
    interests: ["Machine Learning", "Rock Climbing", "Music", "Coffee"],
    bio: "Using data to solve real-world problems. When not coding, you'll find me scaling walls or brewing the perfect cup.",
    compatibility: 88,
    image: "/images/clones/james.jpg",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emma",
    age: 26,
    occupation: "UX Designer",
    interests: ["Art", "Hiking", "Food", "Psychology"],
    bio: "Creating beautiful, user-centered experiences. Believer in mindfulness and the power of good design.",
    compatibility: 92,
    image: "/images/clones/emma.jpg",
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
                      <p className="text-xl text-blue-100 mb-4">{clones[activeIndex].occupation}</p>
                      <p className="text-blue-100 mb-6">{clones[activeIndex].bio}</p>
                      
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
