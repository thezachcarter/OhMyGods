const display = (state = [], action) => {
    console.log('ZZZZZZZZZ', action.payload);
    
    switch (action.type) {
      case 'SET_DISPLAY_REDUCER':
        
        return [action.payload];
      default:
        console.log('ZZZZZZZZZ display reducer did not trigger', state);
        return state;
    }
  };
  
  // user will be on the redux state at:
  // state.user
  export default display;