import React from 'react';
import ProfilePicture from '../img/zahnen2.jpg';
import Connect from '../img/connect.svg';

const divStyle = {
	backgroundColor: 'white',
	width: '40%',
  textAlign: 'center'
};

const div2Style = {
  marginTop: '35%',
};

function Header() {
  return (
    <>
      <div style={divStyle}>
        <div style={div2Style}>
          <img src={ProfilePicture} alt="Zahnen" width="35%" className="rounded mx-auto d-block"></img>
          <h1>I'm Zahnen, and I'm a baby developer.</h1>
        </div>
        <div>
          <a href="mailto:hello@zahnen.co" target="_blank" rel="noreferrer"><img src={Connect} alt="Say Hi" /></a>
        </div>
      </div>
    </>
  );
}

export default Header;