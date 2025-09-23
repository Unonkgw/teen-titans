import React from "react";
import { NavLink } from "react-router-dom";
import cyborgImg from "../assets/images/cyborg2.jpg";
import towerBg from "../assets/images/tower_bg.webp";

function Cyborg() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '70vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${towerBg})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🤖 Cybernetic Hero
          </div>
          
          <h1 className="tt-hero__title" style={{ color: 'var(--tt-cyan)' }}>
            Cyborg
          </h1>
          
          <p className="tt-hero__subtitle">
            "Booyah!"
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
                  src={cyborgImg} 
                  alt="Cyborg - Victor Stone"
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: 'var(--space-xl)' }}>
                  <h3 style={{ 
                    color: 'var(--tt-cyan)', 
                    marginBottom: 'var(--space-md)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Victor Stone
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gap: 'var(--space-sm)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Age:</span>
                      <span style={{ color: 'var(--text-primary)' }}>18-20</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Origin:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Detroit</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Father:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Dr. Silas Stone</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Role:</span>
                      <span style={{ color: 'var(--tt-cyan)' }}>Tech Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Specs */}
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ 
                  color: 'var(--tt-cyan)', 
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  System Status
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Power Core', value: 98, color: 'var(--tt-cyan)' },
                    { label: 'Sonic Cannon', value: 95, color: 'var(--tt-yellow)' },
                    { label: 'Defense Matrix', value: 88, color: 'var(--tt-green)' },
                    { label: 'Processing Speed', value: 100, color: 'var(--tt-orange)' }
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
                  The Cybernetic Titan
                </h2>
                
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <p>
                    Victor Stone was a star high school football player with dreams of going pro 
                    when a tragic accident at S.T.A.R. Labs changed his life forever. His father, 
                    Dr. Silas Stone, used experimental cybernetic technology to save Victor's life, 
                    replacing most of his body with advanced machinery.
                  </p>
                  <p>
                    Now half-human, half-machine, Cyborg serves as the Teen Titans' technology 
                    specialist and powerhouse. His cybernetic enhancements grant him superhuman 
                    strength, advanced computing abilities, and an arsenal of built-in weapons 
                    including his signature White Noise Sonic Cannon.
                  </p>
                  <p>
                    Despite his mechanical exterior, Victor's humanity shines through his love of 
                    food (especially waffles!), his loyalty to friends, and his infectious 
                    enthusiasm. His catchphrase "Booyah!" has become legendary among the Titans.
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
                      color: 'var(--tt-cyan)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      🤖 Cybernetic Systems
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'White Noise Sonic Cannon',
                        'Superhuman Strength',
                        'Advanced Targeting Systems',
                        'Digital Interface Capability',
                        'Self-Repair Nanobots'
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
                      color: 'var(--tt-orange)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      💪 Human Abilities
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Athletic Training',
                        'Strategic Thinking',
                        'Team Leadership',
                        'Mechanical Engineering',
                        'Motivational Speaking'
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
                    Cyborg's Philosophy
                  </h4>
                  <p style={{ 
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    margin: 0,
                    color: 'var(--text-primary)'
                  }}>
                    "I may be half-machine, but I'm all heart. When my friends need me, 
                    I'm 100% there for them. Booyah!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)',
            background: 'linear-gradient(135deg, var(--tt-cyan) 0%, var(--tt-blue) 100%)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'white',
              fontFamily: 'var(--font-display)'
            }}>
              ⚙️ Cyborg's Tech Facts
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'var(--space-xl)',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-md)' }}>
                  🧇 Waffle Obsession
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Despite being part-machine, Cyborg has an incredible appetite and is 
                  absolutely obsessed with waffles - they're his favorite food!
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-green)', marginBottom: 'var(--space-md)' }}>
                  🏈 Former Star Athlete
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Before his accident, Victor was destined for football greatness as a 
                  star player with college and pro scouts watching him.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-orange)', marginBottom: 'var(--space-md)' }}>
                  🔧 Self-Upgrading
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Cyborg can interface with and control any technology, and constantly 
                  upgrades himself with new weapons and capabilities.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-pink)', marginBottom: 'var(--space-md)' }}>
                  🎵 Music Producer
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  He's an amazing beatboxer and music producer, often creating tracks 
                  and sound effects using his internal audio systems.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-purple)', marginBottom: 'var(--space-md)' }}>
                  🤝 Father Relationship
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  His relationship with his father Dr. Silas Stone is complex - grateful 
                  for saving his life but struggling with his lost humanity.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-red)', marginBottom: 'var(--space-md)' }}>
                  💥 "Booyah!" Origin
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  His signature "Booyah!" catchphrase comes from his days as a football 
                  player - it was his victory celebration!
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
            <NavLink to="/beastboy" className="tt-btn tt-btn--outline">
              ← Previous: Beast Boy
            </NavLink>
            <NavLink to="/about" className="tt-btn tt-btn--primary">
              Back to Team →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cyborg;