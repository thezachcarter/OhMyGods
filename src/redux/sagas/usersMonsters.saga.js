import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's Monsters from the DB 
function* getUsersMonsters (action){
    
    try {
        const usersMonsters = yield axios.get(`/api/usersMonsters/${action.payload}`);
        console.log('get all users monsters:', usersMonsters.data);
        yield put({ type: 'SET_USERS_MONSTERS', payload: usersMonsters.data });
        
    } catch (err){
        console.log('get all error', err);
    }   
}

function* updateUserMonsterPower(action) {
    try {
        yield axios.put(`api/usersMonsters/${action.updatedMonsterPower}/${action.payload.id}`)
        yield put({ type: 'GET_USERS_MONSTERS', payload: action.payload.user});
    }
    catch(err){
        console.log(err);    
    }
}

function* getUsersMonstersWatcher() {
    yield takeLatest('GET_USERS_MONSTERS', getUsersMonsters);
    yield takeLatest('UPDATE_USER_MONSTER_POWER', updateUserMonsterPower);
}

export default getUsersMonstersWatcher;