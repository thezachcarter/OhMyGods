import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { currentMonster } from '../Battle/Battle'

import './MonsterCard.scss'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function MonsterCard() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const dispatch = useDispatch();

    const monsterArray = store.usersMonsters;
    const user = store.user;
    const currentMonster = store.currentMonster;


    return (
        <div className="monsterCardContainer">

            <div className={`currentMonsterCard ${currentMonster.element}`}
                key={currentMonster.id} >
                <h2 className="monsterName">{currentMonster.name}</h2>
                <img
                    className="monsterImg"
                    src={currentMonster.image}
                    alt={currentMonster.name}
                />
                <h2 className="monsterCulture">{currentMonster.culture}</h2>
                <h2 className="monsterPower">power : {currentMonster.power}</h2>
            </div>
        </div>
    );
}

export default MonsterCard;