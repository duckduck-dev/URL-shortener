import React from 'react';
import '../styles/main.css';

const Footer = () => {
      return(
            <div style={{ marginTop:'10rem' }}>
            <hr className="horizontalLine"/>
                    <footer className="center" style={{ paddingBottom:'1vw' }} >
                          <a class="grey-text text-lighten-3" href="https://github.com/duckduck-dev" style={{fontSize:'2rem'}}><i  class='fab fa-github' ></i></a>
                              <h5 class="white-text">contact</h5>
                              <a class="blue-text text-lighten-2" href="mailto:soundarsurya58@gmail.com?subject=contact" >soundarsurya58@gmail.com</a>
                    </footer>
            </div>
      );
};

export default Footer;
