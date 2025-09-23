import React from "react";
import { NavLink } from "react-router-dom";
import robinImg from "../assets/images/robin2.jpg";
import robinBg from "../assets/images/robinbg.jpg";

function Robin() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '70vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${robinBg})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🏹 Team Leader
          </div>
          
          <h1 className="tt-hero__title" style={{ color: 'var(--tt-red)' }}>
            Robin
          </h1>
          
          <p className="tt-hero__subtitle">
            "Titans, Go!"
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
                  src={robinImg} 
                  alt="Robin - Dick Grayson"
                  style={{ 
                    width: '100%', 
                    height: '400px', 
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                <div style={{ padding: 'var(--space-xl)' }}>
                  <h3 style={{ 
                    color: 'var(--tt-red)', 
                    marginBottom: 'var(--space-md)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Dick Grayson
                  </h3>
                  <div style={{ 
                    display: 'grid', 
                    gap: 'var(--space-sm)',
                    fontSize: '0.9rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Age:</span>
                      <span style={{ color: 'var(--text-primary)' }}>16-19</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Origin:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Gotham City</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Mentor:</span>
                      <span style={{ color: 'var(--text-primary)' }}>Batman</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Role:</span>
                      <span style={{ color: 'var(--tt-red)' }}>Leader</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Combat Stats */}
              <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-xl)' }}>
                <h4 style={{ 
                  color: 'var(--tt-red)', 
                  marginBottom: 'var(--space-md)',
                  textAlign: 'center'
                }}>
                  Combat Proficiency
                </h4>
                <div style={{ display: 'grid', gap: 'var(--space-md)' }}>
                  {[
                    { label: 'Leadership', value: 95, color: 'var(--tt-red)' },
                    { label: 'Combat Skills', value: 90, color: 'var(--tt-yellow)' },
                    { label: 'Strategy', value: 98, color: 'var(--tt-cyan)' },
                    { label: 'Acrobatics', value: 100, color: 'var(--tt-green)' }
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
                  The Boy Wonder
                </h2>
                
                <div style={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  marginBottom: 'var(--space-2xl)'
                }}>
                  <p>
                    Dick Grayson was once part of the "Flying Graysons," a world-famous family 
                    of acrobats performing in Haly's Circus. After witnessing his parents' tragic 
                    death orchestrated by the crime boss Tony Zucco, he was taken in by Bruce Wayne 
                    and trained to become the first Robin, Batman's sidekick.
                  </p>
                  <p>
                    As the leader of the Teen Titans, Robin brings tactical brilliance, unwavering 
                    determination, and exceptional combat skills to the team. His acrobatic background 
                    and intensive training under Batman have made him a formidable fighter and natural 
                    leader who inspires confidence in his teammates.
                  </p>
                  <p>
                    Though sometimes serious and driven by his pursuit of justice, Robin deeply cares 
                    for his teammates and will stop at nothing to protect them. His leadership has 
                    united the Titans through countless battles against the forces of evil.
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
                      color: 'var(--tt-red)', 
                      marginBottom: 'var(--space-lg)',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.4rem'
                    }}>
                      🥋 Combat Skills
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Master Martial Artist',
                        'Expert Acrobat',
                        'Tactical Genius',
                        'Weapons Mastery',
                        'Detective Skills'
                      ].map((skill) => (
                        <div key={skill} className="tt-badge" style={{ 
                          justifyContent: 'flex-start'
                        }}>
                          {skill}
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
                      🛠️ Equipment Arsenal
                    </h3>
                    <div style={{ display: 'grid', gap: 'var(--space-sm)' }}>
                      {[
                        'Titanium Bo Staff',
                        'Explosive Birdarangs',
                        'Grappling Hook Gun',
                        'Advanced Utility Belt',
                        'Communicator Devices'
                      ].map((equipment) => (
                        <div key={equipment} className="tt-badge" style={{ 
                          justifyContent: 'flex-start'
                        }}>
                          {equipment}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Signature Quote */}
                <div style={{ 
                  padding: 'var(--space-xl)',
                  background: 'var(--gradient-primary)',
                  borderRadius: 'var(--radius-lg)',
                  textAlign: 'center',
                  color: 'var(--bg-primary)'
                }}>
                  <h4 style={{ 
                    marginBottom: 'var(--space-md)',
                    color: 'var(--bg-primary)',
                    fontFamily: 'var(--font-display)'
                  }}>
                    Robin's Creed
                  </h4>
                  <p style={{ 
                    fontSize: '1.2rem',
                    fontStyle: 'italic',
                    margin: 0,
                    color: 'var(--bg-primary)'
                  }}>
                    "Being a hero isn't about the mask or the costume. It's about doing what's right, 
                    no matter the cost. Titans, Go!"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Fun Facts Section */}
          <div className="tt-card tt-card--hero" style={{ 
            padding: 'var(--space-3xl)',
            background: 'var(--gradient-accent)',
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ 
              marginBottom: 'var(--space-xl)',
              color: 'white',
              fontFamily: 'var(--font-display)'
            }}>
              🎪 Robin's Amazing Facts
            </h2>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: 'var(--space-xl)',
              textAlign: 'left'
            }}>
              <div>
                <h4 style={{ color: 'var(--tt-yellow)', marginBottom: 'var(--space-md)' }}>
                  🎭 Flying Graysons Legacy
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Robin's incredible acrobatic abilities come from his circus family, 
                  the "Flying Graysons," who were world-renowned trapeze artists.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-cyan)', marginBottom: 'var(--space-md)' }}>
                  🦇 Batman's First Partner
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Dick Grayson was the original Robin and the first person Batman trusted 
                  enough to take as his crime-fighting partner in Gotham City.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-green)', marginBottom: 'var(--space-md)' }}>
                  👥 Born Leader
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Despite being one of the youngest Titans, Robin's natural leadership 
                  and tactical brilliance keep the team united through any crisis.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-orange)', marginBottom: 'var(--space-md)' }}>
                  🕵️ Master Detective
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Trained by the World's Greatest Detective, Robin can solve complex 
                  mysteries and analyze crime scenes like a seasoned professional.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-purple)', marginBottom: 'var(--space-md)' }}>
                  🏃‍♂️ Peak Human Condition
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Through intense training with Batman, Robin has achieved peak human 
                  physical condition in strength, speed, and endurance.
                </p>
              </div>
              <div>
                <h4 style={{ color: 'var(--tt-pink)', marginBottom: 'var(--space-md)' }}>
                  🔧 Tech Innovator
                </h4>
                <p style={{ opacity: 0.9, lineHeight: 1.6 }}>
                  Robin designs and builds most of his own gadgets, from explosive 
                  birdarangs to advanced communication devices for the team.
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
            <NavLink to="/about" className="tt-btn tt-btn--outline">
              ← Back to Team
            </NavLink>
            <NavLink to="/starfire" className="tt-btn tt-btn--primary">
              Next: Starfire →
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Robin;