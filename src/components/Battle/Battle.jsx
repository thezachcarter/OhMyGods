import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
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

  const monsterArray = store.monster;
  const godArray = store.usersGods;

  console.log('in BATTLE', monsterArray, godArray);

  const attack = () => {
    console.log('attack clicked');

    //power level of monster, value will change on client side, not in db
    let monsterPower = monsterArray[0].power
    //total power level of all gods
    const godPower = godArray.reduce((accumulator, object) => {
      return accumulator + object.power;
    }, 0);
    
    //determine victory status by checking power of monster and ALL gods 
    if(monsterPower === 0){
      console.log('Monster:', monsterPower,'Gods:', godPower, 'Victory');
    } else if (godPower === 0)
      {console.log('Monster:', monsterPower,'Gods:', godPower,'Defeat')
    } else {
      console.log('Monster:', monsterPower,'Gods:', godPower, 'The battle continues!');
    };
    
    //base damageToMonster, before checking element or culture = 2
    let damageToMonster = 2;
    let damageToGod = 2;
    
    //for loop to set damageToMonsterToMonster based on element comparison
    for(let i = 0; i < godArray.length; i++){
      console.log(godArray[i]);
      //check if individual god is defeated
      if(godArray[i].power === 0){
        console.log(godArray[i].name,'DEFEATED');
      } else {
        console.log('ELEMENTS, God:', godArray[i].element, 'Monster:', monsterArray[0].element);
        switch (godArray[i].element) {
          case 'Earth':
            if(monsterArray[0].element == 'Earth'){
              damageToMonster = 2;
              damageToGod = 2; 
            } else if(monsterArray[0].element == 'Sky'){
              damageToMonster = 3;
              damageToGod = 1; 
            }else if(monsterArray[0].element == 'Fire'){
              damageToMonster = 1;
              damageToGod = 3; 
            }else if(monsterArray[0].element == 'Water'){
              damageToMonster = 2; 
              damageToGod = 2;
            } else {
              damageToMonster = 2;
              damageToGod = 2;
            };
            break;
          case 'Sky':
            if(monsterArray[0].element == 'Sky'){
              damageToMonster = 2; 
              damageToGod = 2;
            } else if(monsterArray[0].element == 'Water'){
              damageToMonster = 3; 
              damageToGod = 1;
            }else if(monsterArray[0].element == 'Earth'){
              damageToMonster = 1; 
              damageToGod = 3;
            }else if(monsterArray[0].element == 'Fire'){
              damageToMonster = 2;
              damageToGod = 2; 
            } else {
              damageToMonster = 2;
              damageToGod = 2;
            };
            break;
          case 'Fire':
            if(monsterArray[0].element == 'Fire'){
              damageToMonster = 2; 
              damageToGod = 2;
            } else if(monsterArray[0].element == 'Earth'){
              damageToMonster = 3; 
              damageToGod = 1;
            }else if(monsterArray[0].element == 'Water'){
              damageToMonster = 1; 
              damageToGod = 3;
            }else if(monsterArray[0].element == 'Sky'){
              damageToMonster = 2;
              damageToGod = 2; 
            } else {
              damageToMonster = 2
              damageToGod = 2;
            };
            break;
          case 'Water':
            if(monsterArray[0].element == 'Water'){
              damageToMonster = 2;
              damageToGod = 2; 
            } else if(monsterArray[0].element == 'Fire'){
              damageToMonster = 3; 
              damageToGod = 1;
            }else if(monsterArray[0].element == 'Sky'){
              damageToMonster = 1;
              damageToGod = 3; 
            }else if(monsterArray[0].element == 'Earth'){
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
      if(godArray[i].culture == monsterArray[0].culture){
        damageToMonster *= 2;
        damageToGod *= 2;
        }
        console.log(godArray[i].name, 'Damage To Monster', damageToMonster, 'Damage To God', damageToGod);
        // monsterPower -= damageToMonster;
        // godPower -= damageToGod;
        dispatch({ type: 'SET_USER_GOD_POWER', action: godArray[i].id})
        dispatch({ type: 'UPDATE_USER_GOD', action: godArray[i].id })

      }//end if else checking god disabled/enabled
    }//end for loop of godArray
  }
  
  

  return (
    <div>
      <MonsterCard />
      <button>Change Position</button>
      <button onClick={attack}>Attack!</button>
      <GodCard />
    </div>
  );
}

export default Battle;