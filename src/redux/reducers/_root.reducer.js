import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import usersGods from './usersGods.reducer';
import usersMonsters from './usersMonsters.reducer';
import lastAttack from './lastAttack.reducer';
import adminGods from './adminGods.reducer';
import adminMonsters from './adminMonsters.reducer';
import godInfo from './godInfo.reducer';
import display from './display.reducer';
import replaceGods from './replaceGods.reducer';
import godToReplace from './godToReplace.reducer';
// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  usersGods,
  usersMonsters,
  lastAttack,
  adminGods,
  adminMonsters,
  godInfo,
  display,
  replaceGods,
  godToReplace,
});

export default rootReducer;
