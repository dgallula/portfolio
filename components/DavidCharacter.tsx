"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Code, Coffee, Laptop, Zap, MessageCircle, Star } from 'lucide-react';

interface DavidCharacterProps {
  activeSection: string;
}

const DavidCharacter = ({ activeSection }: DavidCharacterProps) => {
  const [position, setPosition] = useState({ x: 85, y: 20 });
  const [isWalking, setIsWalking] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [mood, setMood] = useState('coding');
  const [clickCount, setClickCount] = useState(0);

  // Messages selon les sections
  const sectionMessages: Record<string, string[]> = {
    home: [
      "Salut ! Je suis David Gallula 👋",
      "3 ans d'expérience en Full-Stack !",
      "Développeur passionné à votre service !",
      "Explorons mon portfolio ensemble !"
    ],
    about: [
      "Mon parcours de John Bryce à aujourd'hui !",
      "3 ans entre freelance et salariat 💼",
      "Toujours en apprentissage continu 📚"
    ],
    skills: [
      "React, Next.js, Node.js... Ma stack ! 💻",
      "Frontend expert, backend solide !",
      "J'adore les nouveaux défis techniques !"
    ],
    projects: [
      "Mes projets : AikoSearch, Bon-Voyage... 🚀",
      "Du e-commerce au crypto trading !",
      "Chaque projet m'a fait grandir !"
    ],
    experience: [
      "JMD Process, Freelance, RetraitePlus... 🏢",
      "3 ans d'expérience variée !",
      "QA, Frontend, Full-Stack !"
    ],
    languages: [
      "Hébreu, Anglais, Français ! 🌍",
      "Communication internationale !",
      "Polyglotte = plus d'opportunités !"
    ],
    contact: [
      "Contactez-moi pour collaborer ! 📧",
      "Toujours ouvert aux projets !",
      "Créons quelque chose ensemble !"
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

  // Clic sur le personnage
  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setIsWalking(true);
    
    // Messages de clic
    const clickMessages = [
      "Hey ! Tu m'as cliqué ! 😄",
      "Je suis David, développeur Full-Stack !",
      "3 ans d'expérience et toujours motivé !",
      "Clique encore, j'adore bouger !",
      "React, Node.js, MongoDB... Ma passion !",
      "Freelance ou salarié, je m'adapte !",
      "Prêt pour de nouveaux défis !",
      "Développeur passionné depuis 2022 !"
    ];
    
    const randomMessage = clickMessages[Math.floor(Math.random() * clickMessages.length)];
    setMessage(randomMessage);
    setShowMessage(true);
    
    // Déplacement aléatoire
    const newX = Math.random() * 80 + 10;
    const newY = Math.random() * 70 + 15;
    setPosition({ x: newX, y: newY });
    
    // Changement d'humeur
    const moods = ['coding', 'happy', 'excited', 'thinking'];
    setMood(moods[Math.floor(Math.random() * moods.length)]);
    
    setTimeout(() => {
      setIsWalking(false);
      setShowMessage(false);
    }, 3000);
  };

  // Styles selon l'humeur
  const moodStyles = {
    coding: {
      color: 'from-green-500 to-blue-500',
      icon: Code,
      eyes: '💻',
      mouth: '⌨️'
    },
    happy: {
      color: 'from-yellow-500 to-orange-500',
      icon: Star,
      eyes: '😊',
      mouth: '😄'
    },
    excited: {
      color: 'from-purple-500 to-pink-500',
      icon: Zap,
      eyes: '🤩',
      mouth: '🚀'
    },
    thinking: {
      color: 'from-indigo-500 to-purple-500',
      icon: Coffee,
      eyes: '🤔',
      mouth: '💭'
    }
  };

  const currentMood = moodStyles[mood as keyof typeof moodStyles];
  const IconComponent = currentMood.icon;

  return (
    <>
      {/* Personnage David */}
      <motion.div
        className="fixed z-50 cursor-pointer select-none"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
        animate={{
          scale: isWalking ? [1, 1.1, 1] : 1,
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
          {/* Corps du personnage */}
          <motion.div 
            className={`w-16 h-16 bg-gradient-to-br ${currentMood.color} rounded-full shadow-lg flex items-center justify-center border-2 border-white/30 relative`}
            animate={{
              boxShadow: [
                "0 5px 20px rgba(59, 130, 246, 0.3)",
                "0 8px 25px rgba(16, 185, 129, 0.4)",
                "0 5px 20px rgba(168, 85, 247, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <IconComponent className="w-8 h-8 text-white" />
            
            {/* Yeux et bouche */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute top-1 left-2 text-xs">{currentMood.eyes}</div>
              <div className="absolute top-1 right-2 text-xs">{currentMood.eyes}</div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs">
                {currentMood.mouth}
              </div>
            </div>
          </motion.div>
          
          {/* Badge "3 ans" */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            3
          </div>
          
          {/* Nom */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            David Gallula
          </div>
          
          {/* Effet de marche */}
          {isWalking && (
            <motion.div
              className="absolute inset-0 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full blur-lg"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity
              }}
            />
          )}
        </div>
      </motion.div>

      {/* Bulle de message */}
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
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl border border-gray-200 max-w-xs">
              <p className="text-sm font-medium text-gray-800">{message}</p>
              
              {/* Queue de la bulle */}
              <div className="absolute top-full left-6 w-0 h-0 border-l-6 border-r-6 border-t-8 border-l-transparent border-r-transparent border-t-white/95"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compteur de clics */}
      {clickCount > 0 && (
        <motion.div
          className="fixed bottom-4 left-4 z-50 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="flex items-center space-x-2">
            <MessageCircle className="w-4 h-4" />
            <span>Clics sur David: {clickCount}</span>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default DavidCharacter;