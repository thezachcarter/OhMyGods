import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getUsersMonsters (){
    
    try {
        const usersMonsters = yield axios.get('/api/usersMonsters');
        console.log('get all users monsters:', usersMonsters.data);
        yield put({ type: 'SET_USERS_MONSTERS', payload: usersMonsters.data });
        
    } catch (err){
        console.log('get all error', err);
    }   
}

function* getUsersMonstersWatcher() {
    yield takeLatest('GET_USERS_MONSTERS', getUsersMonsters);
}

export default getUsersMonstersWatcher;