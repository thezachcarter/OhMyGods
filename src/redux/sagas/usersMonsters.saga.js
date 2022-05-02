import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's Monsters from the DB 
function* getUsersMonsters (action){
    
    try {
        const usersMonsters = yield axios.get(`/api/usersMonsters`);
        yield put({ type: 'SET_USERS_MONSTERS', payload: usersMonsters.data });
        
    } catch (err){
        console.log('get all error', err);
    }   
}

function* updateUserMonsterPower(action) {
    
    try {
        yield axios.put(`api/usersMonsters/${action.updatedMonsterPower}/${action.payload.id}`)
        yield put({ type: 'GET_USERS_MONSTERS'});
    }
    catch(err){
        console.log(err);    
    }
}

function* populateMonsters() {
    try{ 
    yield axios.post('/api/usersMonsters');
    
    }catch (err){
      console.log(err);
    }
  }

  function* deleteUsersMonsters() {
    try{
        yield axios.delete('/api/usersMonsters')
    }catch (err){
        console.log(err);
    }
}

function* setCurrentMonster(action) {
    console.log('SET CURRENT MONSTER REDUCER. ACTION.PAYLOAD,', action.payload);
    yield put ({ type: 'SET_CURRENT_MONSTER_STORE', payload: action.payload})
}

function* getUsersMonstersWatcher() {
    yield takeLatest('GET_USERS_MONSTERS', getUsersMonsters);
    yield takeLatest('UPDATE_USER_MONSTER_POWER', updateUserMonsterPower);
    yield takeLatest('POPULATE_MONSTERS', populateMonsters);
    yield takeLatest('DELETE_USERS_MONSTERS', deleteUsersMonsters);
    yield takeLatest('SET_CURRENT_MONSTER', setCurrentMonster)
}

export default getUsersMonstersWatcher;