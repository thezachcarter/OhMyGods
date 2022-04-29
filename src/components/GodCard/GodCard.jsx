import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { attack } from '../Battle/Battle';
import { renderUserDisplay } from '../UserPage/UserPage';
import axios from 'axios';
import swal from 'sweetalert';

import './GodCard.scss'


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function GodCard({ attack, renderUserDisplay }) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const [inBattle, setInBattle] = useState(false);

  const godArray = store.usersGods;
  const user = store.user;
  const godInfo = store.godInfo;


  useEffect(() => {

    checkInBattle();
    dispatch({ type: 'GET_USERS_GODS', payload: user.id });
  }, []);

  const populateNewUserGods = () => {
    if (godArray?.length < 4) {
      dispatch({ type: 'POPULATE_GODS' });
    }
  }

  const checkInBattle = () => {
    if (location.pathname === '/battle') {
      setInBattle(true);
      console.log('inBattle?', inBattle);
    }
  };

  const increasePower = (godId, updatedGodPower) => {
    if (user.devotion > 0) {
      updatedGodPower += 1;
      dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: godId, updatedGodPower })
      decreaseDevotion(user.devotion)
    }
    else {
      swal("Not valid", "You don't have any devotion points", "error");
    }
  };

  const decreaseDevotion = (updatedDevotion) => {
    updatedDevotion -= 1;
    // console.log('decreaseDevotion', userId, updatedDevotion);
    dispatch({ type: 'UPDATE_DEVOTION', payload: updatedDevotion })
  };

  const handleGodInfo = (godName) => {
    axios.get(`/api/info/${godName}`)
      .then(response => {
        dispatch({ type: 'SET_GOD_INFO_STORE', payload: response.data.query.pages })
        console.log(response.data.query.pages);
      })
      .then(response => {
        renderUserDisplay('displayGodInfo');
      })
      .catch(err => {
        console.log(err)
      })
  };

  const handleReplaceGods = (godToReplace) => {

    let updatedDevotion = user.devotion -= 6;
    if (user.devotion > 0) {
      dispatch({ type: 'UPDATE_DEVOTION', payload: updatedDevotion });

    }
    else {
      swal("Not valid", "You don't have any devotion points", "error");
    }

    const godIds = [godArray[0].god_id, godArray[1].god_id, godArray[2].god_id, godArray[3].god_id,];
    const len = 4;
    const newGodIds = [];
    for (let i = 0; i < len;) {
      const random = Math.floor(Math.random() * (16 - 1)) + 1;
      if (!godIds.includes(random) &&
        !newGodIds.includes(random)) {
        newGodIds.push(random);
        i++;
      }
    }
    console.log(newGodIds);

    //dispatch to update devotion
    dispatch({ type: 'GET_REPLACE_GODS', payload: newGodIds });
    dispatch({ type: 'SET_GOD_TO_REPLACE', payload: godToReplace });
  }

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

              <div className={`godCard ${god.element}`} key={god.id}>
                <h2 className="godName">{god.name}</h2>
                <img
                  className="godImg"
                  src={god.image}
                  alt={god.name}
                />
                <h2 className="godCulture">{god.culture}</h2>
                <h2 className="godPower">hp: {god.power}</h2>
                <button className="godCardBtn" onClick={(() => handleReplaceGods(god))}>X</button>
                <button className="godCardBtn" onClick={(() => increasePower(god.id, god.power))}>^</button>
                <button className="godCardBtn" onClick={(() => handleGodInfo(god.name))}>?</button>
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