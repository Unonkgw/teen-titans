import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function AdvancedAnimations({ children }) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionType, setTransitionType] = useState('slide');
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  const transitions = {
    slide: 'slideTransition',
    fade: 'fadeTransition', 
    zoom: 'zoomTransition',
    flip: 'flipTransition',
    cube: 'cubeTransition'
  };

  // Handle route changes with transitions
  useEffect(() => {
    if (location !== displayLocation) {
      setIsTransitioning(true);
      
      // Choose transition based on route
      const getTransitionType = (pathname) => {
        if (pathname.includes('/robin')) return 'flip';
        if (pathname.includes('/starfire')) return 'zoom';
        if (pathname.includes('/raven')) return 'fade';
        if (pathname.includes('/beastboy')) return 'slide';
        if (pathname.includes('/cyborg')) return 'cube';
        return 'slide';
      };
      
      setTransitionType(getTransitionType(location.pathname));
      
      setTimeout(() => {
        setDisplayLocation(location);
        setIsTransitioning(false);
      }, 300);
    }
  }, [location, displayLocation]);

  // Add floating shapes animation
  useEffect(() => {
    const createFloatingShape = () => {
      const shape = document.createElement('div');
      const shapes = ['circle', 'triangle', 'square', 'diamond'];
      const colors = ['#00ACEE', '#EC1B24', '#8A2BE2', '#32CD32', '#FF6B35'];
      
      const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      shape.className = `floating-shape floating-${shapeType}`;
      shape.style.cssText = `
        position: fixed;
        width: ${Math.random() * 20 + 10}px;
        height: ${Math.random() * 20 + 10}px;
        background: ${color};
        opacity: 0.1;
        pointer-events: none;
        z-index: 1;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        border-radius: ${shapeType === 'circle' ? '50%' : '0'};
        transform: rotate(${Math.random() * 360}deg);
        animation: floatUp ${Math.random() * 10 + 15}s linear forwards;
      `;
      
      document.body.appendChild(shape);
      
      setTimeout(() => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      }, 25000);
    };

    // Create floating shapes periodically
    const shapeInterval = setInterval(createFloatingShape, 3000);
    
    return () => {
      clearInterval(shapeInterval);
      // Clean up existing shapes
      document.querySelectorAll('.floating-shape').forEach(shape => {
        if (shape.parentNode) {
          shape.parentNode.removeChild(shape);
        }
      });
    };
  }, []);

  // Parallax scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-element');
      
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3D tilt effect on cards
  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.tt-card');
      
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          card.style.transform = `
            perspective(1000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            scale3d(1.02, 1.02, 1.02)
          `;
          card.style.boxShadow = `
            ${-rotateY}px ${rotateX}px 30px rgba(0, 172, 238, 0.3),
            0 0 50px rgba(0, 172, 238, 0.1)
          `;
        }
      });
    };

    const handleMouseLeave = () => {
      const cards = document.querySelectorAll('.tt-card');
      cards.forEach(card => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.boxShadow = '';
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="advanced-animations-container">
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div 
          className={`page-transition ${transitions[transitionType]}`}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div style={{
            color: 'var(--text-primary)',
            fontSize: '2rem',
            fontFamily: 'var(--font-display)',
            animation: 'pulse 1s ease-in-out infinite'
          }}>
            ⚡ Transitioning... ⚡
          </div>
        </div>
      )}

      {/* Main Content with Enhanced Animations */}
      <div 
        className="page-content"
        style={{
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'scale(0.95)' : 'scale(1)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {children}
      </div>

      {/* Advanced Animation Styles */}
      <style jsx global>{`
        /* Page Transitions */
        .slideTransition {
          animation: slideIn 0.3s ease-out;
        }
        
        .fadeTransition {
          animation: fadeIn 0.3s ease-out;
        }
        
        .zoomTransition {
          animation: zoomIn 0.3s ease-out;
        }
        
        .flipTransition {
          animation: flipIn 0.3s ease-out;
        }
        
        .cubeTransition {
          animation: cubeRotate 0.3s ease-out;
        }

        /* Enhanced Card Animations */
        .tt-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          transform-style: preserve-3d;
        }

        .tt-card:hover {
          transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02) !important;
        }

        /* Button Hover Effects */
        .tt-btn {
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .tt-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s;
        }

        .tt-btn:hover::before {
          left: 100%;
        }

        .tt-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 30px rgba(0, 172, 238, 0.3);
        }

        .tt-btn:active {
          transform: translateY(0) scale(0.98);
        }

        /* Navigation Enhancements */
        .tt-nav__link {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tt-nav__link:hover {
          transform: translateY(-2px);
          text-shadow: 0 0 10px currentColor;
        }

        /* Hero Image Animations */
        .tt-character img,
        .tt-hero img {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.9) contrast(1.1);
        }

        .tt-character:hover img,
        .tt-hero:hover img {
          transform: scale(1.1) rotate(1deg);
          filter: brightness(1) contrast(1.2);
        }

        /* Staggered Entrance Animations */
        .tt-slide-up {
          animation: slideUpStagger 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .tt-slide-up:nth-child(1) { animation-delay: 0.1s; }
        .tt-slide-up:nth-child(2) { animation-delay: 0.2s; }
        .tt-slide-up:nth-child(3) { animation-delay: 0.3s; }
        .tt-slide-up:nth-child(4) { animation-delay: 0.4s; }
        .tt-slide-up:nth-child(5) { animation-delay: 0.5s; }

        /* Floating Shapes */
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.1;
          }
          90% {
            opacity: 0.1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        /* Page Transition Keyframes */
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes flipIn {
          from {
            transform: perspective(1000px) rotateY(-90deg);
            opacity: 0;
          }
          to {
            transform: perspective(1000px) rotateY(0deg);
            opacity: 1;
          }
        }

        @keyframes cubeRotate {
          from {
            transform: perspective(1000px) rotateX(-90deg);
            opacity: 0;
          }
          to {
            transform: perspective(1000px) rotateX(0deg);
            opacity: 1;
          }
        }

        @keyframes slideUpStagger {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        /* Morphing Background Shapes */
        .morphing-bg {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -2;
          opacity: 0.05;
        }

        .morphing-bg::before {
          content: '';
          position: absolute;
          top: 20%;
          left: 10%;
          width: 300px;
          height: 300px;
          background: var(--tt-cyan);
          border-radius: 50%;
          animation: morph1 20s ease-in-out infinite;
        }

        .morphing-bg::after {
          content: '';
          position: absolute;
          bottom: 20%;
          right: 10%;
          width: 200px;
          height: 200px;
          background: var(--tt-purple);
          border-radius: 50%;
          animation: morph2 15s ease-in-out infinite;
        }

        @keyframes morph1 {
          0%, 100% {
            border-radius: 50%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 25% 75%;
            transform: rotate(90deg) scale(1.2);
          }
          50% {
            border-radius: 75% 25%;
            transform: rotate(180deg) scale(0.8);
          }
          75% {
            border-radius: 25% 75% 75% 25%;
            transform: rotate(270deg) scale(1.1);
          }
        }

        @keyframes morph2 {
          0%, 100% {
            border-radius: 50%;
            transform: rotate(0deg) scale(1);
          }
          33% {
            border-radius: 75% 25% 50% 50%;
            transform: rotate(120deg) scale(1.3);
          }
          66% {
            border-radius: 25% 75% 25% 75%;
            transform: rotate(240deg) scale(0.7);
          }
        }
      `}</style>

      {/* Morphing Background */}
      <div className="morphing-bg"></div>
    </div>
  );
}

export default AdvancedAnimations;
