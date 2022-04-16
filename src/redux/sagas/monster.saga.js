import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getMonster (){
    
    try {
        const monster = yield axios.get('/api/monster');
        console.log('get all:', monster.data);
        yield put({ type: 'SET_MONSTER', payload: monster.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* getMonsterWatcher() {
    yield takeLatest('GET_MONSTER', getMonster);
}

export default getMonsterWatcher;