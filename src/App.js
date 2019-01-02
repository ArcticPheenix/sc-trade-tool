import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import PriceTable from './PriceTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PriceTable />
        <Footer />
      </div>
    );
  }
}

export default App;
