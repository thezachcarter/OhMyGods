import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';


function MonsterDisplay(props) {

    useEffect(() => {
        dispatch({ type: 'GET_USERS_MONSTERS'});
      }, []);

    const dispatch = useDispatch();
    const store = useSelector((store) => store);

    const monsters = store.usersMonsters;

    console.log('--------------------------',monsters);
    return (

        <div className="monsterDisplay">
            <h2>MONSTER DISPLAY</h2>
            <h2>Conquered Monster</h2>
                <table className="monsterTbl">
                    <tbody>
                        {monsters.map(monster => {
                            return (
                                <tr key={monster.id} className={monster.element}>
                                    <td>{monster.name}</td>
                                    <td>{monster.culture}</td>
                                    <td>{monster.element}</td>
                                </tr>
                            )
                        })}
                        
                    </tbody>
                </table>
            </div>
    );
}

export default MonsterDisplay;
