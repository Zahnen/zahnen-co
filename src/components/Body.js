import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons';
import Projects from './Projects';

class Body extends React.Component {
  render(){
    return (
      <>
        <div>
          <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={0} speed={0.1}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <h1>About</h1>
                <hr />
                <h3>I'm a web developer based in Portland, Oregon. I enjoy working collaboratively to bring ideas to life in digital spaces.</h3>
                <h1>Tech</h1>
                <hr />
                <h3>I have experience with ReactJS, C#, JavaScript, Node.js, ASP.NET, MySQL, NoSQL, REST APIs, Git/GitHub</h3>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={.8} speed={.4}  style={{backgroundColor: 'white' }}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <h1>PlaceHolder</h1>
                <hr />
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.6} speed={.6} style={{backgroundColor: 'white' }}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <Projects />
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
    );
  }
}

export default Body;