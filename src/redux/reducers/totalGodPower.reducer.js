const totalGodPower = (state = [], action) => {
    switch (action.type) {
      case 'SET_TOTAL_GOD_POWER_STORE':
        return action.payload;
      default:
        return state;
    }
  };

  export default totalGodPower;