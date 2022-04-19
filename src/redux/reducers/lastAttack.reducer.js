const lastAttack = (state = 0, action) => {
    switch (action.type) {
      case 'SET_LAST_ATTACK_STATE':
        return action.payload.action.id;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default lastAttack;