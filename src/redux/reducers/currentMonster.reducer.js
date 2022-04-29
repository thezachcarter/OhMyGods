const currentMonster = (state = '', action) => {
    
    switch (action.type) {
      case 'SET_CURRENT_MONSTER':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default currentMonster;