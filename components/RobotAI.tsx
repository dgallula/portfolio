"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Bot, Cpu, Zap, Brain, MessageCircle, Star, Sparkles } from 'lucide-react';

interface RobotAIProps {
  activeSection: string;
}

const RobotAI = ({ activeSection }: RobotAIProps) => {
  const [position, setPosition] = useState({ x: 85, y: 20 });
  const [isWalking, setIsWalking] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [mood, setMood] = useState('ai');
  const [clickCount, setClickCount] = useState(0);
  const [energy, setEnergy] = useState(100);

  // Messages selon les sections avec thème IA
  const sectionMessages: Record<string, string[]> = {
    home: [
      "🤖 Hello! I'm David Gallula's AI Assistant!",
      "💻 3 years Full-Stack experience analyzed!",
      "🚀 AI-passionate developer at your service!",
      "✨ Let's explore this optimized portfolio together!"
    ],
    about: [
      "📊 Analysis: John Bryce → JMD Process journey!",
      "🎯 3 years combined experience detected!",
      "🧠 Continuous ML and Azure training identified!",
      "⚡ AI tools integration confirmed!"
    ],
    skills: [
      "🔍 Stack detected: React, Next.js, Node.js!",
      "💡 Frontend expert, solid backend confirmed!",
      "🛠️ OOP, SOLID, Design Patterns validated!",
      "🎨 From Thunder Client to Lighthouse, complete arsenal!"
    ],
    projects: [
      "🚀 Projects analyzed: AikoSearch, Bon-Voyage...!",
      "💰 From e-commerce to crypto trading detected!",
      "🌟 Each project = technical evolution!",
      "🔥 Diversified portfolio confirmed!"
    ],
    experience: [
      "🏢 Experience scanned: JMD, Freelance, RetraitePlus!",
      "📈 3 years continuous growth analyzed!",
      "🔧 QA, Frontend, Full-Stack mastered!",
      "💼 Professional versatility validated!"
    ],
    languages: [
      "🌍 Languages detected: Hebrew, English, French!",
      "🗣️ International communication optimized!",
      "🎯 Polyglot = multiplied opportunities!",
      "🤝 Global collaboration activated!"
    ],
    contact: [
      "📡 Communication channels open!",
      "🤖 AI ready for new collaborations!",
      "✨ Project initialization in progress...!",
      "🎯 Contact established, mission accomplished!"
    ]
  };

  // Positions selon les sections
  const sectionPositions: Record<string, { x: number; y: number }> = {
    home: { x: 85, y: 20 },
    about: { x: 15, y: 25 },
    skills: { x: 85, y: 35 },
    projects: { x: 15, y: 45 },
    experience: { x: 85, y: 55 },
    languages: { x: 15, y: 65 },
    contact: { x: 50, y: 80 }
  };

  // Déplacement automatique selon la section
  useEffect(() => {
    const newPosition = sectionPositions[activeSection];
    if (newPosition) {
      setPosition(newPosition);
      setIsWalking(true);
      
      // Message automatique
      const messages = sectionMessages[activeSection];
      if (messages) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        setMessage(randomMessage);
        setShowMessage(true);
        
        setTimeout(() => setShowMessage(false), 4000);
      }
      
      setTimeout(() => setIsWalking(false), 1500);
    }
  }, [activeSection]);

  // Clic sur le robot
  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setIsWalking(true);
    setEnergy(prev => Math.min(prev + 15, 100));
    
    // Messages de clic avec thème IA
    const clickMessages = [
      "🤖 System activated! I'm David's AI!",
      "⚡ 3 years Full-Stack experience loaded!",
      "🧠 React, Node.js, MongoDB specialist!",
      "🔄 Click detected, energy recharged!",
      "🚀 Freelance + Salaried = Versatility!",
      "💡 AI Integration: Cursor, Claude mastered!",
      "🎯 Ready for new technical challenges!",
      "✨ Passionate developer since 2022!"
    ];
    
    const randomMessage = clickMessages[Math.floor(Math.random() * clickMessages.length)];
    setMessage(randomMessage);
    setShowMessage(true);
    
    // Déplacement aléatoire
    const newX = Math.random() * 80 + 10;
    const newY = Math.random() * 70 + 15;
    setPosition({ x: newX, y: newY });
    
    // Changement d'humeur IA
    const aiMoods = ['ai', 'processing', 'excited', 'analyzing'];
    setMood(aiMoods[Math.floor(Math.random() * aiMoods.length)]);
    
    setTimeout(() => {
      setIsWalking(false);
      setShowMessage(false);
    }, 3000);
  };

  // Styles selon l'humeur IA
  const moodStyles = {
    ai: {
      color: 'from-blue-500 to-cyan-500',
      icon: Bot,
      eyes: '🤖',
      mouth: '⚡',
      particles: '✨'
    },
    processing: {
      color: 'from-green-500 to-emerald-500',
      icon: Cpu,
      eyes: '💻',
      mouth: '⚙️',
      particles: '🔄'
    },
    excited: {
      color: 'from-purple-500 to-pink-500',
      icon: Zap,
      eyes: '🤩',
      mouth: '🚀',
      particles: '💥'
    },
    analyzing: {
      color: 'from-orange-500 to-red-500',
      icon: Brain,
      eyes: '🔍',
      mouth: '💭',
      particles: '🧠'
    }
  };

  const currentMood = moodStyles[mood as keyof typeof moodStyles];
  const IconComponent = currentMood.icon;

  return (
    <>
      {/* Robot IA */}
      <motion.div
        className="fixed z-50 cursor-pointer select-none"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        animate={{
          scale: isWalking ? [1, 1.1, 1] : [1, 1.05, 1],
          rotate: isWalking ? [0, 5, -5, 0] : 0,
          y: isWalking ? [0, -10, 0] : [0, -5, 0],
        }}
        transition={{
          duration: isWalking ? 0.5 : 2,
          repeat: isWalking ? 2 : Infinity,
          ease: "easeInOut"
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative group">
          {/* Corps du robot */}
          <motion.div 
            className={`w-20 h-20 bg-gradient-to-br ${currentMood.color} rounded-2xl shadow-xl flex items-center justify-center border-2 border-white/30 dark:border-white/20 relative overflow-hidden`}
            animate={{
              boxShadow: [
                "0 5px 20px rgba(59, 130, 246, 0.4)",
                "0 8px 25px rgba(16, 185, 129, 0.5)",
                "0 5px 20px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <IconComponent className="w-10 h-10 text-white" />
            
            {/* Circuits électroniques */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-2 left-2 w-1 h-4 bg-white rounded-full"></div>
              <div className="absolute top-2 right-2 w-1 h-4 bg-white rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-white rounded-full"></div>
            </div>
            
            {/* Yeux et bouche robot */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-2 left-3 text-sm">{currentMood.eyes}</div>
              <div className="absolute top-2 right-3 text-sm">{currentMood.eyes}</div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm">
                {currentMood.mouth}
              </div>
            </div>

            {/* Particules flottantes */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${20 + i * 20}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
          
          {/* Badge "3 ans" avec style IA */}
          <div className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-lg">
            3
          </div>
          
          {/* Badge IA */}
          <div className="absolute -top-2 -left-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-lg">
            AI
          </div>
          
          {/* Barre d'énergie */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-green-400 to-blue-500"
              animate={{ width: `${energy}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* Nom */}
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 dark:bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            David IA Assistant
          </div>
          
          {/* Effet de marche avec particules */}
          {isWalking && (
            <>
              <motion.div
                className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-lg"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5]
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity
                }}
              />
              
              {/* Particules de déplacement */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 left-1/2 w-1 h-1 bg-blue-400 rounded-full"
                  animate={{
                    y: [0, 20, 40],
                    x: [0, -15 + i * 7, -30 + i * 15],
                    scale: [1, 0.5, 0],
                    opacity: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>

      {/* Bulle de message avec style IA */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${Math.min(position.x + 8, 75)}%`,
              top: `${Math.max(position.y - 8, 5)}%`,
            }}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-blue-900 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-blue-200 dark:border-blue-700 max-w-xs">
              <p className="text-sm font-medium text-gray-800 dark:text-white">{message}</p>
              
              {/* Particule flottante */}
              <motion.div
                className="absolute -top-2 -right-2 text-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity
                }}
              >
                {currentMood.particles}
              </motion.div>
              
              {/* Queue de la bulle */}
              <div className="absolute top-full left-6 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-blue-50 dark:border-t-gray-800"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dashboard IA */}
      <motion.div
        className="fixed bottom-4 left-4 z-50 bg-white/90 dark:bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-gray-800 dark:text-white text-sm border border-gray-200 dark:border-white/20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <Bot className="w-4 h-4 text-blue-500" />
            <span className="font-semibold">David IA: {mood}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-3 h-3 text-yellow-500" />
            <div className="w-12 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-blue-500"
                animate={{ width: `${energy}%` }}
              />
            </div>
            <span className="text-xs">{energy}%</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-3 h-3 text-purple-500" />
            <span className="text-xs">Clicks: {clickCount}</span>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default RobotAI;