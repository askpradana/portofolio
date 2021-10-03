import React, { Component } from 'react';
import Flutter from '../Flutter';
import Home from './Home';
import ContactMe from './Contactme';

export default class Body extends Component {
  render() {
    if (this.props.pageAktif === 'home') {
      return (
        <div>
          <Home />
        </div>
      );
    } else if (this.props.pageAktif === 'flutter') {
      return (
        <div>
          <Flutter />
        </div>
      );
    } else if (this.props.pageAktif === 'contactme') {
      return (
        <div>
          <ContactMe />
        </div>
      );
    } else {
      return <div>Ini default</div>;
    }
  }
}
