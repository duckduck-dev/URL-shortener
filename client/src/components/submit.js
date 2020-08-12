import React from 'react';
import { connect } from 'react-redux';
import  * as actions from '../actions';


class Fields extends React.Component{
      
      state = {   squeezedURL: '', 
                        textState:'click to copy.'
                  };

      copyText = () => {
            navigator.clipboard.writeText(this.state.squeezedURL);
            this.setState( { textState : 'Link copied.' } );
            return 
            }



      render() {
            const val = this.props.val;
            return(
                  <div className="center">
                        <input style={ { color:'#333339', background:'rgb(40,184,285)', width:'5rem', border:'0px', borderRadius:'5px', height:'3rem'} } type="submit" classname="waves-effect waves-light btn-large" value="squeeze" onClick={ () => this.props.submitData(val).then(() => this.props.fetchUser())
                              .then( () => {
                                    this.props.auth.link.map( ( { Link, short } ) => {
                                          const { value } = val;
                                          if(Link === value) {
                                                console.log(Link, short);
                                                this.setState( { squeezedURL: short } );
                                          }
                                    });    
                              } 
                              ) }>
                              </input>
                              <input type="text" value={this.state.squeezedURL}  onClick={ this.copyText }  className="blue-text center" style={{ fontSize:'3vh', margin:'2rem 0 0 0 ' , cursor: 'copy'}} />
                              
                              <p className="blue-text center" style={{ fontSize:'2.5vh' }} >{this.state.textState}</p>
                              <p className="white-text" style={{ fontSize:'2.5vh', margin:'15vh 0 0 0'}} >Guide:</p>
                              <p className="white-text " style={{ fontSize:'2.5vh' }} >-Paste your URL</p>
                              <p className="white-text" style={{ fontSize:'2.5vh' }} >-Wait a second</p>
                              <p className="white-text" style={{ fontSize:'2.5vh' }} >-Click to copy the squeezed URL</p>
                  </div>
            );
      }
};

function mapStateToProps( { auth } ){
      return { auth };
}

export default connect(mapStateToProps, actions) (Fields);
