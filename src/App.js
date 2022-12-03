import React from 'react';
import './App.css';
import './Header.css'
import './Navbar.css'
import './Section.css'
import './Footer.css'
import Header from './Header';
import Navbar from './Navbar';
import Section from './Section';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from './Footer';


const App = () => {
  
  return (
    <div className='wrapper'>
      <Header />
      <Navbar />
      <Section />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  )
}

export default App;
