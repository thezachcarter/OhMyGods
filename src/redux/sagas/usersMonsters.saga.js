import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's Monsters from the DB 
function* getUsersMonsters (){
    
    try {
        const usersMonsters = yield axios.get('/api/usersMonsters');
        console.log('get all users monsters:', usersMonsters.data);
        yield put({ type: 'SET_USERS_MONSTERS', payload: usersMonsters.data });
        
    } catch (err){
        console.log('get all error', err);
    }   
}

function* updateUserMonsterPower(action) {
    console.log('updateUserMonsterPower', action.action, action.updatedMonsterPower);
    try {
        yield axios.put(`api/usersMonsters/${action.updatedMonsterPower}/${action.action}`)
        yield put({ type: 'GET_USERS_MONSTERS'});
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