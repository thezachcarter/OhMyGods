import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GodCard from '../GodCard/GodCard';
import MonsterCard from '../MonsterCard/MonsterCard';



// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Battle(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'

  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({ type: 'GET_USERS_GODS' });
  //   dispatch({ type: 'GET_USERS_MONSTERS' });
  // }, []);

  // const [monsterArray, setMonsterArray ]= useState(store.usersMonsters);
  const monsterArray = store.usersMonsters;
  const godArray = store.usersGods;
  
  
  //set gods to swap
  const [god1, setGod1] = useState('');
  const [god2, setGod2] = useState('');

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
  
  const attack = () => {
    console.log('ATTACK clicked');

    //power level of monster, value will change on client side, not in db
    let monsterPower = currentMonster.power
    //total power level of all gods
    const godPower = godArray.reduce((accumulator, object) => {
      return accumulator + object.power;
    }, 0);

    //base damageToMonster, before checking element or culture = 2
    let damageToMonster = 2;
    let damageToGod = 2;

    //for loop to set damageToMonsterToMonster based on element comparison
    for (let i = 0; i < godArray.length; i++) {
      console.log('GOD ARRAY', godArray);
      //check if individual god is defeated
      if (godArray[i].power === 0) {
        console.log(godArray[i].name, 'DEFEATED');
      } else {
        console.log('ELEMENTS, God:', godArray[i].element, 'Monster:', currentMonster.element);
        switch (godArray[i].element) {
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
        }//end switch statement checking god element

        //damage multiplier for culture match
        if (godArray[i].culture == currentMonster.culture) {
          damageToMonster *= 2;
          damageToGod *= 2;
        }
        //prevent negative power rating for gods
        if (damageToGod > godArray[i].power) { damageToGod = godArray[i].power }

        console.log(godArray[i].name, 'Damage To Monster', damageToMonster, 'Damage To God', damageToGod);
        let updatedGodPower = godArray[i].power - damageToGod;
        let updatedMonsterPower = currentMonster.power -= damageToMonster;
        dispatch({ type: 'UPDATE_USER_GOD_POWER', action: godArray[i].id, updatedGodPower })
        dispatch({ type: 'UPDATE_USER_MONSTER_POWER', action: currentMonster.id, updatedMonsterPower })


        //determine victory status by checking power of monster and ALL gods 
        if (monsterPower <= 0) {
          console.log('Monster:', updatedMonsterPower, 'Gods:', updatedGodPower, 'Victory');
        } else if (godPower <= 0) {
          console.log('Monster:', updatedMonsterPower, 'Gods:', updatedGodPower, 'Defeat')
        } else {
          console.log('Monster:', updatedMonsterPower, 'Gods:', updatedGodPower, 'The battle continues!');
        };

      }//end if else checking god disabled/enabled
    }//end for loop of godArray
  }

  const toggleSelect = (event) => {
    
    let i = event-1;
    console.log(event, 'selected', godArray[i]);

    if( god1 === godArray[i]){
      setGod1('')
    } else if( god1 === ''){
      setGod1(i)
    } else if( god2 === godArray[i]){
      setGod2('')
    } else{
      setGod2(i)
    }
  }

  const swapPosition = () => {
    console.log('swapPosition:', godArray, god1, god2)
    let tempArray = godArray[god1];
      godArray[god1] = godArray[god2];
      godArray[god2] = tempArray;
      console.log(godArray);
      dispatch({ type: 'GET_UPDATED_GODS_ORDER', payload: godArray })
    };
  



  console.log('CURRENT MONSTER', currentMonster);
  console.log('GOD ARRAY', godArray[0]?.name);
  return (
    <div className="battleGrid">
      <MonsterCard currentMonster={currentMonster} />
      <button className="positionBtn battleBtn" onClick={swapPosition}>Change Position</button>
      <button className="attackBtn battleBtn" onClick={attack}>Attack!</button>

      <div className="infoDisplay">
        <p>GOD 1: {godArray[god1]?.name}</p>
        <p>GOD 2: {godArray[god2]?.name}</p>
      </div>

      <GodCard toggleSelect={toggleSelect}/>
    </div>
  );
}

export default Battle;