import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import {useLocation, useHistory} from 'react-router-dom'


import GodCard from '../GodCard/GodCard';
import MonsterCard from '../MonsterCard/MonsterCard';

//styling
import './Battle.scss';

function Battle() {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [display, setDisplay] = useState('Click a God to attack!')

  // const [monsterArray, setMonsterArray ]= useState(store.usersMonsters);
  const monsterArray = store.usersMonsters;
  const godArray = store.usersGods;
  const user = store.user;

    //power level of monster, value will change on client side, not in db
  // const [monsterPower, setMonsterPower ]= useState(currentMonster.power)
  //total power level of all gods
  const totalGodPower = godArray?.reduce((accumulator, object) => {
    return accumulator + object.power;
  }, 0);

  
  //checks array for first monster, by id, that has not been defeated
  //also resets to beginning of monsters if order gets messed up in testing
  const [currentMonster, setCurrentMonster] = useState('')
  monsterArray.map(monster => {
    // console.log('MONSTER IN BATTLE', monster.power);
    if (currentMonster == '' && monster.power > 0) {
      setCurrentMonster(monster);
    } else if (currentMonster.id > monster.id && monster.power > 0) {
      setCurrentMonster(monster);
    }
  })
  
  //determine victory status by checking power of monster and ALL gods 
  const checkBattleStatus = () => {
    console.log('$$$$$$$$$$ checkBattleStatus monster', currentMonster.power, 'Gods', totalGodPower );
    if (currentMonster.power <= 0) {
      setDisplay('victory');
      renderBattleDisplay(display);
      dispatch({ type: 'SET_LAST_ATTACK', payload: {id:0} })
      setTimeout(() => {  setDisplay('devotion') }, 2000);
      increaseDevotion(user.id, user.devotion);
      setTimeout(() => {  history.push('/user') }, 3000);
    } else if (totalGodPower <= 0) {
      setDisplay('defeat')
      renderBattleDisplay(display);
      setTimeout(() => {  history.push('/user') }, 3000);
    };
    renderBattleDisplay(display);
  };

  const increaseDevotion = (userId, updatedDevotion) => {
    updatedDevotion += 8;
    dispatch({ type: 'UPDATE_DEVOTION', payload: userId, updatedDevotion})
  };

  const renderBattleDisplay = (display) => {
    if (display === 'victory'){
      return(
      <div>
        <h1 className="victory">VICTORY!</h1>
      </div>
      )}
    else if (display === 'devotion'){
        return(
        <div>
          <h1 className="victory">+8 devotion</h1>
        </div>
        )}
    else if (display === 'defeat'){
      return(
      <div>
        <h1 className="defeat">DEFEAT!</h1>
      </div>
      )}
    else {
    return(
      <div>
        {display}
      </div>
      )}
  }

  const attack = (event) => {

    console.log('ATTACK CLICKED');

    if(location.pathname !== '/battle'){
      return 'false';
    }

    const id = event;
    const attackingGod = godArray.find(god => {
      return god.id === id
    });

    //base damageToMonster, before checking element or culture = 2
    let damageToMonster = 2;
    let damageToGod = 2;

      console.log('GOD ARRAY', godArray);
      //check if individual god is defeated
      if (attackingGod.power === 0) {
        console.log(attackingGod.name, 'THIS GOD IS DEFEATED');
        setDisplay(`${attackingGod.name} has been defeated.`)
      } else if (attackingGod.id == store.lastAttack && attackingGod.power !== totalGodPower){
          console.log('THIS GOD CANNOT REPEAT ATTACKS');
          setDisplay(`${attackingGod.name} just attacked. Choose another God.`)
      } else {
        console.log('ELEMENTS, God:', attackingGod.element, 'Monster:', currentMonster.element);
        switch (attackingGod.element) {
          case 'Earth':
            if (currentMonster.element == 'Earth') {
              damageToMonster = 2;
              damageToGod = 2;
            } else if (currentMonster.element == 'Sky') {
              damageToMonster = 3;
              damageToGod = 1;
            } else if (currentMonster.element == 'Fire') {
              damageToMonster = 1;
              damageToGod = 3;
            } else if (currentMonster.element == 'Water') {
              damageToMonster = 2;
              damageToGod = 2;
            } else {
              damageToMonster = 2;
              damageToGod = 2;
            };
            break;
          case 'Sky':
            if (currentMonster.element == 'Sky') {
              damageToMonster = 2;
              damageToGod = 2;
            } else if (currentMonster.element == 'Water') {
              damageToMonster = 3;
              damageToGod = 1;
            } else if (currentMonster.element == 'Earth') {
              damageToMonster = 1;
              damageToGod = 3;
            } else if (currentMonster.element == 'Fire') {
              damageToMonster = 2;
              damageToGod = 2;
            } else {
              damageToMonster = 2;
              damageToGod = 2;
            };
            break;
          case 'Fire':
            if (currentMonster.element == 'Fire') {
              damageToMonster = 2;
              damageToGod = 2;
            } else if (currentMonster.element == 'Earth') {
              damageToMonster = 3;
              damageToGod = 1;
            } else if (currentMonster.element == 'Water') {
              damageToMonster = 1;
              damageToGod = 3;
            } else if (currentMonster.element == 'Sky') {
              damageToMonster = 2;
              damageToGod = 2;
            } else {
              damageToMonster = 2
              damageToGod = 2;
            };
            break;
          case 'Water':
            if (currentMonster.element == 'Water') {
              damageToMonster = 2;
              damageToGod = 2;
            } else if (currentMonster.element == 'Fire') {
              damageToMonster = 3;
              damageToGod = 1;
            } else if (currentMonster.element == 'Sky') {
              damageToMonster = 1;
              damageToGod = 3;
            } else if (currentMonster.element == 'Earth') {
              damageToMonster = 2;
              damageToGod = 2;
            } else {
              damageToMonster = 2
              damageToGod = 2;
            };
            break;
          default:
            damageToMonster = 2;
            damageToGod = 2;
        }//end switch statement checking elements

        //damage multiplier for culture match
        if (attackingGod.culture == currentMonster.culture) {
          damageToMonster *= 2;
          damageToGod *= 2;
        }
        //prevent negative power rating for gods
        if (damageToGod > attackingGod.power) { damageToGod = attackingGod.power }
        console.log('USER ID IN ATTACK FUNCTION', attackingGod);
        //set and update power level for god and monster
        let updatedGodPower = attackingGod.power - damageToGod;
        let updatedMonsterPower = currentMonster.power -= damageToMonster;
        dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: attackingGod.id, updatedGodPower  })
        dispatch({ type: 'UPDATE_USER_MONSTER_POWER', payload: currentMonster, updatedMonsterPower })

        //display damage to DOM
        setDisplay(`Damage to ${currentMonster.name} = ${damageToMonster} _
           Damage to ${attackingGod.name} = ${damageToGod}
          `);

        dispatch({ type: 'SET_LAST_ATTACK', payload: attackingGod})
        console.log('LAST ATTACK:', store.lastAttack);

      }//end if else checking god disabled/enabled
      
      console.log('^^^^^^^^^^^^^^^CHECKING BATTLE. currentMonster.power', currentMonster.power);
      checkBattleStatus();

  }//end attack function

  return (
    <div className="battleGrid">

      
      <table className="strong tbl">
        <thead>
          <tr>
            <th colSpan={3} className="battleTh">
              Strength
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="earthTxt">Earth</td>
            <td className="ltGt">&gt;</td>
            <td className="skyTxt">Sky</td>
          </tr>
          <tr>
            <td className="fireTxt">Fire</td>
            <td className="ltGt">&gt;</td>
            <td className="earthTxt">Earth</td>
          </tr>
          <tr>
            <td className="skyTxt">Sky</td>
            <td className="ltGt">&gt;</td>
            <td className="waterTxt">Water</td>
          </tr>
          <tr>
            <td className="waterTxt">Water</td>
            <td className="ltGt">&gt;</td>
            <td className="fireTxt">Fire</td>
          </tr>
        </tbody>
      </table>

      <MonsterCard currentMonster={currentMonster} />
      
      <table className="weak tbl">
      <thead>
          <tr>
            <th colSpan={3} className="battleTh">
              Weakness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="earthTxt">Earth</td>
            <td className="ltGt">&lt;</td>
            <td className="fireTxt">Fire</td>
          </tr>
          <tr>
            <td className="fireTxt">Fire</td>
            <td className="ltGt">&lt;</td>
            <td className="waterTxt">Water</td>
          </tr>
          <tr>
            <td className="skyTxt">Sky</td>
            <td className="ltGt">&lt;</td>
            <td className="earthTxt">Earth</td>
          </tr>
          <tr>
            <td className="waterTxt">Water</td>
            <td className="ltGt">&lt;</td>
            <td className="skyTxt">Sky</td>
          </tr>
        </tbody>
      </table>

      <div className="infoDisplayContainer">
        <div className="infoDisplay">
          {renderBattleDisplay(display)}
        </div>
      </div>

      <GodCard attack={attack}/>
    </div>
  );
}

export default Battle;