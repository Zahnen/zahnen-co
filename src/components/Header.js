import React from 'react';
import ProfilePicture from '../img/zahnen2.jpg';

const divStyle = {
	backgroundColor: 'darkgray',
	width: '40%',
	height: '100vh'
};

const div2Style = {
  marginTop: '35%'
};

function Header() {
  return (
    <>
      <div style={divStyle}>
        <div style={div2Style}>
          <img src={ProfilePicture} alt="Zahnen" width="25%" style={{borderRadius: "50%"}} className="img-fluid"></img>
          <h1>I'm Zahnen, and I'm a baby developer.</h1>
          <h3>I enjoy working collaboratively to bring ideas to life in digital spaces.</h3>
          <button className="btn btn-outline-dark rounded-pill">Let's Connect</button>
        </div>
        <div>
          <p>Github: @Zahnen</p>
          <p>LinkedIn: @Zahnen</p>
        </div>
      </div>
    </>
  );
}

export default Header;