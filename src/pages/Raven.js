import React from "react";
import { NavLink } from "react-router-dom";
import ravenImg from "../assets/images/raven2.jpg";
import bg3 from "../assets/images/bg3.jpg";

function Raven() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '70vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${bg3})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🔮 Half-Demon Sorceress
          </div>
          
          <h1 className="tt-hero__title" style={{ color: 'var(--tt-purple)' }}>
            Raven
          </h1>
          
          <p className="tt-hero__subtitle">
            "Azarath Metrion Zinthos."
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
                  src={ravenImg} 
                  alt="Raven - Rachel Roth"
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: 'var(--space-xl)' }}>
                  <h3 style={{ 
                    color: 'var(--tt-purple)', 
                    marginBottom: 'var(--space-md)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Rachel Roth
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gap: 'var(--space-sm)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Age:</span>
                      <span style={{ color: 'var(--text-primary)' }}>16-18</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Origin:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Azarath</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Father:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Trigon</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Role:</span>
                      <span style={{ color: 'var(--tt-purple)' }}>Mystic</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mystical Power Levels */}
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ 
                  color: 'var(--tt-purple)', 
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  Mystical Powers
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Dark Magic', value: 98, color: 'var(--tt-purple)' },
                    { label: 'Soul-Self', value: 95, color: 'var(--tt-pink)' },
                    { label: 'Telekinesis', value: 90, color: 'var(--tt-cyan)' },
                    { label: 'Emotional Control', value: 85, color: 'var(--tt-blue)' }
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
                  The Dark Sorceress
                </h2>
                
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <p>
                    Raven is a half-human, half-demon superhero born to the human Arella and the 
                    interdimensional demon Trigon. Raised in the pacifist realm of Azarath by 
                    monks who taught her to control her demonic heritage through meditation, 
                    discipline, and the suppression of emotions that could trigger her dark powers.
                  </p>
                  <p>
                    Reserved, intelligent, and often sarcastic, Raven serves as the team's mystic, 
                    strategist, and voice of reason. Her dry wit and deadpan humor balance out the 
                    louder personalities of her teammates, while her incredible magical abilities 
                    make her one of the most powerful Titans. She originally brought the team 
                    together to help stop her father's invasion of Earth.
                  </p>
                  <p>
                    Despite her dark origins and constant struggle against Trigon's influence, 
                    Raven consistently chooses to fight for good. Her journey from reluctant ally 
                    to devoted friend showcases her growth from isolation to finding family with 
                    the Titans, making her one of the most complex and compelling heroes in the DC universe.
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
                      color: 'var(--tt-purple)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      🔮 Dark Magic
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Soul-Self Projection',
                        'Dark Energy Manipulation',
                        'Telekinesis & Levitation',
                        'Portal Creation',
                        'Precognitive Abilities'
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
                      color: 'var(--tt-cyan)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      🧠 Mental Skills
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Empathic Abilities',
                        'Meditation Mastery',
                        'Occult Knowledge',
                        'Tactical Analysis',
                        'Emotional Suppression'
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
                  background: 'var(--gradient-accent)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  color: 'white'
                }}>
                  <h4 style={{ 
                    marginBottom: 'var(--space-md)',
                    color: 'white',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Raven's Philosophy
                  </h4>
                  <p style={{ 
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    margin: 0,
                    color: 'white'
                  }}>
                    "I am the daughter of Trigon. I am what I choose to be. And I choose to be a Titan, 
                    to fight for good, and to protect my friends."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)',
            background: 'linear-gradient(135deg, var(--tt-purple) 0%, var(--tt-pink) 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'white',
              fontFamily: 'var(--font-display)'
            }}>
              🌙 Raven's Dark Secrets
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'var(--space-xl)',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ color: 'var(--tt-cyan)', marginBottom: 'var(--space-md)' }}>
                  🔗 Team Founder
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Raven originally brought the Teen Titans together to help stop her 
                  demonic father Trigon from conquering and destroying Earth.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-md)' }}>
                  😐 Emotional Suppression
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  She suppresses her emotions to prevent losing control of her powers, 
                  which is why she appears so stoic, sarcastic, and emotionally distant.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-green)', marginBottom: 'var(--space-md)' }}>
                  📚 Bookworm Scholar
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  When not saving the world, Raven loves reading ancient texts, poetry, 
                  and practicing meditation in the quiet corners of Titans Tower.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-orange)', marginBottom: 'var(--space-md)' }}>
                  🌌 Interdimensional Travel
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Her portals can transport the team across dimensions, making her 
                  essential for missions involving mystical or otherworldly threats.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-red)', marginBottom: 'var(--space-md)' }}>
                  👹 Trigon's Daughter
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Her constant internal battle against her father's evil influence 
                  makes every day a struggle between light and darkness.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-blue)', marginBottom: 'var(--space-md)' }}>
                  ☕ Tea Lover
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  One of her few earthly pleasures is herbal tea, which helps her 
                  maintain the calm necessary for meditation and emotional control.
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
            <NavLink to="/starfire" className="tt-btn tt-btn--outline">
              ← Previous: Starfire
            </NavLink>
            <NavLink to="/beastboy" className="tt-btn tt-btn--primary">
              Next: Beast Boy →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Raven;