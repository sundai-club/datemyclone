'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="min-h-screen modern-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/20"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: Math.random() * 5 + 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Skip the <span className="text-gradient">Small Talk</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-xl mx-auto lg:mx-0">
              Let your AI clone handle the first date while you focus on what matters
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="glass-button text-lg px-8 py-6"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="glass-button text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-full aspect-square max-w-xl mx-auto">
              <Image
                src="/images/hero-illustration.png"
                alt="AI Dating Assistant"
                fill
                className="object-contain animate-float"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div 
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "10K+", label: "Active Users" },
            { number: "95%", label: "Match Rate" },
            { number: "4.9/5", label: "User Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-4xl font-bold text-white mb-2">{stat.number}</h3>
              <p className="text-blue-100">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
