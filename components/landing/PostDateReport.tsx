'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const insights = [
  {
    label: "Conversation Flow",
    score: 92,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    label: "Shared Interests",
    score: 85,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    label: "Emotional Connection",
    score: 88,
    gradient: "from-pink-500 to-red-500",
  },
  {
    label: "Overall Compatibility",
    score: 89,
    gradient: "from-red-500 to-orange-500",
  },
];

const highlights = [
  "Both passionate about AI and technology",
  "Shared interest in international travel",
  "Similar views on work-life balance",
  "Complementary communication styles",
  "Mutual appreciation for continuous learning",
];

export const PostDateReport = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef} 
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered <span className="text-gradient">Date Analysis</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Get detailed insights and compatibility scores after every interaction
          </motion.p>
        </div>

        <motion.div
          style={{ y, opacity }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Left Column - Compatibility Scores */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Compatibility Analysis
                </h3>
                <div className="space-y-6">
                  {insights.map((insight, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-blue-100">{insight.label}</span>
                        <span className="text-white font-semibold">{insight.score}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${insight.gradient}`}
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${insight.score}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Conversation Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Conversation Highlights
                </h3>
                <div className="space-y-4">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-sm flex-shrink-0">
                        ✓
                      </div>
                      <p className="text-blue-100">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Section - Final Verdict */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 p-6 rounded-xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Final Verdict</h4>
                  <p className="text-blue-100">High potential for a meaningful connection!</p>
                </div>
                <div className="text-4xl">🎯</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
