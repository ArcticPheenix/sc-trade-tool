import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.columns = this.columns.bind(this);
  }

  data() {
    // TODO - Basic data gathering function
    const dataArray = [
      {
        location: '[Daymar] ArcCorp Mining Area 141',
        commodity: 'Agricium',
        buyPrice: 0.0,
        sellPrice: 24.45
      },
      {
        location: '[Daymar] ArcCorp Mining Area 141',
        commodity: 'Altruciatoxin',
        buyPrice: 11.80,
        sellPrice: 0.0
      },
      {
        location: '[Yela] ArcCorp Mining Area 157',
        commodity: 'Altruciatoxin',
        buyPrice: 11.81,
        sellPrice: 0.0
      },
      {
        location: '[Yela] ArcCorp Mining Area 157',
        commodity: 'Chlorine',
        buyPrice: 0.0,
        sellPrice: 1.44
      }
    ];
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