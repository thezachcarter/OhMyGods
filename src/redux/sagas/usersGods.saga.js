import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getUsersGods (){
    
    try {
        const usersGods = yield axios.get('/api/usersGods');
        console.log('get all:', usersGods.data);
        yield put({ type: 'SET_USERS_GODS', payload: usersGods.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* getUsersGodsWatcher() {
    yield takeLatest('GET_USERS_GODS', getUsersGods);
}

export default getUsersGods;