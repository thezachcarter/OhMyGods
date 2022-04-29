import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import GodCard from '../GodCard/GodCard';
import UserDisplay from '../UserDisplay/UserDisplay'

//styling
import './UserPage.scss'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch()
  const store = useSelector((store) => store);
  const user = store.user;
  const godInfo = store.godInfo;
  const monsterInfo = store.monsterInfo;
  // const displayReducer = store.display;
  const history = useHistory();
  const location = useLocation();
  const monsterArray = store.usersMonsters;
  const currentMonster = store.currentMonster;


  const wikiText = godInfo[Object?.keys(godInfo)[0]]?.extract;

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
  const [display, setDisplay] = useState(howToPlay);

  useEffect(() => {
    dispatch({ type: 'GET_USERS_MONSTERS', payload: user.id });
    dispatch({ type: 'FETCH_USER'});
  }, []);


  const renderUserDisplay = (params) => {
    switch (params) {
      case 'howToPlay':
        // setDisplay(howToPlay)
        dispatch({ type: 'SET_USER_DISPLAY', payload: 'howToPlay' })
        break;
      case 'displayGodInfo':
        // setDisplay(wikiText?.toString(wikiText));
        // console.log('WIKITEXT:', wikiText);
        dispatch({ type: 'SET_USER_DISPLAY', payload: 'godInfo' })
        break;
      case 'replaceGods':
        // setDisplay(replaceGods)
        dispatch({ type: 'SET_USER_DISPLAY', payload: 'replaceGods' })
        break;
    }
  }

  //SET UP REDUCER 
  const handleBattleClick = () => {

    //reset last god to attack so blocking repeat attacks doesn't carry over
    dispatch({ type: 'SET_LAST_ATTACK', payload: {id:0} })

    dispatch({ type: 'SET_CURRENT_MONSTER', payload: monsterArray[0] })

    for (let i = 0; i < monsterArray.length; i++){
      console.log('in set currentMonster loop. monsterArray,', monsterArray, 'monsterArray[i]', monsterArray[i]);
      if (currentMonster === '' && monsterArray[i]?.power > 0) {
        dispatch({ type: 'SET_CURRENT_MONSTER', payload: monsterArray[i] })
        break;
      } else if (currentMonster.id > monsterArray[i].id && monsterArray[i].power > 0) {
        dispatch({ type: 'SET_CURRENT_MONSTER', payload: monsterArray[i] })
        break;
      } else if (currentMonster.power < 1 && monsterArray[i].power > 0){
        dispatch({ type: 'SET_CURRENT_MONSTER', payload: monsterArray[i] })
        break;
    }}

    history.push('/battle');

  }

  //  make click listener function to set current monster for battle store in reducer to access in battle component
  return (
    <div className="userPageGrid">
      <h1 className="title">
        <span className="titleSpan">O</span>h
        <span className="titleSpan">M</span>y
        <span className="titleSpan">G</span>ods</h1>
      <button className="battleBtn" onClick={handleBattleClick}>BATTLE!!!</button>

      <div className="homeDisplay">
        {/* <h2>{display}</h2> */}
        <UserDisplay />
      </div>
      {/* style classes coming from GodCard component= godCard AND godCardContainer */}
      {/* <GodCard renderUserDisplay={renderUserDisplay}/> */}
      <GodCard renderUserDisplay={renderUserDisplay} />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
