import React from "react";
import { NavLink } from "react-router-dom";
import starfireImg from "../assets/images/starfire2.jpg";
import starfireBg from "../assets/images/bg2.jpg";

function Starfire() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '70vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${starfireBg})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            👑 Tamaranean Princess
          </div>
          
          <h1 className="tt-hero__title" style={{ color: 'var(--tt-orange)' }}>
            Starfire
          </h1>
          
          <p className="tt-hero__subtitle">
            "On Tamaran we say: the most beautiful flowers bloom after the storm."
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
                  src={starfireImg} 
                  alt="Starfire - Princess Koriand'r"
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: 'var(--space-xl)' }}>
                  <h3 style={{ 
                    color: 'var(--tt-orange)', 
                    marginBottom: 'var(--space-md)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Princess Koriand'r
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gap: 'var(--space-sm)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Age:</span>
                      <span style={{ color: 'var(--text-primary)' }}>156 (16 Earth years)</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Origin:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Tamaran</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Status:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Exiled Princess</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Role:</span>
                      <span style={{ color: 'var(--tt-orange)' }}>Heart of Team</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Power Levels */}
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ 
                  color: 'var(--tt-orange)', 
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  Power Levels
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Starbolt Energy', value: 95, color: 'var(--tt-orange)' },
                    { label: 'Flight Speed', value: 92, color: 'var(--tt-yellow)' },
                    { label: 'Super Strength', value: 85, color: 'var(--tt-red)' },
                    { label: 'Emotional Power', value: 100, color: 'var(--tt-pink)' }
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
                  The Alien Princess
                </h2>
                
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <p>
                    Princess Koriand'r of Tamaran came to Earth as an escaped prisoner of war, 
                    sold into slavery by her own sister Blackfire to prevent a planetary invasion. 
                    Despite her traumatic past and exile from her home world, she chose to become 
                    a hero and joined the Teen Titans, bringing warmth, compassion, and incredible 
                    power to the team.
                  </p>
                  <p>
                    Starfire's genuine curiosity about Earth culture and her fierce loyalty to her 
                    friends make her the emotional heart of the Titans. Her optimistic nature and 
                    boundless enthusiasm often help the team through their darkest moments, while 
                    her warrior training makes her a formidable combatant in battle.
                  </p>
                  <p>
                    Though she struggles with her royal duties, the pain of exile, and complex 
                    family relationships, Starfire has found a new family with the Titans. She 
                    fights to protect both Earth and Tamaran, bridging two worlds with her unique 
                    perspective and unwavering hope.
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
                      color: 'var(--tt-orange)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      ⭐ Tamaranean Powers
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Starbolt Energy Projection',
                        'Supersonic Flight',
                        'Solar Energy Absorption',
                        'Enhanced Durability',
                        'Alien Physiology'
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
                      color: 'var(--tt-pink)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      💖 Royal Skills
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Diplomatic Leadership',
                        'Language Learning (Touch)',
                        'Warrior Combat Training',
                        'Emotional Intelligence',
                        'Cultural Bridge-Building'
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
                  background: 'var(--gradient-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  color: 'var(--text-primary)'
                }}>
                  <h4 style={{ 
                    marginBottom: 'var(--space-md)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Tamaranean Wisdom
                  </h4>
                  <p style={{ 
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    margin: 0,
                    color: 'var(--text-primary)'
                  }}>
                    "The true strength of a warrior is not in her power, but in her ability to 
                    protect those she loves with all her heart."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)',
            background: 'linear-gradient(135deg, var(--tt-orange) 0%, var(--tt-pink) 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'white',
              fontFamily: 'var(--font-display)'
            }}>
              🌟 Starfire's Amazing Facts
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'var(--space-xl)',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-md)' }}>
                  💋 Language Learning
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Starfire learns languages through physical contact, which is how she 
                  first learned English by kissing Robin when they met!
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-cyan)', marginBottom: 'var(--space-md)' }}>
                  👑 Royal Heritage
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  As next in line for the Tamaranean throne, Starfire was trained in both 
                  diplomacy and combat from a very young age.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-green)', marginBottom: 'var(--space-md)' }}>
                  ☀️ Solar Powered
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Her powers are fueled by solar energy and positive emotions, making 
                  her literally stronger when she's happy and in sunlight!
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-purple)', marginBottom: 'var(--space-md)' }}>
                  👗 Fashion Explorer
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Starfire loves Earth fashion and shopping, often experimenting with 
                  different styles while learning about human culture.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-red)', marginBottom: 'var(--space-md)' }}>
                  😢 Sister Betrayal
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  She was sold into slavery by her own sister Blackfire to save Tamaran 
                  from invasion, leading to her eventual escape to Earth.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-blue)', marginBottom: 'var(--space-md)' }}>
                  🍯 Mustard Obsession
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  One of her favorite Earth discoveries is mustard - she puts it on 
                  everything and considers it a delicious condiment!
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
            <NavLink to="/robin" className="tt-btn tt-btn--outline">
              ← Previous: Robin
            </NavLink>
            <NavLink to="/raven" className="tt-btn tt-btn--primary">
              Next: Raven →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Starfire;