const monsterInfo = (state = [], action) => {
    console.log('ZZZZZZZZZ', action.payload);
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