import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import WeCreate from './components/WeCreate';

function App() {
  return (
    <div>
      <Header/>
      <WeCreate/>
      <Banner/>
      <Footer/>
   
    </div>
  );
}

export default App;
