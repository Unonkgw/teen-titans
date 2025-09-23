import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Teen_Titans_-_logo_(English).png';

function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const loadingMessages = [
    "🏗️ Initializing Titans Tower...",
    "🦸‍♂️ Assembling the team...",
    "⚡ Charging Cyborg's systems...",
    "🔮 Calibrating Raven's portals...",
    "🌟 Powering up Starfire's energy...",
    "🦎 Loading Beast Boy's forms...",
    "🏹 Preparing Robin's arsenal...",
    "✨ Titans Tower ready!"
  ];

  const heroIcons = ['🦸‍♂️', '👑', '🔮', '🦎', '🤖'];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        // Update message based on progress
        const messageIndex = Math.floor(newProgress / 12.5);
        if (messageIndex < loadingMessages.length) {
          setCurrentMessage(messageIndex);
        }
        
        if (newProgress >= 100) {
          clearInterval(interval);
          // Wait a bit then fade out
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              onLoadingComplete();
            }, 500);
          }, 800);
          return 100;
        }
        
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete, loadingMessages.length]);

  if (!isVisible) {
    return (
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          background: 'var(--bg-primary)',
          zIndex: 9999,
          opacity: 0,
          transition: 'opacity 0.5s ease-out',
          pointerEvents: 'none'
        }}
      />
    );
  }

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-out'
      }}
    >
      {/* Animated Background Particles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: `var(--tt-${['cyan', 'purple', 'orange', 'green', 'red'][i % 5]})`,
              borderRadius: '50%',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Main Loading Content */}
      <div style={{
        textAlign: 'center',
        position: 'relative',
        zIndex: 2
      }}>
        {/* Animated Logo */}
        <div style={{
          position: 'relative',
          marginBottom: 'var(--space-3xl)'
        }}>
          <img 
            src={logo} 
            alt="Teen Titans Logo"
            style={{
              width: '200px',
              height: 'auto',
              animation: 'logoSpin 3s ease-in-out infinite',
              filter: 'drop-shadow(0 0 30px rgba(0, 172, 238, 0.5))'
            }}
          />
          
          {/* Pulsing Ring */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '250px',
            height: '250px',
            border: '2px solid var(--tt-cyan)',
            borderRadius: '50%',
            animation: 'pulse 2s ease-in-out infinite',
            opacity: 0.3
          }} />
          
          {/* Rotating Hero Icons */}
          {heroIcons.map((icon, index) => (
            <div
              key={index}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '40px',
                height: '40px',
                fontSize: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: `translate(-50%, -50%) rotate(${index * 72}deg) translateY(-120px)`,
                animation: `rotateHeroes 4s linear infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Loading Message */}
        <div style={{
          marginBottom: 'var(--space-2xl)',
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <h2 style={{
            color: 'var(--text-primary)',
            fontSize: '1.5rem',
            fontFamily: 'var(--font-display)',
            margin: 0,
            animation: 'slideInUp 0.5s ease-out',
            key: currentMessage // Force re-render for animation
          }}>
            {loadingMessages[currentMessage]}
          </h2>
        </div>

        {/* Progress Bar */}
        <div style={{
          width: '400px',
          maxWidth: '80vw',
          height: '8px',
          background: 'var(--glass-light)',
          borderRadius: 'var(--radius-full)',
          overflow: 'hidden',
          position: 'relative',
          marginBottom: 'var(--space-lg)'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, var(--tt-cyan) 0%, var(--tt-purple) 50%, var(--tt-orange) 100%)',
            borderRadius: 'var(--radius-full)',
            transition: 'width 0.3s ease-out',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Shimmer effect */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
              animation: 'shimmer 1.5s infinite'
            }} />
          </div>
        </div>

        {/* Progress Percentage */}
        <div style={{
          color: 'var(--text-secondary)',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          fontFamily: 'var(--font-mono, monospace)'
        }}>
          {Math.round(progress)}%
        </div>
      </div>

      {/* Custom Keyframes */}
      <style jsx>{`
        @keyframes logoSpin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes rotateHeroes {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateY(-120px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateY(-120px) rotate(-360deg); }
        }
        
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @media (max-width: 768px) {
          .loading-logo {
            width: 150px;
          }
          .loading-message {
            font-size: 1.2rem;
          }
          .progress-bar {
            width: 300px;
          }
        }
      `}</style>
    </div>
  );
}

export default LoadingScreen;
