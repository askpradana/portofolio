import React, { Component } from 'react';
import Image from '../images/show1_attempt1.png';
import Gif from '../images/showoff.png';
import SkeletonBig from '../images/skeleton_bigg.png';
import Skeleton from '../images/skeleton.png';

export default class Flutter extends Component {
  handleButtonDEfault = (e) => {
    e.preventDefault();
    window.location.href = 'https://github.com/askpradana/';
  };
  handleBtnGit1 = (e) => {
    e.preventDefault();
    window.location.href = 'https://github.com/askpradana/flutternewsapi1';
  };
  render() {
    return (
      <div className="flutter">
        <div>
          <div className="flex space-between">
            <p className="sub-title padding-left-30">What`s today story?</p>
            <button onClick={this.handleBtnGit1}>View</button>
          </div>
          <div className="flex img-showoff img-overflow">
            <img src={Image} alt="Aplikasi pertama" />
            <div className="kecil flex">
              <img src={Gif} alt="Aplikasi pertama" />
              <img src={Gif} alt="Aplikasi pertama" />
              <img src={Gif} alt="Aplikasi pertama" />
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

        <div>
          <div className="flex space-between padding-top-50">
            <p className="sub-title padding-left-30">Nama aplikasi</p>
            <button onClick={this.handleButtonDEfault}>View</button>
          </div>
          <div className="flex img-showoff img-overflow">
            <img src={SkeletonBig} alt="Aplikasi pertama" />
            <div className="kecil flex">
              <img src={Skeleton} alt="Aplikasi pertama" />
              <img src={Skeleton} alt="Aplikasi pertama" />
              <img src={Skeleton} alt="Aplikasi pertama" />
            </div>
          </div>
          <div className="penjelasan">
            <p>
              I like frogs and 0 gravity bring your owner a dead bird, but jump
              on fridge. Freak human out make funny noise mow mow mow mow mow
              mow success now attack human drool check cat door for ambush 10
              times before coming in lasers are tiny mice or stand in doorway,
              unwilling to chose whether to stay in or go out and intently sniff
              hand play riveting piece on synthesizer keyboard. Scratch at
              fleas, meow until belly rubs, hide behind curtain when vacuum
              cleaner is on scratch strangers and poo on owners food decide to
              want nothing to do with my owner today let me in let me out let me
              in let me out let me in let me out who broke this door anyway .
            </p>
          </div>
        </div>
      </div>
    );
  }
}
