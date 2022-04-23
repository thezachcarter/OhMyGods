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
    of your gods are reduced to zero power before the monster, you shall suffer defeat. damage is dealt based on 
    a comparison of each combatants color / element. Matching a foe's culture doubles all damage. Gods may
    not attack twice in a row. In the upper right corner, you will see your devotion points. When you are not in battle, you may click 
    the ^ button on any of your gods to increase their power by 1 at the cost of 1 devotion. Click the ?
    button to learn more about your god. Click the X button to replace a god for four devotion. All new gods start 
    with eight power.
  `
  const [display, setDisplay] = useState(howToPlay)

  const populateGods = () => {
    dispatch({ type: 'POPULATE_GODS' });
    history.push('/user');
  }

  console.log(location);
  return (
    <div className="userPageGrid">
      <h1 className="title">
        Greetings, {user.username}</h1> 
      <button className="battleBtn" onClick={populateGods}>BEGIN</button>

      <div className="homeDisplay">
        <h2>{display}</h2>
      </div>
      {/* style classes coming from GodCard component= godCard AND godCardContainer */}
      <GodCard />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
