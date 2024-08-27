import React from 'react';

import bannerImg from '../../assets/imagens/banner.png';

import './style.scss';

function Banner() {
  return (
    <header className="banner-header">
      <img src={bannerImg} alt="Banner do site" />
    </header>
  );
}

export default Banner;
