import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AppShellResponsive from './components/AppShellResponsive';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import RandoDesc from './pages/RandoDesc';
import SweltDesc from './pages/SweltDesc';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<AppShellResponsive content={<Home />} is404={false} />} />
        <Route
          path='about-me'
          element={<AppShellResponsive content={<AboutMe />} is404={false} />}
        />
        <Route
          path='projects/swelt-calc'
          element={<AppShellResponsive content={<SweltDesc />} is404={false} />}
        />
        <Route
          path='projects/anime-randomizer'
          element={<AppShellResponsive content={<RandoDesc />} is404={false} />}
        />
        <Route path='*' element={<AppShellResponsive content={<NotFound />} is404={true} />} />
      </Routes>
    </Router>
  );
}

export default App;
