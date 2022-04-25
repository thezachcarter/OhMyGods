const godToReplace = (state = [], action) => {
      switch (action.type) {
        case 'SET_GOD_TO_REPLACE_STORE':
          return action.payload;
        default:
          return state;
      }
    };
    
    // user will be on the redux state at:
    // state.user
    export default godToReplace;