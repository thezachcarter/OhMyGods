import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { useSelector } from 'react-redux';

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

function* updateUserGodPower(action) {
    console.log('updateUserGodPower', action.action, action.updatedGodPower);
    try {
        yield axios.put(`api/usersGods/${action.updatedGodPower}/${action.action}`)
        yield put({ type: 'GET_USERS_GODS'});
    }
    catch(err){
        console.log(err);    
    }
}

function* getUsersGodsWatcher() {
    yield takeLatest('GET_USERS_GODS', getUsersGods);
    yield takeLatest('UPDATE_USER_GOD_POWER', updateUserGodPower);
    // yield takeLatest('GET_UPDATED_GODS_ORDER')
}

export default getUsersGodsWatcher;