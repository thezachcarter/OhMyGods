import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GodCard from '../GodCard/GodCard';
import MonsterCard from '../MonsterCard/MonsterCard';


function Battle() {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const [display, setDisplay] = useState('Click a God to attack!')

  // const [monsterArray, setMonsterArray ]= useState(store.usersMonsters);
  const monsterArray = store.usersMonsters;
  const godArray = store.usersGods;

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
  
  //power level of monster, value will change on client side, not in db
  const monsterPower = currentMonster.power
  //total power level of all gods
  const totalGodPower = godArray.reduce((accumulator, object) => {
    return accumulator + object.power;
  }, 0);

  //determine victory status by checking power of monster and ALL gods 
  const battleStatus = () => {
    if (monsterPower <= 0) {
      setDisplay('Victory!');
    } else if (totalGodPower <= 0) {
      setDisplay('Defeat')
    };
  }

  const attack = (event) => {

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

        //set and update power level for god and monster
        let updatedGodPower = attackingGod.power - damageToGod;
        let updatedMonsterPower = currentMonster.power -= damageToMonster;
        dispatch({ type: 'UPDATE_USER_GOD_POWER', action: attackingGod.id, updatedGodPower })
        dispatch({ type: 'UPDATE_USER_MONSTER_POWER', action: currentMonster.id, updatedMonsterPower })

        //display damage to DOM
        setDisplay(`Damage to ${currentMonster.name} = ${damageToMonster}
           Damage to ${attackingGod.name} = ${damageToGod}
          `);

        dispatch({ type: 'SET_LAST_ATTACK', action: attackingGod})
        console.log('LAST ATTACK:', store.lastAttack);

        battleStatus();

      }//end if else checking god disabled/enabled
  }//end attack function

  
  
  console.log('CURRENT MONSTER', currentMonster);
  console.log('GOD ARRAY', godArray[0]?.name);
  return (
    <div className="battleGrid">
      <MonsterCard currentMonster={currentMonster} />
      {/* <button className="positionBtn battleBtn" onClick={swapPosition}>Change Position</button> */}
      {/* <button className="attackBtn battleBtn" onClick={attack}>Attack!</button> */}

      <div className="infoDisplayContainer">
        <div className="infoDisplay">
          {display}   
        </div>
      </div>

      <GodCard attack={attack}/>
    </div>
  );
}

export default Battle;