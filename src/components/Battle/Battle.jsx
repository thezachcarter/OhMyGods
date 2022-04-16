import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import GodCard from '../GodCard/GodCard';
import MonsterCard from '../MonsterCard/MonsterCard';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Battle(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');

  const monsterArray = store.monster;
  const godArray = store.gods;

  console.log('in BATTLE', monsterArray, godArray);

  const attack = () => {

    const monsterPower = monsterArray[0].power

    const godPower = godArray.reduce((accumulator, object) => {
      return accumulator + object.power;
    }, 0);

    console.log('attack clicked');
    if(monsterPower === 0){
      console.log('Monster:', monsterPower,'Gods:', godPower, 'Victory');
    } else if (godPower === 0)
      {console.log('Monster:', monsterPower,'Gods:', godPower,'Defeat')
    } else {
      console.log('Monster:', monsterPower,'Gods:', godPower, 'The battle continues!');
    }
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