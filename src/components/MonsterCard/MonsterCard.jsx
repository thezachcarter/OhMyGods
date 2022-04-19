import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentMonster } from '../Battle/Battle'

import './MonsterCard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function MonsterCard({ currentMonster }) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const dispatch = useDispatch();

    const monsterArray = store.usersMonsters;

    console.log(monsterArray);

    useEffect(() => {
        dispatch({ type: 'GET_USERS_MONSTERS' });
    }, []);

    return (
        <div className="monsterCardContainer">
            {/* {monsterArray.map(monster => {
        return ( */}
            <div className="currentMonsterCard" key={currentMonster.id} >
                <p>{currentMonster.name}</p>
                <img
                    className="currentMonsterImg"
                    src={currentMonster.image}
                    alt={currentMonster.name}
                />
                <p>{currentMonster.culture}</p>
                <p>{currentMonster.element}</p>
                <p>{currentMonster.power}</p>
            </div>
            {/* )})}; */}
        </div>
    );
}

export default MonsterCard;