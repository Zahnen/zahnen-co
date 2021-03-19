import React from 'react';
import ProfilePicture from '../img/zahnen2.jpg';
import LinkedIn from '../img/linkedinmark.svg';
import GitHub from '../img/githubmark.svg';

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
          <button className="btn btn-outline-dark rounded-pill">Let's Connect</button>
        </div>
        <div>
          <img src={GitHub} alt="GitHub Logo" href="https://github.com/Zahnen" />
          <img src={LinkedIn} alt="LinkedIn Logo" href="https://www.linkedin.com/in/zahnen/" />
        </div>
      </div>
    </>
  );
}

export default Header;