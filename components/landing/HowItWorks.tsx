'use client';

import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Create Your Clone",
    description: "Answer a few questions about your personality, interests, and communication style",
    icon: "🤖",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    title: "Train Your AI",
    description: "Our advanced AI learns your unique way of communicating and thinking",
    icon: "🧠",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Set Preferences",
    description: "Define what you're looking for in a potential match",
    icon: "⚡️",
    gradient: "from-pink-500 to-red-500",
  },
  {
    title: "AI Goes on Dates",
    description: "Your clone engages in meaningful conversations with potential matches",
    icon: "💬",
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Review Results",
    description: "Get detailed insights and compatibility scores from each interaction",
    icon: "📊",
    gradient: "from-orange-500 to-yellow-500",
  },
];

const Step = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Connection line */}
      {index < steps.length - 1 && (
        <div className="absolute top-1/2 left-[50%] w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent -z-10" />
      )}
      
      <div className="feature-card relative z-10">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.gradient} mb-6 flex items-center justify-center text-3xl`}>
          {step.icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
        <p className="text-blue-100">{step.description}</p>
      </div>
    </motion.div>
  );
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            How It <span className="text-gradient">Works</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Let AI technology revolutionize your dating experience in five simple steps
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
