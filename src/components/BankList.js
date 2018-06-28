import React, { Component } from 'react';
import Bank from './Bank';
import { getBanks } from '../services/BankApi';

class BankList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      banks: []
    }
  }

  static defaultProps = {
    banks: []
  }

  componentDidMount(){
    getBanks().then(data => this.setState({banks: data}));
  }

  render() {
    return (
      <ul className='bank_list'>
        {this.state.banks.map((bank, index) => {
          return <Bank key={index} bank={bank}/>;
        })}
      </ul>
    );
  }
}

export default BankList;
