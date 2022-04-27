import React from 'react';
import { useDispatch } from 'react-redux';



function RestartButton(props) {

  const dispatch = useDispatch();

  const handleRestart = () => {
  dispatch({ type: 'LOGOUT' })
  dispatch({ type: 'LOGOUT' })
  dispatch({ type: 'LOGOUT' })
  }

  return (
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={handleRestart}
    >
      RESTART GAME
    </button>
  );
}

export default RestartButton;