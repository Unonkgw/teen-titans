import React from "react";
import { NavLink } from "react-router-dom";
import bg3 from "../assets/images/robinbg.jpg";
import robinImg from "../assets/images/robin2.jpg";
import starfireImg from "../assets/images/starfire2.jpg";
import ravenImg from "../assets/images/raven2.jpg";
import beastboyImg from "../assets/images/beastboy2.jpg";
import cyborgImg from "../assets/images/cyborg2.jpg";

function Error() {
  return (
    <div style={{ 
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-md)',
      paddingTop: '80px',
      backgroundImage: `url(${bg3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(10, 14, 26, 0.9)',
        backdropFilter: 'blur(4px)'
      }}></div>
      
      <div className="tt-404" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          className="tt-404__title" 
          data-text="404"
          style={{ 
            color: 'var(--text-primary)',
            marginBottom: 'var(--space-xl)'
          }}
        >
          404
        </div>
        
        {/* Teen Titans Heroes Group */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          marginBottom: 'var(--space-xl)',
          flexWrap: 'wrap'
        }}>
          {[
            { src: robinImg, name: 'Robin', color: 'var(--tt-red)' },
            { src: starfireImg, name: 'Starfire', color: 'var(--tt-orange)' },
            { src: ravenImg, name: 'Raven', color: 'var(--tt-purple)' },
            { src: beastboyImg, name: 'Beast Boy', color: 'var(--tt-green)' },
            { src: cyborgImg, name: 'Cyborg', color: 'var(--tt-cyan)' }
          ].map((hero, index) => (
            <div
              key={hero.name}
              style={{
                position: 'relative',
                opacity: 0.8,
                transform: `translateY(${index % 2 === 0 ? -10 : 10}px)`,
                animation: `float 3s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: `2px solid ${hero.color}`,
                boxShadow: `0 0 20px ${hero.color}40`,
                transition: 'all var(--transition-base)'
              }}>
                <img 
                  src={hero.src} 
                  alt={hero.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%)',
                    transition: 'all var(--transition-base)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = 'grayscale(0%)';
                    e.target.parentElement.style.transform = 'scale(1.1)';
                    e.target.parentElement.style.boxShadow = `0 0 30px ${hero.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = 'grayscale(20%)';
                    e.target.parentElement.style.transform = 'scale(1)';
                    e.target.parentElement.style.boxShadow = `0 0 20px ${hero.color}40`;
                  }}
                />
              </div>
              {/* Hero name tooltip */}
              <div style={{
                position: 'absolute',
                bottom: '-25px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.7rem',
                color: hero.color,
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                opacity: 0.7
              }}>
                {hero.name}
              </div>
            </div>
          ))}
        </div>
        
        <h2 style={{ 
          color: 'var(--text-primary)',
          marginBottom: 'var(--space-lg)',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
        }}>
          Oops! Portal Malfunction!
        </h2>
        
        <div className="tt-404__subtitle">
          <p style={{ marginBottom: 'var(--space-md)', marginTop: 'var(--space-lg)' }}>
            Looks like the whole team is confused! 
            The page you're looking for doesn't exist in this dimension.
          </p>
          <p style={{ 
            color: 'var(--tt-cyan)', 
            fontStyle: 'italic',
            marginBottom: 'var(--space-xl)'
          }}>
            "Even my systems can't compute this error!" - Cyborg
          </p>
        </div>

        <div style={{ 
          display: 'flex', 
          gap: 'var(--space-md)', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: 'var(--space-2xl)'
        }}>
          <NavLink to="/home" className="tt-btn tt-btn--primary">
            🏠 Return to Tower
          </NavLink>
          <NavLink to="/about" className="tt-btn tt-btn--outline">
            👥 Meet the Team
          </NavLink>
        </div>

        <div className="tt-card tt-card--glass" style={{ 
          padding: 'var(--space-xl)',
          textAlign: 'left',
          maxWidth: '500px'
        }}>
          <h4 style={{ 
            color: 'var(--tt-yellow)', 
            marginBottom: 'var(--space-md)',
            fontFamily: 'var(--font-display)'
          }}>
            🔍 What you can do:
          </h4>
          <ul style={{ 
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            paddingLeft: 'var(--space-lg)'
          }}>
            <li>Check the URL for typos</li>
            <li>Use the navigation menu above</li>
            <li>Go back to the homepage</li>
            <li>Ask Cyborg to debug the system 🤖</li>
          </ul>
        </div>

        <div style={{ 
          marginTop: 'var(--space-2xl)',
          textAlign: 'center'
        }}>
          <div className="tt-badge">
            🦸‍♂️ Error Code: TITANS-404
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error;