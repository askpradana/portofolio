import React, { Component } from 'react';

import { Img21, Img22, Img23, Img24 } from '../images/Imageindex';

function HandleButtonViewApp1() {
  window.location.href = 'https://github.com/askpradana/flutternewsapi1';
}
export default class Flutter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img21State: false,
      img22State: false,
      Img23State: false,
      Img24State: false,
    };
  }

  handleimg21State = () => {
    this.setState({
      img21State: !this.state.img21State,
    });
  };

  handleimg22State = () => {
    this.setState({
      img22State: !this.state.img22State,
    });
  };

  handleimg23State = () => {
    this.setState({
      img23State: !this.state.img23State,
    });
  };

  handleimg24State = () => {
    this.setState({
      img24State: !this.state.img24State,
    });
  };

  render() {
    return (
      <div className="flutter">
        <div>
          <div className="flex space-between">
            <p className="sub-title padding-left-30">
              #1 -- What`s today story?
            </p>
            <button
              onClick={HandleButtonViewApp1}
              className="css-button-retro--yellow"
            >
              View
            </button>
          </div>
          <div className="flex img-showoff img-overflow">
            <div className="kecil flex">
              <img
                src={Img21}
                alt="Aplikasi pertama"
                onClick={this.handleimg21State}
              />
              {this.state.img21State && (
                <dialog
                  className="dialog img"
                  open
                  onClick={this.handleimg21State}
                >
                  <img src={Img21} alt="gambar 1 aplikasi 1 " />
                </dialog>
              )}
            </div>

            <div className="kecil flex">
              <img
                src={Img22}
                alt="Aplikasi pertama"
                onClick={this.handleimg22State}
              />
              {this.state.img22State && (
                <dialog
                  className="dialog img"
                  open
                  onClick={this.handleimg22State}
                >
                  <img src={Img22} alt="gambar 1 aplikasi 1 " />
                </dialog>
              )}
            </div>

            <div className="kecil flex">
              <img
                src={Img23}
                alt="Aplikasi pertama"
                onClick={this.handleimg23State}
              />
              {this.state.img23State && (
                <dialog
                  className="dialog img"
                  open
                  onClick={this.handleimg23State}
                >
                  <img src={Img23} alt="gambar 1 aplikasi 1 " />
                </dialog>
              )}
            </div>

            <div className="kecil flex">
              <img
                src={Img24}
                alt="Aplikasi pertama"
                onClick={this.handleimg24State}
              />
              {this.state.img24State && (
                <dialog
                  className="dialog img"
                  open
                  onClick={this.handleimg24State}
                >
                  <img src={Img24} alt="gambar 1 aplikasi 1 " />
                </dialog>
              )}
            </div>
          </div>
          <div className="penjelasan">
            <p>
              Aplikasi untuk membaca berita, menggunakan APi dari NewsAPI yang
              didapatkan gratis dari website resmi-nya, pengguna dapat membaca
              berita dari beberapa sumber hanya dengan satu aplikasi yang
              menghemat ruang penyimpanan.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
