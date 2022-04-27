import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './MonsterDisplay.scss'


function MonsterDisplay(props) {

    useEffect(() => {
        dispatch({ type: 'GET_USERS_MONSTERS'});
      }, []);

    const dispatch = useDispatch();
    const store = useSelector((store) => store);

    const monsters = store.usersMonsters;
    const [remainingMonsters, setRemainingMonsters] = useState(16);

    console.log('--------------------------',monsters);
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
                        {monsters.map(monster => 
                        {if(monster.power <= 0){
                            return (
                                <tr key={monster.id} className={monster.element}>
                                    <td>{monster.name}</td>
                                    <td>{monster.culture}</td>
                                    <td onClick={(() => handleGodInfo(god.name))}>?</td>
                                </tr>
                            )}
                        })}
                        
                    </tbody>
                </table>
            </div>
    );
}

export default MonsterDisplay;
