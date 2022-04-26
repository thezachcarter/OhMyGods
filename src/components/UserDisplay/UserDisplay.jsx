import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

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
    const replaceGods = store.replaceGods;
    const godToReplace = store.godToReplace;

    const wikiText = godInfo[Object.keys(godInfo)[0]]?.extract;
    //   // console.log('%%%%%%%%%%%%%%%%%%%%, wikiText', wikiText);


    const howToPlay = `
    Your pantheon of gods are ready to lay waste to any monster foolish enough to meet them on
    the battlefield. Victory is gained once a monster has been reduced to zero power. If all four
    of your gods are reduced to zero power before the monster, you shall suffer defeat. Click 
    'How To Play' for detailed game rules. Click the ? button to learn more about your god.`

    const selectReplaceGod = (replaceGodId) => {
        axios.put(`/api/replaceGods/${godToReplace.id}/${replaceGodId}`)
            .then(response => {
                dispatch({ type: 'GET_USERS_GODS' })
                dispatch({ type: 'SET_DISPLAY_REDUCER', payload: 'howToPlay' });
            })
            .catch(err => {
                console.log(err)
            })

        let updatedGodPower = 8;
        dispatch({ type: 'UPDATE_USER_GOD_POWER', payload: replaceGodId, updatedGodPower })
    }

    //renders user page display based on store.display
    switch (displayReducer) {
        case 'godInfo':
            return (
                <div>
                    <h2>{wikiText}</h2>
                </div>
            );
            break;
        case 'howToPlay':
            return (
                <div>
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
        default:
            return (
                <div>
                    <h2>{howToPlay}</h2>
                </div>
            );
            break;
    }



}

export default UserDisplay;
