import React from 'react'

const demoGif = {
	backgroundColor: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)'
};

function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <hr />
      <div className="square">
      <a href="https://github.com/Zahnen/sous-chef"><img style={demoGif} src="https://media4.giphy.com/media/7IZaOmU17vw6S603yf/giphy.gif" alt="Sous Chef Application Demo" /></a>
      </div>
      <div className="square">
      <a href="https://github.com/Zahnen/sous-chef"><img style={demoGif} src="https://media4.giphy.com/media/7IZaOmU17vw6S603yf/giphy.gif" alt="Sous Chef Application Demo" /></a>
      </div>
    </>
  );
}

export default Projects;