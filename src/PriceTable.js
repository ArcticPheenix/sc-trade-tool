import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import testData from './commodity_data';
import sqlite3 from 'sqlite3';
// import fs from 'fs';

export default class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.columns = this.columns.bind(this);
    this.sqlsetup = this.sqlsetup.bind(this);
  }

  sqlsetup(file) {
    // if (file === "") {
    //   console.log("[ERROR] No database file specified!");
    //   return;
    // }
    const db = new sqlite3.Database(file);
    const stmt = db.prepare('SELECT * FROM v_prices');
    const rows = stmt.all((err, rows) => {
      rows.forEach(row => {
        console.log(row);
      });
    });
  }

  data() {
    // TODO - Basic data gathering function
    // fs.open('database/scdata.db')
    this.sqlsetup('database/scdata.db');
    const dataArray = testData;
    return dataArray;
  }

  columns() {
    const columnDefinitions = [
      {
        Header: 'Location',
        accessor: 'location'
      },
      {
        Header: 'Commodity',
        accessor: 'commodity'
      },
      {
        Header: 'Buy Price',
        accessor: 'buyPrice',
        Cell: props => (
          <div
            style={{
              color: props.value > 0.0 ? '#16ca1f' : 'red'
          }}>{props.value}
          </div>
        )
      },
      {
        Header: 'Sell Price',
        accessor: 'sellPrice',
        Cell: props => (
          <div
            style={{
              color: props.value > 0.0 ? '#16ca1f' : 'red'
          }}>{props.value}
          </div>
        )
      }
    ];
    return columnDefinitions;
  }

  render() {
    return (
    <ReactTable
      data={this.data()}
      columns={this.columns()}
      className="-striped -highlight"
    />
    );
  };
}