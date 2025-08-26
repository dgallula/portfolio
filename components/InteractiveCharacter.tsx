"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  User, Code, Briefcase, MessageSquare, Globe, Award, 
  Sparkles, Coffee, Lightbulb, Heart, Zap, Star,
  Brain, Target, Rocket
} from 'lucide-react';

interface InteractiveCharacterProps {
  mousePosition: { x: number; y: number };
  activeSection: string;
}

const InteractiveCharacter = ({ mousePosition, activeSection }: InteractiveCharacterProps) => {
  const [characterPosition, setCharacterPosition] = useState({ x: 20, y: 20 });
  const [isClicked, setIsClicked] = useState(false);
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [isWalking, setIsWalking] = useState(false);
  const [mood, setMood] = useState('happy');
  const [energy, setEnergy] = useState(100);
  const [visitedSections, setVisitedSections] = useState<Set<string>>(new Set());

  const sectionMessages: Record<string, string[]> = {
    home: [
      "Salut ! 👋 Je suis David, votre guide personnel !",
      "Bienvenue dans mon univers de développement ! 🚀",
      "Clique-moi pour explorer ensemble mes compétences ! ✨",
      "Prêt à découvrir 3 ans d'expérience passionnante ? 💻"
    ],
    about: [
      "🎓 De John Bryce College à JMD Process, quel parcours !",
      "💡 3 ans d'expérience entre freelance et salariat !",
      "🌟 J'adore intégrer les outils IA dans mes workflows !",
      "📚 Toujours en apprentissage : Python, Azure, Java..."
    ],
    skills: [
      "💻 React, Next.js, Node.js... Ma stack préférée !",
      "⚡ Frontend expert, backend solide, cloud en cours !",
      "🔥 OOP, SOLID, Design Patterns... J'aime la qualité !",
      "🛠️ De Thunder Client à Lighthouse, je maîtrise mes outils !"
    ],
    projects: [
      "🚀 AikoSearch : L'IA au service de la recherche !",
      "🌍 Bon-Voyage.com : Voyagez l'esprit tranquille !",
      "₿ Crypto-Bite : Le trading Bitcoin en temps réel !",
      "🛒 ShoppingONLINE : E-commerce moderne et efficace !"
    ],
    experience: [
      "🏢 JMD Process : L'IA Search avec Next.js et Azure !",
      "💼 Freelance : 3 projets majeurs en Node.js !",
      "🔍 RetraitePlus : 100+ sites testés, CRM optimisé !",
      "📈 Chaque mission m'a fait grandir techniquement !"
    ],
    languages: [
      "🇫🇷 Français natif, 🇺🇸 Anglais technique fluide !",
      "🇮🇱 Hébreu professionnel, communication sans limite !",
      "🌍 3 langues = 3x plus d'opportunités !",
      "💬 La polyglotte, un atout pour les équipes internationales !"
    ],
    contact: [
      "📧 Contactons-nous, j'ai hâte de collaborer !",
      "🤝 Toujours ouvert aux nouvelles opportunités !",
      "✨ Ensemble, créons quelque chose d'exceptionnel !",
      "🎯 Votre prochain projet commence par un simple message !"
    ]
  };

  const sectionIcons: Record<string, any> = {
    home: Sparkles,
    about: User,
    skills: Code,
    projects: Briefcase,
    experience: Award,
    languages: Globe,
    contact: MessageSquare
  };

  const characterPersonalities = {
    happy: { 
      eyes: '😊', 
      mouth: '🙂', 
      color: 'from-blue-500 to-emerald-500',
      particles: '✨'
    },
    excited: { 
      eyes: '🤩', 
      mouth: '😄', 
      color: 'from-yellow-500 to-orange-500',
      particles: '🔥'
    },
    thinking: { 
      eyes: '🤔', 
      mouth: '💭', 
      color: 'from-purple-500 to-indigo-500',
      particles: '💡'
    },
    coding: { 
      eyes: '💻', 
      mouth: '⌨️', 
      color: 'from-green-500 to-blue-500',
      particles: '⚡'
    },
    energetic: {
      eyes: '⚡',
      mouth: '🚀',
      color: 'from-red-500 to-pink-500',
      particles: '💥'
    }
  };

  const moods = ['happy', 'excited', 'thinking', 'coding', 'energetic'];

  // Track section visits
  useEffect(() => {
    if (!visitedSections.has(activeSection)) {
      setVisitedSections(prev => new Set([...prev, activeSection]));
      
      // Character gets more excited when discovering new sections
      if (visitedSections.size > 0) {
        setMood('excited');
        setEnergy(prev => Math.min(prev + 10, 100));
      }
    }
  }, [activeSection, visitedSections]);

  // Auto section messages
  useEffect(() => {
    if (sectionMessages[activeSection]) {
      const messages = sectionMessages[activeSection];
      const randomMessage = messages[Math.floor(Math.random() * messages.length)];
      setMessage(randomMessage);
      setShowMessage(true);
      
      // Auto move character when section changes
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'languages', 'contact'];
      const sectionIndex = sections.indexOf(activeSection);
      if (sectionIndex !== -1) {
        const newY = 15 + (sectionIndex * 12);
        setCharacterPosition(prev => ({ ...prev, y: newY }));
        setIsWalking(true);
        setTimeout(() => setIsWalking(false), 1500);
      }
      
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [activeSection]);

  // Auto mood and energy changes
  useEffect(() => {
    const moodTimer = setInterval(() => {
      setMood(moods[Math.floor(Math.random() * moods.length)]);
      setEnergy(prev => Math.max(prev - 2, 20));
    }, 10000);

    return () => clearInterval(moodTimer);
  }, []);

  const handleCharacterClick = () => {
    setIsClicked(true);
    setIsWalking(true);
    setShowMessage(true);
    setEnergy(prev => Math.min(prev + 20, 100));
    
    // Enhanced movement with more personality
    const newX = Math.random() * 70 + 15;
    const newY = Math.random() * 70 + 15;
    
    setCharacterPosition({ x: newX, y: newY });

    const clickMessages = [
      "🎉 Merci ! Tu viens de me donner de l'énergie !",
      "🚀 Explorons mon portfolio ensemble !",
      "👋 Salut ! Que veux-tu découvrir sur moi ?",
      "💻 Développeur jour et nuit à ton service !",
      "☕ Café + Code = David Evenou !",
      "✨ Clique-moi encore, j'adore bouger !",
      "🎯 Chaque clic me rend plus énergique !",
      "🤖 Mode interactif activé ! Que fait-on ?",
    ];
    
    setMessage(clickMessages[Math.floor(Math.random() * clickMessages.length)]);
    setMood('excited');

    setTimeout(() => {
      setIsClicked(false);
      setIsWalking(false);
    }, 1200);

    setTimeout(() => {
      setShowMessage(false);
    }, 4000);
  };

  const navigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Enhanced navigation animation
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'languages', 'contact'];
      const sectionIndex = sections.indexOf(sectionId);
      const newY = 15 + (sectionIndex * 12);
      
      setCharacterPosition({ x: 25, y: newY });
      setIsWalking(true);
      setMood('energetic');
      
      setTimeout(() => {
        setIsWalking(false);
      }, 1500);
    }
  };

  const personality = characterPersonalities[mood as keyof typeof characterPersonalities];
  const IconComponent = sectionIcons[activeSection] || Sparkles;

  return (
    <>
      {/* Enhanced Interactive Character */}
      <motion.div
        className="fixed z-50 cursor-pointer select-none"
        style={{
          left: `${characterPosition.x}%`,
          top: `${characterPosition.y}%`,
        }}
        animate={{
          scale: isClicked ? 1.4 : 1,
          rotate: isClicked ? [0, 20, -20, 0] : isWalking ? [0, 5, -5, 0] : 0,
          y: isWalking ? [0, -15, 0] : [0, -8, 0],
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          y: {
            duration: isWalking ? 0.6 : 3,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
        onClick={handleCharacterClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.85 }}
      >
        <div className="relative group">
          {/* Enhanced Character Body */}
          <motion.div 
            className={`w-24 h-24 bg-gradient-to-br ${personality.color} rounded-full shadow-2xl flex items-center justify-center border-4 border-white/30 relative overflow-hidden`}
            animate={{
              boxShadow: [
                "0 10px 40px rgba(59, 130, 246, 0.4)",
                "0 15px 50px rgba(16, 185, 129, 0.5)",
                "0 10px 40px rgba(168, 85, 247, 0.4)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <IconComponent className="w-12 h-12 text-white animate-pulse" />
            
            {/* Enhanced particle effects */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-3 h-3 rounded-full`}
                style={{
                  top: `${20 + Math.sin(i) * 40}%`,
                  left: `${20 + Math.cos(i) * 40}%`,
                  background: `linear-gradient(45deg, ${['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B'][i]})`
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              />
            ))}
          </motion.div>
          
          {/* Character Face Details */}
          <div className="absolute inset-0 flex items-center justify-center text-2xl pointer-events-none">
            <div className="absolute top-2 left-3 text-lg">{personality.eyes}</div>
            <div className="absolute top-2 right-3 text-lg">{personality.eyes}</div>
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-lg">
              {personality.mouth}
            </div>
          </div>
          
          {/* Energy Bar */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              animate={{ width: `${energy}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          
          {/* Floating Particles */}
          <motion.div
            className="absolute -top-3 -right-3 text-xl"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {personality.particles}
          </motion.div>
          
          {/* Enhanced Navigation Menu */}
          <motion.div
            className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex space-x-2 bg-black/90 backdrop-blur-md rounded-xl p-3 shadow-2xl border border-white/20">
              {['home', 'about', 'skills', 'projects', 'experience', 'languages', 'contact'].map((section, index) => {
                const SectionIcon = sectionIcons[section];
                const isVisited = visitedSections.has(section);
                
                return (
                  <motion.button
                    key={section}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateToSection(section);
                    }}
                    className={`w-10 h-10 ${
                      isVisited ? 'bg-green-500/30 border-green-400' : 'bg-white/20 border-white/30'
                    } hover:bg-white/40 rounded-full flex items-center justify-center text-white border transition-all duration-300 group/btn`}
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <SectionIcon className="w-5 h-5 group-hover/btn:text-blue-300" />
                    {isVisited && (
                      <motion.div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Trail Effect */}
          {isWalking && (
            <>
              <motion.div
                className="absolute inset-0 w-24 h-24 bg-gradient-to-r from-blue-500/30 to-emerald-500/30 rounded-full blur-lg"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.8, 0, 0.8]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
              />
              
              {/* Footstep particles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0 left-1/2 w-2 h-2 bg-white/60 rounded-full"
                  animate={{
                    y: [0, 20, 40],
                    x: [0, -10 + i * 10, -20 + i * 20],
                    scale: [1, 0.5, 0],
                    opacity: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </>
          )}
        </div>
      </motion.div>

      {/* Enhanced Message Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: `${Math.min(characterPosition.x + 12, 80)}%`,
              top: `${Math.max(characterPosition.y - 12, 5)}%`,
            }}
            initial={{ opacity: 0, scale: 0.6, y: 30, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: -30, rotate: 5 }}
            transition={{ duration: 0.5, ease: "backOut" }}
          >
            <motion.div 
              className="relative bg-gradient-to-br from-white/95 to-blue-50/95 backdrop-blur-md rounded-3xl px-6 py-4 shadow-2xl border border-white/40 max-w-sm"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <p className="text-sm font-semibold text-gray-800 leading-relaxed">{message}</p>
              
              {/* Enhanced tail with gradient */}
              <div className="absolute top-full left-10 w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-white/95"></div>
              
              {/* Animated reaction emojis */}
              <motion.div
                className="absolute -top-3 -right-3 text-lg"
                animate={{
                  y: [0, -15, -25],
                  opacity: [1, 0.8, 0],
                  scale: [1, 1.3, 0.8],
                  rotate: [0, 15, -15]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2
                }}
              >
                {personality.particles}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Character Status Dashboard */}
      <motion.div
        className="fixed bottom-4 right-4 z-50 bg-black/70 backdrop-blur-md rounded-xl px-4 py-3 text-white text-xs border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
      >
        <div className="space-y-2">
          {/* Status */}
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${personality.color} animate-pulse`}></div>
            <span className="font-semibold">David Assistant: {mood}</span>
          </div>
          
          {/* Energy */}
          <div className="flex items-center space-x-2">
            <Zap className="w-3 h-3 text-yellow-400" />
            <div className="w-16 h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                animate={{ width: `${energy}%` }}
              />
            </div>
            <span className="text-xs">{energy}%</span>
          </div>
          
          {/* Sections Visited */}
          <div className="flex items-center space-x-2">
            <Target className="w-3 h-3 text-blue-400" />
            <span>{visitedSections.size}/7 sections explorées</span>
            {visitedSections.size === 7 && (
              <Star className="w-3 h-3 text-yellow-400 fill-current animate-pulse" />
            )}
          </div>
        </div>
      </motion.div>

      {/* Achievement Notifications */}
      <AnimatePresence>
        {visitedSections.size === 7 && (
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl border-4 border-white/30">
              <div className="flex items-center space-x-3">
                <Star className="w-8 h-8 fill-current" />
                <div>
                  <h3 className="text-xl font-bold">Bravo ! 🎉</h3>
                  <p className="text-sm">Tu as exploré tout mon portfolio !</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default InteractiveCharacter;