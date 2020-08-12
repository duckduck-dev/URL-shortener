import React, { Component } from 'react';
import '../styles/main.css';
import { reduxForm , Field} from 'redux-form';
import PostLink from './postLink';

class Home extends Component {

      renderContent(){
            return(
                  <div>
                        <Field type="text" name="title" component={PostLink} />
                  </div>
            );
      }
      
      render() {
            return(     
                  <div className="bodyHeight" style={{ margin:'7vw' }}>          
                  <form onSubmit={ this.props.handleSubmit(() => {})} style={{ margin:'10vh 0 0 0'}} >  
                              {this.renderContent()}
                  </form>
                     </div>
            );
      }
}

export default  reduxForm({
      form : 'inputForm'
}) (Home);
