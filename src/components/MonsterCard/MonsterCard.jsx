import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './MonsterCard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function MonsterCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Functional Component');

//   const monsterObj = store.monster;
//   const monster = monsterObj[0];
const monsterObj = store.monster;

  console.log('in MonsterCard component', monsterObj);

  useEffect(() => {
    dispatch({ type: 'GET_MONSTER' });
  }, []);

  return (
    <>
    {monsterObj.map(monster => {
        return (
        <div className="monsterCard" key={monster.id} >
        <p>{monster.name}</p>
        <img
            className="monsterImg"
            src={monster.image}
            alt={monster.name}
        /> 
        <p>{monster.culture}</p>
        <p>{monster.element}</p>
        <p>{monster.power}</p>
        </div>
    )})};
    </>
  );
}

export default MonsterCard;