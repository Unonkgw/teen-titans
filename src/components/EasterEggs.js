import React, { useEffect, useState } from 'react';

function EasterEggs() {
  const [konamiSequence, setKonamiSequence] = useState([]);
  const [isKonamiActive, setIsKonamiActive] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);
  const [showSecretMessage, setShowSecretMessage] = useState(false);

  // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
  ];

  useEffect(() => {
    // Konami Code Easter Egg
    const handleKeyPress = (e) => {
      const newSequence = [...konamiSequence, e.code];
      
      if (newSequence.length > konamiCode.length) {
        newSequence.shift();
      }
      
      setKonamiSequence(newSequence);
      
      if (JSON.stringify(newSequence) === JSON.stringify(konamiCode)) {
        activateKonamiMode();
        setKonamiSequence([]);
      }
    };

    // Type "titans" Easter Egg
    let typedSequence = '';
    const handleKeyDown = (e) => {
      typedSequence += e.key.toLowerCase();
      
      if (typedSequence.length > 6) {
        typedSequence = typedSequence.slice(-6);
      }
      
      if (typedSequence === 'titans') {
        activateTitansMode();
        typedSequence = '';
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [konamiSequence]);

  // Logo Click Counter Easter Egg
  useEffect(() => {
    const handleLogoClick = (e) => {
      if (e.target.alt === 'Teen Titans Logo') {
        setLogoClickCount(prev => {
          const newCount = prev + 1;
          if (newCount === 5) {
            activateLogoMode();
            return 0; // Reset counter
          }
          return newCount;
        });
      }
    };

    document.addEventListener('click', handleLogoClick);
    return () => document.removeEventListener('click', handleLogoClick);
  }, []);

  // Developer Console Messages
  useEffect(() => {
    const messages = [
      '%c🦸‍♂️ Welcome to Titans Tower! 🦸‍♀️',
      'color: #00ACEE; font-size: 20px; font-weight: bold;'
    ];
    
    console.log(...messages);
    
    console.log(
      '%c⚡ EASTER EGGS AVAILABLE ⚡\n' +
      '🎮 Try the Konami Code: ↑↑↓↓←→←→BA\n' +
      '⌨️  Type "titans" anywhere on the page\n' +
      '🖱️  Click the logo 5 times quickly\n' +
      '🎨 Use the theme switcher in the top right\n' +
      '🔐 Try logging in as any hero!',
      'color: #32CD32; font-size: 14px; line-height: 1.5;'
    );
    
    console.log(
      '%c🛠️ Built with React + CSS Magic ✨\n' +
      'Made with ❤️ for Teen Titans fans!',
      'color: #FF6B35; font-size: 12px;'
    );
  }, []);

  const activateKonamiMode = () => {
    setIsKonamiActive(true);
    
    // Create rainbow effect
    document.body.style.animation = 'rainbow 2s ease-in-out infinite';
    
    // Show celebration message
    showCelebrationMessage('🎮 KONAMI CODE ACTIVATED! 🎮', 'Ultimate cheat mode enabled!');
    
    // Reset after 10 seconds
    setTimeout(() => {
      setIsKonamiActive(false);
      document.body.style.animation = '';
    }, 10000);
  };

  const activateTitansMode = () => {
    // Create floating "TITANS!" text
    showCelebrationMessage('⚡ TITANS ASSEMBLE! ⚡', 'Team spirit activated!');
    
    // Add screen shake effect
    document.body.style.animation = 'shake 1s ease-in-out';
    
    setTimeout(() => {
      document.body.style.animation = '';
    }, 1000);
  };

  const activateLogoMode = () => {
    showCelebrationMessage('🏢 TOWER POWER! 🏢', 'You found the secret!');
    
    // Make all logos spin
    const logos = document.querySelectorAll('img[alt*="Teen Titans"]');
    logos.forEach(logo => {
      logo.style.animation = 'spin 3s linear';
      setTimeout(() => {
        logo.style.animation = '';
      }, 3000);
    });
  };

  const showCelebrationMessage = (title, subtitle) => {
    setShowSecretMessage(true);
    
    // Auto-hide after 4 seconds
    setTimeout(() => {
      setShowSecretMessage(false);
    }, 4000);
  };

  return (
    <>
      {/* Secret Message Overlay */}
      {showSecretMessage && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          background: 'linear-gradient(135deg, var(--tt-cyan) 0%, var(--tt-purple) 100%)',
          color: 'white',
          padding: 'var(--space-2xl)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          animation: 'bounceIn 0.8s ease-out',
          border: '3px solid var(--tt-yellow)'
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '2rem',
            fontFamily: 'var(--font-display)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            🎉 EASTER EGG FOUND! 🎉
          </h2>
          <p style={{ 
            margin: 'var(--space-md) 0 0 0', 
            fontSize: '1.2rem',
            opacity: 0.9
          }}>
            You discovered a secret feature!
          </p>
        </div>
      )}

      {/* Konami Mode Effects */}
      {isKonamiActive && (
        <div style={{
          position: 'fixed',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 9999,
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          padding: 'var(--space-lg)',
          borderRadius: 'var(--radius-full)',
          border: '2px solid var(--tt-yellow)',
          animation: 'pulse 1s ease-in-out infinite'
        }}>
          <div style={{
            color: 'var(--tt-yellow)',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textAlign: 'center',
            fontFamily: 'var(--font-display)'
          }}>
            🌈 RAINBOW MODE ACTIVE 🌈
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes bounceIn {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.3);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.05);
          }
          70% {
            transform: translate(-50%, -50%) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
      `}</style>
    </>
  );
}

export default EasterEggs;
