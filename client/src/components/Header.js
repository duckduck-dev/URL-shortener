import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../styles/main.css';
import { Link } from 'react-router-dom';


class Header extends Component {
      renderContent(){
            switch(this.props.auth) {
                        case null:
                              return;
                        case false:
                              return(
                                    <li key="1"><a href="/auth/google" style={{fontSize:'1.3rem', padding:'1.3rem'}}>Login</a></li>
                              );
                        default:
                           //this.props.auth.link.map( ({Link}) => console.log(Link));
                              return [
                                    <React.Fragment> 
                                    <li key="2"><a href="/history" style={{fontSize:'1.3rem', padding:'1.3rem'}}>History</a></li>    
                                    <li key="3"><a href="/api/logout" style={{fontSize:'1.2rem', padding:'1.3rem'}}>Logout</a></li>
                                    </React.Fragment>
                              ];
                  }
            } 
      render() {
            return(
                  <nav className="navBar">
                        <div className="nav-wrapper  light-blue lighten-1">
                        <Link to={this.props.auth ? '/Home' : '/'} >
                        <div className="LogoFont brand-logo left " style={{padding: '1.5rem 0 0 1.6rem'}}>
                              <i class='fab fa-speakap' style={{fontSize:'3rem', marginTop:'0.3rem'}}></i>
                              <div style={{position:'absolute', margin:'0 0 0 2.8rem '}} className="hide-on-small-only">queeze</div>
                        </div>
                        </Link>      
                        <ul className="right" style={{padding:'0.3rem 0 0 0'}}>
                                          {this.renderContent()}
                              </ul>
                        </div>
                  </nav>
            );
      }  
}

function mapStateToProps( {auth} ) {
      return {auth};
}

export default connect(mapStateToProps) (Header);