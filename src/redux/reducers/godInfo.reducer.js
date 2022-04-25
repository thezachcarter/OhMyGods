const godInfo = (state = [], action) => {
  console.log('ZZZZZZZZZ', action.payload);
    switch (action.type) {
      case 'SET_GOD_INFO_STORE':
        return action.payload;
      default:
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default godInfo;