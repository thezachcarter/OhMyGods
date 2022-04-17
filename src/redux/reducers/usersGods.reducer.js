const usersGodsReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_USERS_GODS':
        return action.payload;
      default:
        return state;
    }
  };



// const userGodsPowerReducer = (state = 0, action) =>{
//     switch (action.type){
//         case 'SET_USERS_GOD_POWER'

//     }}

  
  // user will be on the redux state at:
  // state.user
  export default usersGodsReducer;
  