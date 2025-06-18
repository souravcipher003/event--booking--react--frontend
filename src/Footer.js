// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: 'white',
      textAlign: 'center',
      padding: '20px 10px',
      marginTop: '40px',
      fontSize: '14px'
    }}>
      <p>© 2025 India Events. All rights reserved.</p>
      <p>
        Follow us on{' '}
        <a href="https://x.com" target="_blank" rel="noreferrer" style={{color:'#1DA1F2', textDecoration:'none'}}>X</a>,{' '}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{color:'#3b5998', textDecoration:'none'}}>Facebook</a>,{' '}
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{color:'#E4405F', textDecoration:'none'}}>Instagram</a>
      </p>
    </footer>
  );
}

export default Footer;
