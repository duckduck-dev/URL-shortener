import {FETCH_USER, FETCH_URL} from '../actions/type';

export default function(state=null, action) {
      switch(action.type){
            case FETCH_USER:
                  return action.payload || false;

            case FETCH_URL:
                  return action.payload || false;

            default:
                  return state;
      }
};
