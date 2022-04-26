import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import GodCard from '../GodCard/GodCard';

//styling
import './NewUser.scss'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch()
  const store = useSelector((store) => store);
  const user = store.user;
  const history = useHistory();
  const location = useLocation();


  const howToPlay = `
  Your pantheon of gods are ready to lay waste to any monster foolish enough to meet them on
  the battlefield. Victory is gained once a monster has been reduced to zero power. If all four
  of your gods are reduced to zero power before the monster, you shall suffer defeat. Click 
  'How To Play' for detailed game rules. Click the ? button to learn more about your god.`

  const [display, setDisplay] = useState(howToPlay)

  const populateGods = () => {
    dispatch({ type: 'POPULATE_GODS' });
    dispatch({ type: 'POPULATE_MONSTERS' });
    history.push('/user');
    dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'intro' })
  }

  console.log(location);
  return (
    <div className="userPageGrid">
      <span className="Water colorSplash"></span>
      <span className="Earth colorSplash"></span>
      <span className="Fire colorSplash"></span>
      <span className="Sky colorSplash"></span>
      

      <h1 className="title">
        Greetings, {user.username}</h1> 
      
      
      <button className="battleBtn" onClick={populateGods}>BEGIN</button>
      
      
      <div className="homeDisplay">
        <h2>
          Your pantheon of gods are ready to lay waste to any monster foolish enough to meet them on
          the battlefield. Victory is gained once a monster has been reduced to zero power. If all four
          of your gods are reduced to zero power before the monster, you shall suffer defeat. 
        </h2>
      </div>

    </div>

    
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
