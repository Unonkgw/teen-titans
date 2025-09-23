import './styles/theme.css';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Nav from './nav';
import LoginModal from './components/LoginModal';
import LoadingScreen from './components/LoadingScreen';
import ThemeSwitcher from './components/ThemeSwitcher';
import ParticleSystem from './components/ParticleSystem';
import EasterEggs from './components/EasterEggs';
import MouseEffects from './components/MouseEffects';
import AdvancedAnimations from './components/AdvancedAnimations';
import Home from './pages/Home';
import About from './pages/About';
import Starfire from './pages/Starfire';
import Raven from './pages/Raven';
import Robin from './pages/Robin';
import Cyborg from './pages/Cyborg';
import Beastboy from './pages/Beastboy';
import Error from './pages/Error';

const NavBarLayout = ({ loggedInUser, onLoginClick, onLogout }) => (
  <AdvancedAnimations>
    <Nav 
      username={loggedInUser} 
      onLoginClick={onLoginClick}
      onLogout={onLogout}
    />
    <Outlet />
  </AdvancedAnimations>
);

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState('default');

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginClose = () => {
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    setLoggedInUser("");
  };

  
  useEffect(() => {
    const handleOpenLogin = () => {
      setIsLoginModalOpen(true);
    };
    
    window.addEventListener('openLogin', handleOpenLogin);
    return () => window.removeEventListener('openLogin', handleOpenLogin);
  }, []);

  
  useEffect(() => {
    const handleThemeChange = () => {
      const savedTheme = localStorage.getItem('titans-theme') || 'default';
      setCurrentTheme(savedTheme);
    };
    
    handleThemeChange(); // Initial load
    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      {/* Main App */}
      <Router>
        
        <ParticleSystem type={currentTheme} density="medium" />
        
        
        <ThemeSwitcher />
        
        
        <EasterEggs />
        
        
        <MouseEffects />
        
        <Routes>
          <Route element={
            <NavBarLayout 
              loggedInUser={loggedInUser}
              onLoginClick={handleLoginClick}
              onLogout={handleLogout}
            />
          }>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/starfire" element={<Starfire />} />
            <Route path="/raven" element={<Raven />} />
            <Route path="/cyborg" element={<Cyborg />} />
            <Route path="/robin" element={<Robin />} />
            <Route path="/beastboy" element={<Beastboy />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        
        
        <LoginModal 
          isOpen={isLoginModalOpen}
          onClose={handleLoginClose}
          setLoggedInUser={setLoggedInUser}
        />
      </Router>
    </>
  );
}

export default App;
