import React from 'react';
import SmallProjects from './SmallProjects';
import Tech from './Tech';
import About from './About';
import Personal from './Personal';
import Header from './Header';

function SmallBody() {
    return (
      <>
        <div className="container" style={{textAlign: 'center !important'}}>
          <Header />
          <About />
          <Tech />
          <SmallProjects />
          <Personal />
        </div>
      </>
    );
  }

export default SmallBody;