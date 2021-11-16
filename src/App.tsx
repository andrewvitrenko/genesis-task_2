import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Feed } from './components/Feed';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" />
      </Routes>
    </Router>
  );
}

export default App;
