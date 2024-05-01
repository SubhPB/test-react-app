import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Routes, Route, } from 'react-router-dom';
import Home from './pages/home-page/Home';
import NotFound from './pages/not-found-page/NotFound';
import Te

function App() {
  return (
    <div className="App flex flex-col">
        <Header />
        <Routes>

        </Routes>
    </div>
  );
}

export default App;
