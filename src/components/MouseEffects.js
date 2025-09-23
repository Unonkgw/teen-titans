import React, { useEffect, useRef, useState } from 'react';

function MouseEffects() {
  const trailCanvasRef = useRef(null);
  const cursorRef = useRef(null);
  const trailPoints = useRef([]);
  const animationRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = trailCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse movement handler
    const handleMouseMove = (e) => {
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
        size: isClicking ? 8 : 4,
        color: isHovering ? '#FF6B35' : '#00ACEE',
        opacity: 1
      };

      trailPoints.current.push(newPoint);
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Limit trail length for performance
      if (trailPoints.current.length > 50) {
        trailPoints.current.shift();
      }
    };

    // Mouse click handlers
    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Hover detection for interactive elements
    const handleMouseOver = (e) => {
      const isInteractive = e.target.matches('button, a, .tt-btn, .tt-card, .tt-nav__link, input, [role="button"]');
      setIsHovering(isInteractive);
    };

    // Animation loop for trail
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const now = Date.now();
      
      // Update and draw trail points
      trailPoints.current = trailPoints.current.filter(point => {
        const age = now - point.timestamp;
        const maxAge = 1000; // 1 second
        
        if (age > maxAge) return false;
        
        // Fade out over time
        point.opacity = 1 - (age / maxAge);
        point.size *= 0.98; // Shrink over time
        
        // Draw trail point
        ctx.save();
        ctx.globalAlpha = point.opacity;
        ctx.fillStyle = point.color;
        ctx.shadowColor = point.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        
        return true;
      });
      
      // Connect trail points with lines
      if (trailPoints.current.length > 1) {
        ctx.save();
        ctx.strokeStyle = isHovering ? '#FF6B35' : '#00ACEE';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.3;
        ctx.shadowColor = ctx.strokeStyle;
        ctx.shadowBlur = 5;
        
        ctx.beginPath();
        ctx.moveTo(trailPoints.current[0].x, trailPoints.current[0].y);
        
        for (let i = 1; i < trailPoints.current.length; i++) {
          ctx.lineTo(trailPoints.current[i].x, trailPoints.current[i].y);
        }
        
        ctx.stroke();
        ctx.restore();
      }
      
      animationId = requestAnimationFrame(animate);
    };

    // Event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isClicking, isHovering]);

  return (
    <>
      {/* Trail Canvas */}
      <canvas
        ref={trailCanvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9998,
          mixBlendMode: 'screen'
        }}
      />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `2px solid ${isHovering ? '#FF6B35' : '#00ACEE'}`,
          background: isClicking ? (isHovering ? '#FF6B35' : '#00ACEE') : 'transparent',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'all 0.1s ease-out',
          transform: `scale(${isClicking ? 1.5 : isHovering ? 1.2 : 1})`,
          boxShadow: `0 0 20px ${isHovering ? '#FF6B35' : '#00ACEE'}40`,
          opacity: 0.8
        }}
      />

      {/* Ripple Effect on Click */}
      {isClicking && (
        <div
          style={{
            position: 'fixed',
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: `2px solid ${isHovering ? '#FF6B35' : '#00ACEE'}`,
            pointerEvents: 'none',
            zIndex: 9997,
            animation: 'ripple 0.6s ease-out forwards'
          }}
        />
      )}

      {/* Global Cursor Style Override */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}

export default MouseEffects;
