import React from 'react';
import Header from './Header';
import Body from './Body';

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
    </>
  );
}

export default App;