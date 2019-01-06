import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class PriceTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.columns = this.columns.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/v1/pricetable')
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => this.setState({ data }));
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
        accessor: 'buy_price',
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
        accessor: 'sell_price',
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
      data={this.state.data}
      columns={this.columns()}
      className="-striped -highlight"
      filterable
    />
    );
  };
}