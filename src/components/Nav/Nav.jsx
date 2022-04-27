import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import RestartButton from '../RestartButton/RestartButton';
import { useSelector, useDispatch } from 'react-redux';


import './Nav.scss';

function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const setHowToPlay = () => {
    dispatch({ type: 'SET_USER_DISPLAY', payload: 'howToPlay' })
  }

  const setMonsterDisplay = () => {
    dispatch({ type: 'SET_USER_DISPLAY', payload: 'monsterDisplay' })
  }

  return (
    <div className="nav">
      {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <>
            <Link className="navLink" to="/login">
              Login/Register
            </Link>

            <Link className="navLink" to="/about">
              About
            </Link>
          </>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>

            <h2 className="navLink" >{user.username}</h2>

            <Link className="navLink" to="/user" onClick={setHowToPlay}>
              How To Play
            </Link>

            <Link className="navLink" to="/about">
              About
            </Link>

            <Link className="navLink" to="/user" onClick={setMonsterDisplay}>
              Monsters
            </Link>

            <RestartButton className="navLink" />

            <LogOutButton className="navLink" />

            <h2 className="navLink" >Devotion: {user.devotion}</h2>
          </>
        )}

      </div>
    </div>
  );
}

export default Nav;
