import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';
import Menu from './components/Menu';

export default class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageAktif: 'home',
    };
  }
  handleButtonHome = () => {
    this.setState({
      pageAktif: 'home',
    });
  };
  handleButtonFlutter = () => {
    this.setState({
      pageAktif: 'flutter',
    });
  };
  handleButtonContactMe = () => {
    this.setState({
      pageAktif: 'contactme',
    });
  };
  render() {
    return (
      <div className="mainpage">
        <Header />
        <Menu
          home={this.handleButtonHome}
          flutter={this.handleButtonFlutter}
          contactme={this.handleButtonContactMe}
          pageAktif={this.state.pageAktif}
        />
        <Body pageAktif={this.state.pageAktif} />
      </div>
    );
  }
}
