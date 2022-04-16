import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getGods (){
    
    try {
        const gods = yield axios.get('/api/gods');
        console.log('get all:', gods.data);
        yield put({ type: 'SET_GODS', payload: gods.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* getGodsWatcher() {
    yield takeLatest('GET_GODS', getGods);
}

export default getGodsWatcher;