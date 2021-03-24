import React from 'react';
import Connect from '../img/letsconnect.png';

const divStyle = {
	backgroundColor: '#f6eee3',
	width: '40%',
  textAlign: 'center'
};

const div2Style = {
  marginTop: '25%',
};

function Header() {
  return (
    <>
      <div style={divStyle}>
        <div style={div2Style}>
          <p style={{fontSize: '62px', fontWeight: 'bold'}}>I'm Zahnen,</p>
          <h1>and I'm a baby developer.</h1>
          <a href="mailto:hello@zahnen.co" target="_blank" rel="noreferrer"><img className="icon" src={Connect} alt="Say Hi"style={{width: "55%", marginTop: '3%'}} /></a>
        </div>
      </div>
    </>
  );
}

export default Header;