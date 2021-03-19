import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

class Body extends React.Component {
  render(){
    return (
      <>
        <div>
          <Parallax ref={ref => (this.parallax = ref)} pages={3}>
            <ParallaxLayer offset={0} speed={0.5}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <h1>About</h1>
                <h3>I'm a web developer based in Portland, Oregon. I enjoy working collaboratively to bring ideas to life in digital spaces.</h3>
                <hr />
                <h1>Tech</h1>
                <h3>I have experience with ReactJS, C#, JavaScript, Node.js, ASP.NET, MySQL, NoSQL, REST APIs, Git/GitHub</h3>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0.8} speed={0.5}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste libero quia, sint repudiandae eius mollitia enim accusantium nihil deleniti, quis sapiente, ea incidunt voluptate quisquam aperiam corrupti qui! Itaque.</h1>
              </div>
            </ParallaxLayer>
            <ParallaxLayer offset={1.6} speed={0.5}>
              <div style={{marginTop: '15%', width: "60%"}}>
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste libero quia, sint repudiandae eius mollitia enim accusantium nihil deleniti, quis sapiente, ea incidunt voluptate quisquam aperiam corrupti qui! Itaque.</h1>
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      </>
    );
  }
}

export default Body;