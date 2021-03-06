import React from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';

function RestartButton(props) {

  const dispatch = useDispatch();
  const history = useHistory();

  //deletes users gods/monsters, populates tables with new users gods/monsters resets devotion and display
  const handleRestart = () => {

    const updatedDevotion = 8;

    dispatch({ type: 'DELETE_USERS_GODS' });
    dispatch({ type: 'DELETE_USERS_MONSTERS' });
    dispatch({ type: 'POPULATE_GODS' });
    dispatch({ type: 'POPULATE_MONSTERS' });
    dispatch({ type: 'UPDATE_DEVOTION', payload: updatedDevotion });
    dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'intro' });
    dispatch({ type: 'FETCH_USER'});


    history.push('/user');
  }

  const confirmRestart = () => {
    swal({
      title: "Are you sure?",
      text: "Restarting will erase all progress and cannot be undone!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          handleRestart();
        }
      });
  }

  return (
    <button
      className={props.className}
      onClick={confirmRestart}
    >
      RESTART
    </button>
  );
}

export default RestartButton;