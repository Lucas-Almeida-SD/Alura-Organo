import React from 'react';

import facebookIcon from '../../assets/imagens/fb.png';
import twitterIcon from '../../assets/imagens/tw.png';
import instagramIcon from '../../assets/imagens/ig.png';
import logoIcon from '../../assets/imagens/logo.png';

import './style.scss';

function Footer() {
  return (
    <footer className="page-footer">
      <div className="social-media-container">
        <img className="social-media-icon" src={facebookIcon} alt="Ícone do Facebook" />
        <img className="social-media-icon" src={twitterIcon} alt="Ícone do Twitter" />
        <img className="social-media-icon" src={instagramIcon} alt="Ícone do Instagram" />
      </div>
      <img className="logo-icon" src={logoIcon} alt="Ícone da Logo" />
      <p className="developer text">Desenvolvido por Lucas-Almeida-SD.</p>
    </footer>
  );
}

export default Footer;
