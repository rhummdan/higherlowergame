import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Play } from './pages/play';
import { Leaderboard } from './pages/leaderboard/leaderboard.tsx';
import { Navbar } from './components/navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Play />} />
          <Route path="/leaderboard" element={<Leaderboard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
