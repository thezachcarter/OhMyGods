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

function* getAdminMonstersWatcher() {
    yield takeLatest('GET_ADMIN_MONSTERS', getAdminMonsters);
}

export default getAdminMonstersWatcher;