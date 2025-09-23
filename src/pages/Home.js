import React from "react";
import { NavLink } from "react-router-dom";
import towerBg from "../assets/images/tower_bg.webp";

function Home() {

  return (
    <div className="tt-section--hero">
      {/* Hero Section */}
      <section className="tt-hero">
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${towerBg})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🦸‍♂️ Welcome to Titans Tower
          </div>
          
          <h1 className="tt-hero__title">
            Teen Titans
          </h1>
          
          <p className="tt-hero__subtitle">
            When the world needs heroes, we answer the call. Join Robin, Starfire, Raven, 
            Beast Boy, and Cyborg as they protect Jump City and beyond. Together, we're more 
            than just a team—we're family.
          </p>
          
          <div className="tt-hero__actions">
            <NavLink to="/about" className="tt-btn tt-btn--primary">
              Meet the Team
            </NavLink>
            <NavLink to="/about" className="tt-btn tt-btn--outline">
              Join the Titans
            </NavLink>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="tt-section">
        <div className="tt-container">
          <div className="tt-divider"></div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: 'var(--space-xl)',
            textAlign: 'center',
            marginTop: 'var(--space-2xl)'
          }}>
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ color: 'var(--tt-cyan)', marginBottom: 'var(--space-sm)' }}>5</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Heroes United</p>
            </div>
            
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-sm)' }}>∞</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Villains Defeated</p>
            </div>
            
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ color: 'var(--tt-green)', marginBottom: 'var(--space-sm)' }}>1</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Tower Home</p>
            </div>
            
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
              <h3 style={{ color: 'var(--tt-pink)', marginBottom: 'var(--space-sm)' }}>24/7</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="tt-section">
        <div className="tt-container">
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)', 
            textAlign: 'center',
            background: 'var(--gradient-hero)',
            color: 'white'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-lg)', 
              color: 'white',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              Ready to Go Titan?
            </h2>
            <p style={{ 
              marginBottom: 'var(--space-xl)', 
              fontSize: '1.2rem',
              opacity: 0.9,
              maxWidth: '600px',
              margin: '0 auto var(--space-xl) auto'
            }}>
              Discover the stories, powers, and personalities that make each Titan unique. 
              From Robin's leadership to Raven's mystical abilities, every hero brings something special.
            </p>
            <NavLink to="/about" className="tt-btn tt-btn--ghost">
              Explore Now
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;