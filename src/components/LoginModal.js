import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/teen.webp";

function LoginModal({ isOpen, onClose, setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const users = {
    robin: { password: "robinpw", displayName: "Robin" },
    starfire: { password: "starfirepw", displayName: "Starfire" },
    raven: { password: "ravenpw", displayName: "Raven" },
    beastboy: { password: "beastboypw", displayName: "Beast Boy" },
    cyborg: { password: "cyborgpw", displayName: "Cyborg" }
  };

  useEffect(() => {
    if (username && users[username]) {
      setTitle(`Welcome back, ${users[username].displayName}!`);
      setError("");
    } else if (username) {
      setTitle("");
      setError("Hero not found");
    } else {
      setTitle("");
      setError("");
    }
  }, [username]);

  // Reset form when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setUsername("");
      setPassword("");
      setTitle("");
      setError("");
    }
  }, [isOpen]);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;
    } else {
      document.body.classList.remove('modal-open');
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.top = '';
    };
  }, [isOpen]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (users[username] && users[username].password === password) {
      setLoggedInUser(users[username].displayName);
      onClose();
      // Optional: navigate to home or stay on current page
      // navigate("/home");
    } else {
      setError("Invalid credentials. Try again, hero!");
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="modal-backdrop"
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 14, 26, 0.8)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-md)',
        animation: 'fadeIn 0.3s ease-out',
        overflow: 'hidden'
      }}
    >
      <div 
        className="tt-form modal-content"
        style={{ 
          position: 'relative',
          maxWidth: '450px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'visible',
          animation: 'slideInUp 0.3s ease-out',
          margin: 'auto'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 'var(--space-md)',
            right: 'var(--space-md)',
            background: 'var(--glass-light)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-full)',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            transition: 'all var(--transition-base)',
            zIndex: 1001
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'var(--glass-medium)';
            e.target.style.color = 'var(--text-primary)';
            e.target.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'var(--glass-light)';
            e.target.style.color = 'var(--text-secondary)';
            e.target.style.transform = 'scale(1)';
          }}
        >
          ✕
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
          <div style={{ 
            position: 'relative',
            display: 'inline-block',
            marginBottom: 'var(--space-lg)'
          }}>
            <img 
              src={logo} 
              alt="Teen Titans Logo" 
              className="tt-float"
              style={{ 
                width: '180px', 
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))',
                position: 'relative',
                zIndex: 2
              }} 
            />
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '220px',
              height: '220px',
              background: 'radial-gradient(circle, rgba(0,172,238,0.2) 0%, transparent 70%)',
              borderRadius: '50%',
              animation: 'pulse 3s ease-in-out infinite',
              zIndex: 1
            }}></div>
          </div>
          
          <h1 style={{ 
            marginBottom: 'var(--space-sm)',
            background: 'var(--gradient-hero)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            textShadow: '0 0 30px rgba(0,172,238,0.3)'
          }}>
            Access Titans Tower
          </h1>
          
          <p style={{ 
            color: 'var(--text-secondary)', 
            margin: 0,
            fontSize: '1rem',
            opacity: 0.8
          }}>
            🔐 Hero Authentication Portal
          </p>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-sm)',
            marginTop: 'var(--space-md)',
            flexWrap: 'wrap'
          }}>
            {['🦸‍♂️', '👑', '🔮', '🦎', '🤖'].map((emoji, index) => (
              <div key={index} className="tt-pulse" style={{
                fontSize: '1.2rem',
                animationDelay: `${index * 0.3}s`,
                opacity: 0.6
              }}>
                {emoji}
              </div>
            ))}
          </div>
        </div>

        {/* Status Messages */}
        {title && (
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--space-lg)',
            padding: 'var(--space-md)',
            background: 'rgba(0, 172, 238, 0.1)',
            border: '1px solid var(--tt-cyan)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--tt-cyan)'
          }}>
            <strong>🎉 {title}</strong>
          </div>
        )}

        {error && (
          <div style={{ 
            textAlign: 'center', 
            marginBottom: 'var(--space-lg)',
            padding: 'var(--space-md)',
            background: 'rgba(236, 27, 36, 0.1)',
            border: '1px solid var(--tt-red)',
            borderRadius: 'var(--radius-md)',
            color: 'var(--tt-red)'
          }}>
            <strong>⚠️ {error}</strong>
          </div>
        )}
        
        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="tt-form__group">
            <label className="tt-form__label">
              🦸‍♂️ Hero Username
            </label>
            <input
              type="text"
              className="tt-form__input"
              placeholder="Enter your hero name (e.g., robin)"
              value={username}
              required
              maxLength={20}
              onChange={(e) => setUsername(e.target.value.toLowerCase())}
              autoFocus
            />
            <small style={{ 
              color: 'var(--text-muted)', 
              fontSize: '0.8rem',
              display: 'block',
              marginTop: 'var(--space-xs)'
            }}>
              Try: robin, starfire, raven, beastboy, or cyborg
            </small>
          </div>

          <div className="tt-form__group">
            <label className="tt-form__label">
              🔐 Secret Password
            </label>
            <input
              type="password"
              className="tt-form__input"
              placeholder="Enter your password"
              value={password}
              required
              maxLength={20}
              onChange={(e) => setPassword(e.target.value)}
            />
            <small style={{ 
              color: 'var(--text-muted)', 
              fontSize: '0.8rem',
              display: 'block',
              marginTop: 'var(--space-xs)'
            }}>
              Hint: [heroname]pw (e.g., robinpw)
            </small>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: 'var(--space-md)',
            marginTop: 'var(--space-xl)'
          }}>
            <button 
              type="button"
              onClick={onClose}
              className="tt-btn tt-btn--ghost" 
              style={{ flex: 1 }}
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="tt-btn tt-btn--primary" 
              style={{ flex: 2 }}
            >
              🚀 Access Tower
            </button>
          </div>
        </form>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: 'var(--space-xl)',
          paddingTop: 'var(--space-lg)',
          borderTop: '1px solid var(--border-color)'
        }}>
          <p style={{ 
            color: 'var(--text-muted)', 
            fontSize: '0.85rem',
            margin: 0 
          }}>
            New to the team? Explore the <strong>About</strong> page to learn more!
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideInUp {
          from { 
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to { 
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}

export default LoginModal;
