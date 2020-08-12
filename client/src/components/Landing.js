import React, { Component } from 'react';
import '../styles/main.css';

class Landing extends Component {
      render() {
            return(
                  <div  className="bodyHeight">
                        <div className="white-text center" style={{ paddingTop:'17vh', fontSize:'4.9vh'}}>SQUEEZE YOUR URL</div> 
                        <div>
                              <h5 className="white-text center" style={{ paddingLeft:'0vh'}}>Simple and fast URL shortener!</h5>
                              <div className="center row" style={{paddingTop:'2rem 0 0 0', margin:'10vw 0 0 0'}}>
                              <i className="far fa-thumbs-up col s12 m12 l4 " style={{fontSize:'4rem', color:'#2d70b3', paddingTop:'1rem'}}><p style={{color:'#2196f3', fontFamily:'monospace', fontSize:'1rem'}}>Easy</p></i>
                              
                              <i class='fas fa-lock col s12 m12 l4 ' style={{fontSize:'4rem', color:'#2d70b3', paddingTop:'1rem'}}> <p style={{color:'#2196f3', fontFamily:'monospace', fontSize:'1rem'}}>Secure</p></i>
                             
                              <i class='fas fa-fist-raised col s12 m12 l4' style={{fontSize:'4rem', color:'#2d70b3', paddingTop:'1rem'}}><p style={{color:'#2196f3', fontFamily:'monospace', fontSize:'1rem'}}>Reliable</p></i>
      
                              </div>
                        </div>
                  </div>
            );
      }
}

export default Landing;

