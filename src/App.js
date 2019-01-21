import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
// import PriceTable from './PriceTable';
import SmartDataTable from 'react-smart-data-table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <PriceTable /> */}
        <SmartDataTable
          data='http://localhost:4000/v1/pricetable'
          dataKey='data'
          name='test-table'
          className='ui compact selectable table'
          perPage={20}
          sortable
        />
        <Footer />
      </div>
    );
  }
}

export default App;
