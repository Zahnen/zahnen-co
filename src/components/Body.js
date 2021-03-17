import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


class Body extends React.Component {
  render(){
    return (
      <>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer offset={0} speed={0.5}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste libero quia, sint repudiandae eius mollitia enim accusantium nihil deleniti, quis sapiente, ea incidunt voluptate quisquam aperiam corrupti qui! Itaque.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste libero quia, sint repudiandae eius mollitia enim accusantium nihil deleniti, quis sapiente, ea incidunt voluptate quisquam aperiam corrupti qui! Itaque.</h1>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={0.5}>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iste libero quia, sint repudiandae eius mollitia enim accusantium nihil deleniti, quis sapiente, ea incidunt voluptate quisquam aperiam corrupti qui! Itaque.</h1>
          </ParallaxLayer>
        </Parallax>
      </>
    );
  }
}

export default Body;