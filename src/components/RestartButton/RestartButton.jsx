import React from 'react';
import { useDispatch } from 'react-redux';



function RestartButton(props) {

  const dispatch = useDispatch();

  const handleRestart = () => {
    
    const updatedDevotion = 8;

    dispatch({ type: 'POPULATE_GODS' });
    dispatch({ type: 'POPULATE_MONSTERS' });
    dispatch({ type: 'UPDATE_DEVOTION', payload: updatedDevotion });
    dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'intro' });

    history.push('/user');

  }

  return (
    <button
      className={props.className}
      onClick={handleRestart}
    >
      RESTART GAME
    </button>
  );
}

export default RestartButton;