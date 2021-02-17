import React from 'react';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Stacks from './components/Stacks';

function App() {
  return (
    <div>
      <Navigation />
      <Header />
      <Stacks />
      <Contact />
    </div>
  );
}

export default App;
