import { Outlet } from 'react-router-dom';
import React from 'react';

// Import components
import Header from './components/UI/Header';
import Navigation from './components/Nav';
import Footer from './components/UI/Footer';
import background from './assets/graph-paper.png'

// Display components via props on page
function App() {
  return (
    <div style={{  backgroundImage: `url(${background})` }}>
      <Header />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    
    </div>
  );
}

export default App