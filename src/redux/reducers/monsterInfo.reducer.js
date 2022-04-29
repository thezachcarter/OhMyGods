const monsterInfo = (state = [], action) => {
      switch (action.type) {
        case 'SET_MONSTER_INFO_STORE':
          return action.payload;
        default:
          return state;
      }
    };
    
    // user will be on the redux state at:
    // state.user
    export default monsterInfo;