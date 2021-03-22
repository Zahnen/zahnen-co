import React from 'react';
import Header from './Header';
import Body from './Body';
import Links from './Links';

const divStyle = {
  display: 'flex',
  flexDirection: 'row'
};

function App() {
  return (
    <>
      <div style={divStyle}>
        <Header />
        <Body />
      </div>
      <Links />
    </>
  );
}

export default App;