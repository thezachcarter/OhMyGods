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

// function* setInfoGod(action) {
//     console.log('!!!!!!!!! setInfoGod', action.payload);
//     try{
//         console.log('god info sent');
//         const godInfo = yield axios.get(`/api/info/${action.payload}`);
//         // yield put({type: 'SET_INFO_GOD_STORE', payload: godId})
//     }
//     catch(err){
//         console.log(err);
//     }
// }

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

function* getReplaceGods(action) {
    try{ 
        const replaceGods = yield axios.get(`/api/replaceGods/${action.payload[0]}/${action.payload[1]}/${action.payload[2]}`);
        yield put({ type: 'SET_REPLACE_GODS', payload: replaceGods.data })
        yield put({ type: 'SET_USER_DISPLAY', payload: 'replaceGods' })
        }catch (err){
          console.log(err);
        }
}

function* setGodToReplace(action) {
    try{
        yield put({ type: 'SET_GOD_TO_REPLACE_STORE', payload: action.payload })
        }catch (err){
          console.log(err);
        }
}

function* setTotalGodPower(action) {
    try{
        yield put({ type: 'SET_TOTAL_GOD_POWER_STORE', payload: action.payload})
    }catch (err){
        console.log(err);
    }
}

function* deleteUsersGods() {
    try{
        yield axios.delete('/api/usersGods')
    }catch (err){
        console.log(err);
    }
}

function* getUsersGodsWatcher() {
    yield takeLatest('GET_USERS_GODS', getUsersGods);
    yield takeLatest('UPDATE_USER_GOD_POWER', updateUserGodPower);
    yield takeLatest('SET_LAST_ATTACK', setLastAttack);
    // yield takeLatest('SET_INFO_GOD', setInfoGod);
    yield takeLatest('POPULATE_GODS', populateGods);
    yield takeLatest('GET_REPLACE_GODS', getReplaceGods);
    yield takeLatest('SET_GOD_TO_REPLACE', setGodToReplace);
    yield takeLatest('SET_TOTAL_GOD_POWER', setTotalGodPower);
    yield takeLatest('DELETE_USERS_GODS', deleteUsersGods);
}

export default getUsersGodsWatcher;