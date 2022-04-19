const usersMonsters = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS_MONSTERS':
        console.log('MONSTER REDUCER', action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default usersMonsters;