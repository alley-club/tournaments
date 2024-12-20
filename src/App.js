import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChessClub from './components/ChessClub';
import Participants from './components/Participants';
import About from './About';
import Tournaments from './Tournaments';
import Schedule from './Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChessClub />} />
        <Route path="/participants" element={<Participants />} />
        <Route path="/about" element={<About />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
}

export default App;
