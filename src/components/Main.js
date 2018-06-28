import React, { Component } from 'react';
import BankList from './BankList';

class Main extends Component {
  render() {
    return (
        <div className="main">
          <div className="wrapper">
            <div className="page_header">
              <div className="page_title">Closest ATMs</div>
              <div className="page_subtitle">A list of closest ATMs to your location</div>
            </div>
            <BankList />
          </div>
        </div>
    );
  }
}

export default Main;
