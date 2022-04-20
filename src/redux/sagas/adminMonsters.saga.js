import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAdminMonsters (){
    try {
        const adminMonsters = yield axios.get(`/api/adminMonsters`);
        console.log('---------get all:', adminMonsters.data);
        yield put({ type: 'SET_ADMIN_MONSTERS', payload: adminMonsters.data });

    } catch (err){
        console.log('get adminMonsters error', err);
    }   
}

function* postMonster(action){
    try {
        console.log('&&&&&&&& POST MONSTER:', action.payload);
        yield axios.post('/api/adminMonsters', action.payload);
        yield put({ type: 'GET_ADMIN_MONSTERS'})
    } catch (err){
        console.log(err); 
    }
}

function* getAdminMonstersWatcher() {
    yield takeLatest('GET_ADMIN_MONSTERS', getAdminMonsters);
    yield takeLatest('POST_MONSTER', postMonster)
}

export default getAdminMonstersWatcher;