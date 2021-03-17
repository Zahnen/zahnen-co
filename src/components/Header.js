import React from 'react';

const divStyle = {
	backgroundColor: 'darkgray',
	width: '30%',
	height: '100vh'
};

function Header() {
  return (
    <>
      <div style={divStyle}>
        <h1>Zahnen Garner</h1>
        <p>Github: @Zahnen</p>
        <p>LinkedIn: @Zahnen</p>
      </div>
    </>
  );
}

export default Header;