import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import testData from './commodity_data';

export default class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.data.bind(this);
    this.columns = this.columns.bind(this);
  }

  data() {
    // TODO - Basic data gathering function
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
      filterable
    />
    );
  };
}