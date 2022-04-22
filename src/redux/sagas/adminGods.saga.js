import axios from 'axios';
import { actionChannel, put, takeLatest } from 'redux-saga/effects';

function* getAdminGods(){
    try {
        const adminGods = yield axios.get(`/api/adminGods`);
        console.log('get all:', adminGods.data);
        yield put({ type: 'SET_ADMIN_GODS', payload: adminGods.data });

    } catch (err){
        console.log('get adminGods error', err);
    }   
}

function* postGod(action){
    try {
        console.log('&&&&&&&& POST GOD:', action.payload);
        yield axios.post('/api/adminGods', action.payload);
        yield put({ type: 'GET_ADMIN_GODS'})
    } catch (err){
        console.log(err); 
    }
}

function* deleteGod(action){
    try{
        yield axios.delete(`/api/adminGods/${ action.payload}`);
        yield put({ type: 'GET_ADMIN_GODS' });
    } catch (err){
        console.log(err);
    }
}

function* getAdminGodsWatcher() {
    yield takeLatest('GET_ADMIN_GODS', getAdminGods);
    yield takeLatest('POST_GOD', postGod)
    yield takeLatest('DELETE_GOD', deleteGod)
}

export default getAdminGodsWatcher;