import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page/Home';
import NotFound from './pages/not-found-page/NotFound';
import TestPage from './pages/test-page/TestPage';

function App() {
  return (
    <div className="App flex flex-col max-h-dvh h-dvh overflow-hidden">
        <Header />

        <Router>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/test' element={<TestPage />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
          
        </Router>
    </div>
  );
}

export default App;
