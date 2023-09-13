import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/main';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={
          <ProtectedRoute 
            errorPage={<LoginPage />}
            targetPage={<MainPage />}
          />
        }>
          <Route path='' element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
