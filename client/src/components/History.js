import React from 'react';
import {connect} from 'react-redux';
import '../styles/main.css';

class  History extends React.Component {


      renderContent() {
            switch(this.props.auth){
                  case null:
                        return;
                  case false:
                        return(<div  className="blue-text center">Empty!!! try squeezing some URL</div>);
                  default:
                        return(
                              this.props.auth.link.map( ({Link}) => {
                                    return <div className="blue-text center" style={{ margin:'2rem 0 0 0' }}>{Link}</div>
                              } )
                        );
                  }
            }

      render(){
            return(
                  
                  <div className="bodyHeight" style={{ margin:'8vh 0 0 0' }} >
                  <div className="white-text center" style={{ margin:'1rem 0 0 0' }} >Recent activities</div>
                              {this.renderContent()}
                  </div>
            );
            }
      };

function mapStateToProps( {auth, form} ) {
      return {auth, form};
}

export default connect(mapStateToProps) (History);

