import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Fields from './submit';



class PostLink extends React.Component{

      render() {
            return(
                  <div>
                        <input  {...this.props.input} style={{ color:'blue', fontSize:'3vh' }} className="blue-text center"/>
                        <Fields val={this.props.input} style={{ color:'blue' }}/>
                  </div>
            );
}
};

function mapStateToProps( { auth } ){
      return { auth };
}

export default connect( mapStateToProps, actions) (PostLink);





/*export default  connect( mapStateToProps, actions)  ( ( { input } ) => {
      return(
            <div>
                  <input  {...input}/>
                 <SubmitButton val={input} />
                  <input value="d"/>
            </div>
      );
} );*/