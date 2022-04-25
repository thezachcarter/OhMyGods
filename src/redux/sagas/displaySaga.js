import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

function* setUserDisplay(action){
    try {
        yield put({ type:'SET_DISPLAY_REDUCER', payload: action.payload });
    } catch (err){
        console.log('get setUserDisplay error', err);
    }   
}

function* userDisplayWatcher() {
    yield takeLatest('SET_USER_DISPLAY', setUserDisplay);
}

export default userDisplayWatcher;