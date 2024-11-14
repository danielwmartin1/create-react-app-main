import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'; // Assuming you have a Main component for the main content
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
