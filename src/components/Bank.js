import React, { Component } from 'react';
import logo from '../bankLogo.svg';
import mapMarker from '../mapMarker.svg';

class Bank extends Component {

  handleClick = (event) => {
    let latlon = this.props.bank.GeoLocation.GeographicCoordinates.Latitude + ',' + this.props.bank.GeoLocation.GeographicCoordinates.Longitude;
    let mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + latlon;

    window.open(mapUrl, '_blank');
  }

  render() {
    const {bank} = this.props;
    return (
      <li className='bank_list_item' onClick={this.handleClick}>
        <div className="bank_logo_wrapper">
          <img src={logo} className="bank_logo" alt={bank.bankName} />
          </div>
        <div className="bank_details">
          <div className='bank_name'>{bank.bankName + ', ' + bank.Country}</div>
          <div className='bank_address'>{bank.fullAddress}</div>
        </div>
        <div className="bank_location">
          <img src={mapMarker} className="map_marker" alt="location" />
          </div>
      </li>
    );
  }
}

export default Bank;
