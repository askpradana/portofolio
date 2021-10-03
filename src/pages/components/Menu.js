/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Flutter from '../Flutter';

export default class Menu extends Component {
  render() {
    return (
      <div className="flex center-horizontal">
        <div onClick={this.props.home} className="padding-right-10 clickable">
          <p
            className={
              this.props.pageAktif === 'home' ? 'link-active' : 'link-inactive'
            }
          >
            Home
          </p>
        </div>
        <div
          onClick={this.props.flutter}
          className="padding-right-10 clickable"
        >
          <p
            className={
              this.props.pageAktif === 'flutter'
                ? 'link-active'
                : 'link-inactive'
            }
          >
            Flutter
          </p>
        </div>
        <div onClick={this.props.contactme} className="clickable">
          <p
            className={
              this.props.pageAktif === 'contactme'
                ? 'link-active'
                : 'link-inactive'
            }
          >
            Contact me
          </p>
        </div>
      </div>
    );
  }
}
