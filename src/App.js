import './App.css';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { useState } from 'react';
import Nav from './nav';
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/About';
import Starfire from './pages/Starfire';
import Raven from './pages/Raven';
import Robin from './pages/Robin';
import Cyborg from './pages/Cyborg';
import Beastboy from './pages/Beastboy';
import Error from './pages/Error';

const NavBarLayout = ({ loggedInUser }) => (
  <>
    <Nav username={loggedInUser} />
    <Outlet />
  </>
);

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <Router>
      <Routes>
        <Route element={<NavBarLayout loggedInUser={loggedInUser} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
          <Route path="/about" element={<AboutUs setLoggedInUser={setLoggedInUser} />} />
          <Route path="/starfire" element={<Starfire setLoggedInUser={setLoggedInUser} />} />
          <Route path="/raven" element={<Raven setLoggedInUser={setLoggedInUser} />} />
          <Route path="/cyborg" element={<Cyborg setLoggedInUser={setLoggedInUser} />} />
          <Route path="/robin" element={<Robin setLoggedInUser={setLoggedInUser} />} />
          <Route path="/beastboy" element={<Beastboy setLoggedInUser={setLoggedInUser} />} />
          <Route path="*" element={<Error setLoggedInUser={setLoggedInUser} />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
