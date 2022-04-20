import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAdminGods (){
    try {
        const adminGods = yield axios.get(`/api/adminGods`);
        console.log('get all:', adminGods.data);
        yield put({ type: 'SET_ADMIN_GODS', payload: adminGods.data });

    } catch (err){
        console.log('get adminGods error', err);
    }   
}

function* getAdminGodsWatcher() {
    yield takeLatest('GET_ADMIN_GODS', getAdminGods);
}

export default getAdminGodsWatcher;