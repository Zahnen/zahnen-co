import React from 'react';
import LinkedIn from '../img/linkedinmark.svg';
import GitHub from '../img/githubmark.svg';

const divStyle = {
	position: 'fixed',
  bottom: '3vh',
  right: '3vw'
};

function Links() {
  return (
    <>
    <div style={divStyle}>
      <a href="https://github.com/Zahnen" target="_blank" rel="noreferrer"><img src={GitHub} alt="GitHub Logo"/></a>
      <a href="https://www.linkedin.com/in/zahnen/" target="_blank" rel="noreferrer"><img src={LinkedIn} alt="LinkedIn Logo" /></a>
    </div>
    </>
  );
}

export default Links;