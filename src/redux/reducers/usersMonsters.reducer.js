const usersMonstersReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS_MONSTERS':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default usersMonstersReducer;