import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
  const [currentTheme, setCurrentTheme] = useState('default');
  const [isOpen, setIsOpen] = useState(false);

  const themes = {
    default: {
      name: 'Titans Tower',
      icon: '🏢',
      primary: '#00ACEE',
      secondary: '#EC1B24',
      accent: '#8A2BE2'
    },
    robin: {
      name: 'Robin Mode',
      icon: '🦸‍♂️',
      primary: '#EC1B24',
      secondary: '#FFD700',
      accent: '#228B22'
    },
    starfire: {
      name: 'Starfire Mode', 
      icon: '👑',
      primary: '#FF6B35',
      secondary: '#FF1493',
      accent: '#FFD700'
    },
    raven: {
      name: 'Raven Mode',
      icon: '🔮',
      primary: '#8A2BE2',
      secondary: '#4B0082',
      accent: '#9932CC'
    },
    beastboy: {
      name: 'Beast Boy Mode',
      icon: '🦎',
      primary: '#32CD32',
      secondary: '#228B22',
      accent: '#90EE90'
    },
    cyborg: {
      name: 'Cyborg Mode',
      icon: '🤖',
      primary: '#00CED1',
      secondary: '#4682B4',
      accent: '#87CEEB'
    }
  };

  // Load saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('titans-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    }
  }, []);

  const applyTheme = (themeName) => {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    
    // Update CSS custom properties
    root.style.setProperty('--tt-primary', theme.primary);
    root.style.setProperty('--tt-cyan', theme.primary);
    root.style.setProperty('--tt-red', theme.secondary);
    root.style.setProperty('--tt-orange', theme.accent);
    
    // Add theme class to body for additional styling
    document.body.className = document.body.className.replace(/theme-\w+/g, '');
    document.body.classList.add(`theme-${themeName}`);
    
    // Save to localStorage
    localStorage.setItem('titans-theme', themeName);
  };

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
    setIsOpen(false);
    
    // Add a nice transition effect
    document.body.style.transition = 'all 0.3s ease-in-out';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  };

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      zIndex: 1000
    }}>
      {/* Theme Switcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: '2px solid var(--tt-cyan)',
          background: 'var(--glass-medium)',
          backdropFilter: 'blur(10px)',
          color: 'var(--text-primary)',
          fontSize: '1.5rem',
          cursor: 'pointer',
          transition: 'all var(--transition-base)',
          boxShadow: '0 8px 32px rgba(0, 172, 238, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 40px rgba(0, 172, 238, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 32px rgba(0, 172, 238, 0.3)';
        }}
      >
        {themes[currentTheme].icon}
      </button>

      {/* Theme Options Panel */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '70px',
          right: '0',
          width: '200px',
          background: 'var(--glass-dark)',
          backdropFilter: 'blur(20px)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: 'var(--space-md)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          animation: 'slideInRight 0.3s ease-out'
        }}>
          <h4 style={{
            color: 'var(--text-primary)',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            marginBottom: 'var(--space-md)',
            textAlign: 'center',
            fontFamily: 'var(--font-display)'
          }}>
            🎨 Choose Theme
          </h4>
          
          <div style={{
            display: 'grid',
            gap: 'var(--space-xs)'
          }}>
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => handleThemeChange(key)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-sm)',
                  padding: 'var(--space-sm)',
                  background: currentTheme === key ? 'var(--glass-light)' : 'transparent',
                  border: currentTheme === key ? '1px solid var(--tt-cyan)' : '1px solid transparent',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                  transition: 'all var(--transition-base)',
                  fontSize: '0.85rem',
                  width: '100%',
                  textAlign: 'left'
                }}
                onMouseEnter={(e) => {
                  if (currentTheme !== key) {
                    e.target.style.background = 'var(--glass-light)';
                    e.target.style.borderColor = 'var(--border-color)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentTheme !== key) {
                    e.target.style.background = 'transparent';
                    e.target.style.borderColor = 'transparent';
                  }
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{theme.icon}</span>
                <span>{theme.name}</span>
                {currentTheme === key && (
                  <span style={{ 
                    marginLeft: 'auto',
                    color: 'var(--tt-cyan)',
                    fontSize: '0.8rem'
                  }}>
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div style={{
            marginTop: 'var(--space-md)',
            paddingTop: 'var(--space-sm)',
            borderTop: '1px solid var(--border-color)',
            textAlign: 'center'
          }}>
            <small style={{
              color: 'var(--text-muted)',
              fontSize: '0.7rem'
            }}>
              Theme saved automatically
            </small>
          </div>
        </div>
      )}

      {/* Close overlay when clicking outside */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default ThemeSwitcher;
