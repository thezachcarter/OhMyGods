import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import MonsterDisplay from '../MonsterDisplay/MonsterDisplay';

import './UserDisplay.scss';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserDisplay() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');
    const dispatch = useDispatch()

    const displayReducer = store.display;
    const godInfo = store.godInfo;
    const monsterInfo = store.monsterInfo;
    const replaceGods = store.replaceGods;
    const godToReplace = store.godToReplace;

    const wikiText = godInfo[Object.keys(godInfo)[0]]?.extract;
    const monsterWikiText = monsterInfo[Object.keys(monsterInfo)[0]]?.extract;

    


    const selectReplaceGod = (replaceGodId) => {
        
        const updatedGodPower = 8

        axios.put(`/api/replaceGods/${godToReplace.id}/${replaceGodId}`)
            .then(response => {
                dispatch({ type: 'GET_USERS_GODS' })
                dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'intro' });
                dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: replaceGodId, updatedGodPower })
            })
            .catch(err => {
                console.log(err)
            })
    }

    //renders user page display based on store.display
    switch (displayReducer) {
        case 'intro':
            return (
                <div className="userDisplayContainer">
                    <h2>Click 'How To Play' for detailed game rules.</h2>
                    <h2>Click the '?' button on any god to learn about their origins.</h2>
                    <h2>After winning a battle, click 'Monsters' to view your conquests and access their background info.</h2>
                    <h2>You may restart at any time by clicking 'Restart'.</h2>
                </div>
            );
            break;
        case 'godInfo':
            return (
                <div className="userDisplayContainer">
                    <h2>{wikiText}</h2>
                </div>
            );
            break;
        case 'howToPlay':
            return (
                <div className="userDisplayContainer">
                    <h1>The Basics</h1>
                    <h2>Once you enter into battle, click a god to launch an attack. The god and monster
                        will then exchange damage. Gods may not attack twice in a row, unless all other 
                        gods have been eliminated.</h2>
                    <h1>Damage</h1>
                    <h2>Damage is dealt based on a comparison of each combatants color / element.
                        Base damage is two points, with a strength advantage it is increased to three,
                        with a weakness disadvantage it is reduced to one. Matching a foe's culture
                        doubles all damage.</h2>
                    <h1>Devotion</h1>
                    <h2>In the upper right corner, you will see your devotion points. You will
                        earn eight devotion points for every battle won. When you are not in battle, 
                        you may click the ^ button on any of your gods to
                        increase their power by one at the cost of one devotion. For six devotion
                        you may replace a god, this action cannot be cancelled or undone. To replace a god, 
                        click the X button on the card of the god that you wish
                        to replace. you will then choose one of three randomly offered
                        replacements gods. All new gods start with eight power.</h2>
                </div>
            );
            break;
        case 'replaceGods':
            return (
                <div className="replaceGodContainer">
                    <h2>Choose a God to replace {godToReplace.name}</h2>
                    <table className="replaceGodTbl">
                        <tbody>
                            {replaceGods.map(replaceGod => {
                                return (
                                    <tr key={replaceGod.id} className={replaceGod.element}
                                        onClick={(() => selectReplaceGod(replaceGod.id))}>
                                        <td>{replaceGod.name}</td>
                                        <td>{replaceGod.culture}</td>
                                        <td>{replaceGod.element}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            );
            break
            case 'monsterDisplay':
            return (
                <MonsterDisplay />
            );
            break
            case 'monsterInfo':
            return (
                <div className="userDisplayContainer">
                    <h2>{monsterWikiText}</h2>
                </div>
            );
            break
        default:
            return (
                <div className="userDisplayContainer">
                    <h2>Click 'How To Play' for detailed game rules.</h2>
                    <h2>Click the '?' button on any god to learn about their origins.</h2>
                    <h2>After winning a battle, click 'Monsters' to view your conquests and access their background info.</h2>
                    <h2>You may restart at any time by clicking 'Restart'.</h2>
                </div>
            );
            break;
    }



}

export default UserDisplay;
