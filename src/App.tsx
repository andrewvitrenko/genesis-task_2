import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Header } from './components/Header';
import { Feed } from './components/Feed';
import { Profile } from './components/Profile';
import { Error } from './components/Error';
import { Store } from './interfaces';

function App() {
  const { error } = useSelector((store: Store) => store);

  return (
    <Router>
      <Header />
      {error ? <Error /> : <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>}
    </Router>
  );
}

export default App;
