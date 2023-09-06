import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/main';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
