import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get user's gods from the DB 
function* getUsersGods (action){
    try {
        const usersGods = yield axios.get(`/api/usersGods/${action.payload}`);
        console.log('get all:', usersGods.data);
        yield put({ type: 'SET_USERS_GODS', payload: usersGods.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* updateUserGodPower(action) {

    console.log('updateUserGodPower', action);
    try {
        yield axios.put(`api/usersGods/${action.updatedGodPower}/${action.payload.id}`)
        yield put({ type: 'GET_USERS_GODS', payload: action.payload.user_id});
    }
    catch(err){
        console.log(err);    
    }
}

function* setLastAttack(action) {
    console.log('setLastAttack', action);
    try{
        yield put({type: 'SET_LAST_ATTACK_STATE', payload: action})
    }
    catch(err){
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
}

export default getUsersGodsWatcher;