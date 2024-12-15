'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const CallToAction = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random values only once after mounting
  const backgroundElements = mounted ? Array.from({ length: 30 }).map(() => ({
    width: Math.random() * 200 + 50,
    height: Math.random() * 200 + 50,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    yOffset: Math.random() * 100 - 50,
    duration: Math.random() * 5 + 5,
  })) : [];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          {mounted && backgroundElements.map((elem, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
              style={{
                width: elem.width,
                height: elem.height,
                left: elem.left,
                top: elem.top,
                opacity: 0.1,
              }}
              animate={{
                y: [0, elem.yOffset],
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: elem.duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-12 text-center relative overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Ready to Skip the <br />
                <span className="text-gradient">Small Talk?</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of users who are revolutionizing their dating experience with AI
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="glass-button text-lg px-8 py-6 group"
                  onClick={() => router.push('/register')}
                >
                  <span className="mr-2">Get Started</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-button text-lg px-8 py-6"
                  onClick={() => router.push('/demo')}
                >
                  View Demo
                </Button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { label: "Active Users", value: "10,000+" },
                  { label: "Success Rate", value: "95%" },
                  { label: "AI Accuracy", value: "99.9%" },
                  { label: "User Rating", value: "4.9/5" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
