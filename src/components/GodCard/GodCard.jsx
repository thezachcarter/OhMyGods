import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import { attack } from '../Battle/Battle';

import './GodCard.scss'


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function GodCard({attack}) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const [inBattle, setInBattle] = useState(false);

  const godArray = store.usersGods;
  const user = store.user;

  useEffect(() => {
    console.log('**********************GOD CARD USE EFFECT! user:', user);
    checkInBattle();
    dispatch({ type: 'GET_USERS_GODS', payload: user.id });
  }, []);
  
  const checkInBattle = () => {
    if(location.pathname === '/battle'){
      setInBattle(true);
      console.log('inBattle?', inBattle);
    }
  };

  const increasePower = (godId, updatedGodPower) => {
    if (user.devotion > 0){updatedGodPower += 1;
    console.log('increasePower', godId, updatedGodPower);
    dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: godId, updatedGodPower})
    decreaseDevotion(user.id, user.devotion)}
    else{
      alert('you are out of devotion points')
    }
  };

  const decreaseDevotion = (userId, updatedDevotion) => {
    updatedDevotion -= 1;
    console.log('decreaseDevotion', userId, updatedDevotion);
    dispatch({ type: 'UPDATE_DEVOTION', payload: userId, updatedDevotion})
  };
  
  return (
    <>
    {/* ternary to check for battle and render cards accordingly */}
    {inBattle ?
      
      <div className="godCardContainer ">
      {godArray.map(god => {
        return (

          <div className={`godCard ${god.element}`} onClick={((event) => attack(god.id))} key={god.id}>
            <h2 className="godName">{god.name}</h2>
            <img
              className="godImg"
              src={god.image}
              alt={god.name}
            /> 
            <h2 className="godCulture">{god.culture}</h2>
            <h2 className="godPower">{god.power}</h2>
            <p></p>
          </div>
        );
      })}
    </div>

    :

    <div className="godCardContainer">
      {godArray.map(god => {
        return (

          <div className={`godCard ${god.element}`}key={god.id}>
            <h2 className="godName">{god.name}</h2>
            <img
              className="godImg"
              src={god.image}
              alt={god.name}
            /> 
            <h2 className="godCulture">{god.culture}</h2>
            <h2 className="godPower">{god.power}</h2>
            <button className="godCardBtn">X</button>
            <button className="godCardBtn" onClick={(() => increasePower(god.id, god.power))}>^</button>
            <button className="godCardBtn">?</button>
          </div>
        );
      })}
    </div>

    }
    {/* end inBattle ternary  */}

  </>
  );//end return
  
}

export default GodCard;