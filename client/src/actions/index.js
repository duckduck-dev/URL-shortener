import axios from 'axios';
import {FETCH_USER, FETCH_URL} from './type';

export const  fetchUser = () => async dispatch => {
            const res = await axios.get('/api/current_user');
            dispatch( { type:FETCH_USER, payload:res.data } );
};


export const submitData = value => async dispatch => {
            const res = await axios.post('/api/postLink', value);
            dispatch({ type: FETCH_USER, payload : res.data});
};


export const getSqueezedURL = () => async dispatch => {
            const res = await axios.get('/api/getSqueezedURL');
            dispatch( { type : FETCH_URL, payload : res.data } );
};