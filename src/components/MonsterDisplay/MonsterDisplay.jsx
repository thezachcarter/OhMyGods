import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import './MonsterDisplay.scss'


function MonsterDisplay(props) {

    useEffect(() => {
        dispatch({ type: 'GET_USERS_MONSTERS' });
    }, []);

    const dispatch = useDispatch();
    const store = useSelector((store) => store);

    const monsters = store.usersMonsters;

    const handleMonsterInfo = (MonsterName) => {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!handleMonsterInfo clicked');
        axios.get(`/api/info/${MonsterName}`)
          .then(response => {
            dispatch({ type: 'SET_MONSTER_INFO_STORE', payload: response.data.query.pages })
            console.log(response.data.query.pages);
          })
          .then(response => {
            // renderUserDisplay('displayMonsterInfo');
            dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'monsterInfo' });
          })
          .catch(err => {
            console.log(err)
          })
      };

    return (

        <div className="monsterDisplay">
            <table className="monsterTbl">
                <thead>
                    <tr>
                        <th colSpan={3}>
                            Conquered Monsters:
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {monsters.map(monster => {
                        if (monster.power <= 0) {
                            return (
                                <tr key={monster.id} className={monster.element}>
                                    <td>{monster.name}</td>
                                    <td>{monster.culture}</td>
                                    <td><button className="monsterDisplayBtn" 
                                    onClick={(() => handleMonsterInfo(monster.name))}>?</button></td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default MonsterDisplay;
