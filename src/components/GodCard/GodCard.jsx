import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import { attack } from '../Battle/Battle';
import './GodCard.css'

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
  
  const checkInBattle = () => {
    if(location.pathname === '/battle'){
      setInBattle(true);
      console.log('inBattle?', inBattle);
    }
  };

  useEffect(() => {
    checkInBattle();
    dispatch({ type: 'GET_USERS_GODS' });
  }, []);

  const increasePower = (godId, updatedGodPower) => {
    updatedGodPower += 1;
    console.log('increasePower', godId, updatedGodPower);
    dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: godId, updatedGodPower})
    // dispatch({ })
  }

  
  return (
    <>
    {/* ternary to check for battle and render cards accordingly */}
    {inBattle ?
      
      <div className="godCardContainer">
      {godArray.map(god => {
        return (

          <div className="godCard" onClick={((event) => attack(god.id))} key={god.id}>
            <p>{god.name}</p>
            <img
              className="godImg"
              src={god.image}
              alt={god.name}
            /> 
            <p>{god.culture}</p>
            <p>{god.element}</p>
            
            <p>{god.power}</p>
          </div>
        );
      })}
    </div>

    :

    <div className="godCardContainer">
      {godArray.map(god => {
        return (

          <div className="godCard" key={god.id}>
            <p>{god.name}</p>
            <img
              className="godImg"
              src={god.image}
              alt={god.name}
            /> 
            <p>{god.culture}</p>
            <p>{god.element}</p>
            <button onClick={(() => increasePower(god.id, god.power))}>⬆</button>
            <p>{god.power}</p>
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