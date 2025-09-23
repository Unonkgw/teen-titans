import React from "react";
import { NavLink } from "react-router-dom";
import beastboyImg from "../assets/images/beastboy2.jpg";
import bg2 from "../assets/images/bg2.jpg";

function BeastBoy() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '70vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${bg2})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🦎 Shape-Shifting Hero
          </div>
          
          <h1 className="tt-hero__title" style={{ color: 'var(--tt-green)' }}>
            Beast Boy
          </h1>
          
          <p className="tt-hero__subtitle">
            "Yo, dudes! Check me out!"
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="tt-section">
        <div className="tt-container">
          {/* Character Profile */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'minmax(300px, 1fr) 2fr', 
            gap: 'var(--space-4xl)',
            alignItems: 'start',
            marginBottom: 'var(--space-4xl)'
          }}>
            {/* Character Image & Stats */}
            <div className="tt-slide-up">
              <div className="tt-card" style={{ 
                padding: 0, 
                overflow: 'hidden',
                marginBottom: 'var(--space-xl)'
              }}>
                <img 
                  src={beastboyImg} 
                  alt="Beast Boy - Garfield Logan"
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: 'var(--space-xl)' }}>
                  <h3 style={{ 
                    color: 'var(--tt-green)', 
                    marginBottom: 'var(--space-md)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Garfield Logan
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gap: 'var(--space-sm)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Age:</span>
                      <span style={{ color: 'var(--text-primary)' }}>15-17</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Origin:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Africa</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Former Name:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Changeling</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Role:</span>
                      <span style={{ color: 'var(--tt-green)' }}>Comic Relief</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transformation Abilities */}
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ 
                  color: 'var(--tt-green)', 
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  Transformation Skills
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Animal Morphing', value: 100, color: 'var(--tt-green)' },
                    { label: 'Speed Shifting', value: 95, color: 'var(--tt-yellow)' },
                    { label: 'Size Adaptation', value: 90, color: 'var(--tt-orange)' },
                    { label: 'Instinct Control', value: 85, color: 'var(--tt-teal)' }
                  ].map((stat, index) => (
                    <div key={stat.label}>
                      <div style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        marginBottom: 'var(--space-xs)',
                        fontSize: '0.85rem'
                      }}>
                        <span style={{ color: 'var(--text-secondary)' }}>{stat.label}</span>
                        <span style={{ color: stat.color, fontWeight: 'bold' }}>{stat.value}%</span>
                      </div>
                      <div style={{ 
                        height: '6px', 
                        background: 'var(--glass-light)',
                        borderRadius: 'var(--radius-full)',
                        overflow: 'hidden'
                      }}>
                        <div style={{ 
                          width: `${stat.value}%`,
                          height: '100%',
                          background: stat.color,
                          borderRadius: 'var(--radius-full)',
                          transition: 'width 1s ease-out',
                          animationDelay: `${index * 0.2}s`
                        }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Character Details */}
            <div className="tt-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-3xl)' }}>
                <h2 style={{ 
                  color: 'var(--text-primary)', 
                  marginBottom: 'var(--space-xl)',
                  fontFamily: 'var(--font-display)'
                }}>
                  The Green Shapeshifter
                </h2>
                
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <p>
                    Garfield Logan contracted a rare illness called Sakutia while living in Africa 
                    with his parents, who were working on wildlife preservation. To save his life, 
                    he was treated with an experimental serum derived from a green monkey, which 
                    turned his skin and hair permanently green and granted him the incredible power 
                    to transform into any animal he has seen or can imagine.
                  </p>
                  <p>
                    Outgoing, funny, and sometimes immature, Beast Boy serves as the team's comic 
                    relief and morale booster. His humor and pranks often mask deeper struggles with 
                    loneliness, loss, and identity issues stemming from his tragic past. Despite his 
                    playful exterior, his loyalty to his friends is absolute and unwavering.
                  </p>
                  <p>
                    His shape-shifting abilities make him one of the most versatile fighters on the 
                    team, capable of transforming from microscopic organisms to massive dinosaurs in 
                    seconds. His vegetarian lifestyle reflects his deep connection to all living 
                    creatures, making him a bridge between the human and animal worlds.
                  </p>
                </div>

                {/* Powers & Skills Grid */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '1fr 1fr', 
                  gap: 'var(--space-2xl)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <div>
                    <h3 style={{ 
                      color: 'var(--tt-green)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      🦎 Animal Powers
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Complete Animal Shape-Shifting',
                        'Enhanced Animal Senses',
                        'Size Variation (Microbe to Whale)',
                        'Environmental Adaptation',
                        'Accelerated Healing Factor'
                      ].map((power) => (
                        <div key={power} className="tt-badge" style={{ 
                          justifyContent: 'flex-start'
                        }}>
                          {power}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ 
                      color: 'var(--tt-yellow)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      😄 Human Skills
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Team Morale Booster',
                        'Quick Tactical Thinking',
                        'Entertainment & Comedy',
                        'Gaming Champion',
                        'Animal Communication'
                      ].map((skill) => (
                        <div key={skill} className="tt-badge" style={{ 
                          justifyContent: 'flex-start'
                        }}>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Quote */}
                <div style={{ 
                  padding: 'var(--space-xl)',
                  background: 'linear-gradient(135deg, var(--tt-green) 0%, var(--tt-yellow) 100%)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  color: 'var(--bg-primary)'
                }}>
                  <h4 style={{ 
                    marginBottom: 'var(--space-md)',
                    color: 'var(--bg-primary)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Beast Boy's Philosophy
                  </h4>
                  <p style={{ 
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    margin: 0,
                    color: 'var(--bg-primary)'
                  }}>
                    "Dude, being different isn't something to hide from. It's something that makes 
                    you special! And hey, if you can't laugh at yourself, who can you laugh at?"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)',
            background: 'linear-gradient(135deg, var(--tt-green) 0%, var(--tt-teal) 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'white',
              fontFamily: 'var(--font-display)'
            }}>
              🐾 Beast Boy's Wild Facts
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'var(--space-xl)',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-md)' }}>
                  🎭 Former Identity
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  He originally went by "Changeling" during his early superhero career 
                  before adopting the name Beast Boy with the Teen Titans.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-cyan)', marginBottom: 'var(--space-md)' }}>
                  🥩 Vegetarian Hero
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Beast Boy is a strict vegetarian because he can transform into animals 
                  and feels a deep spiritual connection with all living creatures.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-orange)', marginBottom: 'var(--space-md)' }}>
                  🎮 Gaming Master
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  When not saving the world, Beast Boy dominates video games and is 
                  always challenging his teammates to gaming competitions at the Tower.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-purple)', marginBottom: 'var(--space-md)' }}>
                  🦕 Dinosaur Expert
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  His favorite transformations are extinct dinosaurs, especially the 
                  T-Rex, which he uses for heavy combat situations.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-red)', marginBottom: 'var(--space-md)' }}>
                  😢 Tragic Past
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  His green appearance is the result of a life-saving treatment after 
                  contracting a rare disease, making his humor a coping mechanism.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-pink)', marginBottom: 'var(--space-md)' }}>
                  🎬 Actor Dreams
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Beast Boy dreams of becoming a famous actor and often practices his 
                  performances, using his shape-shifting for dramatic effect.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center',
            gap: 'var(--space-md)',
            marginTop: 'var(--space-3xl)'
          }}>
            <NavLink to="/raven" className="tt-btn tt-btn--outline">
              ← Previous: Raven
            </NavLink>
            <NavLink to="/cyborg" className="tt-btn tt-btn--primary">
              Next: Cyborg →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BeastBoy;