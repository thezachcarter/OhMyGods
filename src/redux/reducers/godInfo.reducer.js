const godInfo = (state = [], action) => {
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