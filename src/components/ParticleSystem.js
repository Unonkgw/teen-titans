import React, { useEffect, useRef } from 'react';

function ParticleSystem({ type = 'default', density = 'medium' }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);

  const particleConfigs = {
    default: {
      colors: ['#00ACEE', '#EC1B24', '#8A2BE2', '#32CD32', '#FF6B35'],
      shapes: ['circle', 'star', 'diamond'],
      speed: 0.5
    },
    robin: {
      colors: ['#EC1B24', '#FFD700', '#228B22'],
      shapes: ['circle', 'diamond'],
      speed: 0.8
    },
    starfire: {
      colors: ['#FF6B35', '#FF1493', '#FFD700'],
      shapes: ['star', 'circle'],
      speed: 1.2
    },
    raven: {
      colors: ['#8A2BE2', '#4B0082', '#9932CC'],
      shapes: ['diamond', 'triangle'],
      speed: 0.3
    },
    beastboy: {
      colors: ['#32CD32', '#228B22', '#90EE90'],
      shapes: ['circle', 'leaf'],
      speed: 0.6
    },
    cyborg: {
      colors: ['#00CED1', '#4682B4', '#87CEEB'],
      shapes: ['square', 'diamond'],
      speed: 0.7
    }
  };

  const densitySettings = {
    low: 20,
    medium: 35,
    high: 50
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const config = particleConfigs[type] || particleConfigs.default;
    const particleCount = densitySettings[density] || densitySettings.medium;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 1,
      color: config.colors[Math.floor(Math.random() * config.colors.length)],
      shape: config.shapes[Math.floor(Math.random() * config.shapes.length)],
      speedX: (Math.random() - 0.5) * config.speed,
      speedY: (Math.random() - 0.5) * config.speed,
      opacity: Math.random() * 0.5 + 0.1,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.02
    });

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    // Draw shapes
    const drawShape = (ctx, particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);

      switch (particle.shape) {
        case 'circle':
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'star':
          drawStar(ctx, 0, 0, 5, particle.size, particle.size / 2);
          break;
        
        case 'diamond':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          ctx.fill();
          break;
        
        case 'square':
          ctx.fillRect(-particle.size/2, -particle.size/2, particle.size, particle.size);
          break;
        
        case 'triangle':
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.closePath();
          ctx.fill();
          break;
        
        case 'leaf':
          drawLeaf(ctx, 0, 0, particle.size);
          break;
        
        default:
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
      }
      
      ctx.restore();
    };

    // Draw star shape
    const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
      let rot = Math.PI / 2 * 3;
      let x = cx;
      let y = cy;
      const step = Math.PI / spikes;

      ctx.beginPath();
      ctx.moveTo(cx, cy - outerRadius);
      
      for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      
      ctx.lineTo(cx, cy - outerRadius);
      ctx.closePath();
      ctx.fill();
    };

    // Draw leaf shape
    const drawLeaf = (ctx, cx, cy, size) => {
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.quadraticCurveTo(cx + size, cy - size/2, cx, cy + size);
      ctx.quadraticCurveTo(cx - size, cy - size/2, cx, cy - size);
      ctx.fill();
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;

        // Wrap around screen
        if (particle.x < -10) particle.x = canvas.width + 10;
        if (particle.x > canvas.width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = canvas.height + 10;
        if (particle.y > canvas.height + 10) particle.y = -10;

        // Subtle opacity pulsing
        particle.opacity += (Math.random() - 0.5) * 0.01;
        particle.opacity = Math.max(0.05, Math.min(0.6, particle.opacity));

        drawShape(ctx, particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [type, density]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        opacity: 0.6
      }}
    />
  );
}

export default ParticleSystem;
