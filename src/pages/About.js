import React from "react";
import { useNavigate } from "react-router-dom";
import starfireImg from "../assets/images/starfire2.jpg";
import robinImg from "../assets/images/robin2.jpg";
import ravenImg from "../assets/images/raven2.jpg";
import beastBoyImg from "../assets/images/beastboy2.jpg";
import cyborgImg from "../assets/images/cyborg2.jpg";
import bg3 from "../assets/images/bg3.jpg";

const characters = [
  {
    name: "Robin",
    image: robinImg,
    path: "/robin",
    color: "var(--tt-red)",
    description: "The fearless leader with unmatched martial arts skills and tactical genius.",
    powers: ["Leadership", "Martial Arts", "Tactical Genius", "Acrobatics"]
  },
  {
    name: "Starfire",
    image: starfireImg,
    path: "/starfire",
    color: "var(--tt-orange)",
    description: "An alien princess with the power of flight and energy projection.",
    powers: ["Flight", "Starbolts", "Super Strength", "Energy Absorption"]
  },
  {
    name: "Raven",
    image: ravenImg,
    path: "/raven",
    color: "var(--tt-purple)",
    description: "Half-demon sorceress with dark magic and telekinetic abilities.",
    powers: ["Dark Magic", "Telekinesis", "Portal Creation", "Soul Self"]
  },
  {
    name: "Beast Boy",
    image: beastBoyImg,
    path: "/beastboy",
    color: "var(--tt-green)",
    description: "Shape-shifting hero who can transform into any animal imaginable.",
    powers: ["Shape-shifting", "Animal Forms", "Enhanced Senses", "Regeneration"]
  },
  {
    name: "Cyborg",
    image: cyborgImg,
    path: "/cyborg",
    color: "var(--tt-cyan)",
    description: "Half-human, half-machine hero with incredible technological prowess.",
    powers: ["Cybernetic Enhancement", "Sonic Cannon", "Tech Interface", "Super Strength"]
  }
];

function About() {
  const navigate = useNavigate();

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="tt-hero" style={{ minHeight: '60vh' }}>
        <div 
          className="tt-hero__bg"
          style={{ backgroundImage: `url(${bg3})` }}
        ></div>
        
        <div className="tt-hero__content tt-slide-up">
          <div className="tt-badge" style={{ marginBottom: 'var(--space-lg)' }}>
            🦸‍♂️ Our Heroes
          </div>
          
          <h1 className="tt-hero__title">
            Meet the Titans
          </h1>
          
          <p className="tt-hero__subtitle">
            We're the Teen Titans, a team of young heroes who've come together to protect 
            the world and have each other's backs. From battling interdimensional demons to 
            stopping everyday crime, we face it all with courage, teamwork, and a little bit of chaos.
          </p>
        </div>
      </section>

      {/* Team Description */}
      <section className="tt-section">
        <div className="tt-container">
          <div className="tt-card tt-card--glass" style={{ 
            padding: 'var(--space-3xl)', 
            textAlign: 'center',
            marginBottom: 'var(--space-4xl)'
          }}>
            <p style={{ 
              fontSize: '1.3rem', 
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Robin keeps us sharp, Starfire brings the heart, Raven holds the mystic edge, 
              Beast Boy lightens the mood, and Cyborg powers us forward. We're more than just 
              a superhero squad; we're a family. <strong style={{ color: 'var(--tt-cyan)' }}>Titans, go!</strong>
            </p>
          </div>

          {/* Character Grid */}
          <div className="tt-grid">
            {characters.map((character, index) => (
              <div 
                key={character.name} 
                className="tt-character tt-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(character.path)}
              >
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="tt-character__image"
                />
                <div className="tt-character__overlay">
                  <div>
                    <h3 
                      className="tt-character__name"
                      style={{ color: character.color }}
                    >
                      {character.name}
                    </h3>
                    <p className="tt-character__description">
                      {character.description}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      flexWrap: 'wrap', 
                      gap: 'var(--space-xs)',
                      justifyContent: 'center',
                      marginTop: 'var(--space-md)'
                    }}>
                      {character.powers.slice(0, 2).map((power, i) => (
                        <span key={i} className="tt-badge" style={{ fontSize: '0.75rem' }}>
                          {power}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Team Stats */}
          <div className="tt-divider"></div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: 'var(--space-xl)',
            marginTop: 'var(--space-3xl)'
          }}>
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--tt-cyan)', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                5
              </h3>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-primary)' }}>
                Unique Heroes
              </h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                Each with extraordinary abilities and unwavering dedication to justice
              </p>
            </div>
            
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--tt-yellow)', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                ∞
              </h3>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-primary)' }}>
                Missions Completed
              </h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                From saving cats to defeating world-ending threats
              </p>
            </div>
            
            <div className="tt-card tt-card--glass" style={{ padding: 'var(--space-2xl)', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--tt-green)', fontSize: '2.5rem', marginBottom: 'var(--space-md)' }}>
                1
              </h3>
              <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--text-primary)' }}>
                Unbreakable Bond
              </h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                United as a family, stronger together than apart
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
