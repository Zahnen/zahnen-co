import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Projects from './Projects';
import Tech from './Tech';
import About from './About';
import Personal from './Personal';
import Arrow from './Arrow';


class Body extends React.Component {
  render(){
    return (
      <>
        <div>
          <Parallax ref={ref => (this.parallax = ref)} pages={2.5}>
            <ParallaxLayer offset={0} speed={0}>
              <About />
            </ParallaxLayer>
            <ParallaxLayer offset={.7} speed={-0.1}>
              <Arrow />
            </ParallaxLayer>
            <ParallaxLayer offset={.8} speed={.6}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <Tech />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1} speed={.4}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <Projects />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.8} speed={.6}>
              <Personal />
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
    );
  }
}

export default Body;