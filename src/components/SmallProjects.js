import React from 'react';
import SousChef from '../img/SousChefLogo.svg';
import Guestly from '../img/GuestlyLogo.svg';
import Paro from '../img/ParoLogo.svg';

const divStyle = {
	width: '60%',
};

function SmallProjects() {
  return (
    <>
      <h1><b>Projects</b></h1>
      <hr />
      <div style={divStyle}>
        <div className="container" style={{marginTop: '5%', padding: '3%'}}>
          <a href="https://github.com/Zahnen/sous-chef" target="_blank" rel="noreferrer">
            <div style={{width: '20rem', marginLeft: '20px', marginRight: '20px'}}>
              <div className="card-body">
                <img src={SousChef} alt="Sous Chef Application Logo"/>
                <p className="card-text">Sous Chef simplifies the art of making food. Sous Chef is a straightforward recipe manager that helps declutter online recipes & simplify the process of keeping them.</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/Zahnen/Guestly.Solution" target="_blank" rel="noreferrer">
            <div style={{width: '20rem', marginLeft: '20px', marginRight: '20px'}}>
              <div className="card-body">
                <img src={Guestly} alt="Guestly Application Logo" style={{justifyContent: 'center'}}/>
                <p className="card-text">Guestly is a customer relationship management tool designed for the hospitality industry. Guestly allows hotel staff to manage records of guest stays, track revenue performance, and sort through historical guest and reservation data. Developed to boost the efficacy of marketing efforts, Guestly offers relevance and engagement with its users' target audience.</p>
              </div>
            </div>
          </a>
          <a href="https://github.com/Zahnen/paro" target="_blank" rel="noreferrer">
            <div style={{width: '20rem', marginLeft: '20px', marginRight: '20px'}}>
              <div className="card-body">
                <img src={Paro} alt="Paro Application Logo"/>
                <p className="card-text">Paro exists to bridge the preferential rift between analog and digital listening. Paro allows users to discover new music digitally to connect with physically.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

export default SmallProjects;