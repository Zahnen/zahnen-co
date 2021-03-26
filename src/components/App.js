import React from 'react';
import Header from './Header';
import SmallBody from './SmallBody';
import Body from './Body';
import Links from './Links';
import { useMediaQuery } from 'react-responsive'


const divStyle = {
  display: 'flex',
  overflowX: 'hidden',
  overflowY: 'hidden'
};

function App() {
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <>
      {isDesktopOrLaptop &&
      <>
        <div style={divStyle}>
          <Header />
          <Body />
        </div>
        <Links />
      </>}
      {isTabletOrMobile &&
        <>
        <SmallBody />
        </>}
    </>
  );
}

export default App;