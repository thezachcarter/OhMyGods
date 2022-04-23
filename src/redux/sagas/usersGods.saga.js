import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getUsersGods (action){
    try {
        const usersGods = yield axios.get(`/api/usersGods`);
        console.log('get all:', usersGods.data);
        yield put({ type: 'SET_USERS_GODS', payload: usersGods.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* updateUserGodPower(action) {

    console.log('updateUserGodPower', action);
    try {
        yield axios.put(`api/usersGods/${action.updatedGodPower}/${action.payload}`)
        yield put({ type: 'GET_USERS_GODS'});
    }
    catch(err){
        console.log(err);    
    }
}

function* setLastAttack(action) {
    console.log('setLastAttack', action);
    try{
        yield put({type: 'SET_LAST_ATTACK_STATE', payload: action.payload})
    }
    catch(err){
        console.log(err); 
    }
}

function* setInfoGod(godId) {
    console.log('!!!!!!!!! setInfoGod', godId);
    try{
        yield put({type: 'SET_INFO_GOD_STORE', payload: godId})
    }
    catch(err){
        console.log(err);
    }
}

function* populateGods() {
  try{ 
  yield axios.post('/api/usersGods');
  
  }catch (err){
    console.log(err);
  }
}

// function* addGodPower(action) {
//     console.log('addGodPower', action);
//     try{
//         yield axios.put(`api/usersGods/${action.payload}`)
//     }
//     catch(err){
//         console.log(err);
        
//     }
// }

function* getUsersGodsWatcher() {
    yield takeLatest('GET_USERS_GODS', getUsersGods);
    yield takeLatest('UPDATE_USER_GOD_POWER', updateUserGodPower);
    yield takeLatest('SET_LAST_ATTACK', setLastAttack);
    yield takeLatest('SET_INFO_GOD', setInfoGod);
    yield takeLatest('POPULATE_GODS', populateGods);
}

export default getUsersGodsWatcher;