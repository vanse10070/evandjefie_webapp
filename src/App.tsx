import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Edjverse from './pages/Edjverse';
import Vizup from './pages/Vizup';
import Diam from './pages/Diam';
import Cabinet from './pages/Cabinet';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/edjverse" element={<Edjverse />} />
        <Route path="/vizup" element={<Vizup />} />
        <Route path="/diam" element={<Diam />} />
        <Route path="/cabinet" element={<Cabinet />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
    </Router>
  );
}

export default App;