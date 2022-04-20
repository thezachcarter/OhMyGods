const godList = (state = [], action) => {
    if(action.type === 'SET_GOD_LIST') {
        return action.payload;
    }

    return state;
}

// hold only the single student object being edited
const editGod = (state  = {}, action) => {

    return state;
}