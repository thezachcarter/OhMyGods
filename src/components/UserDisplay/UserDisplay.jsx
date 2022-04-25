import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { renderUserDisplay, display } from '../UserPage/UserPage';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserDisplay() {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');
    const displayReducer = store.display;
    console.log('!!!DISPLAY REDUCER!!!', displayReducer);
    //THE COMMENTED OUT CODE BELOW IS LEFTOVER FROM TRYING MANY THING TO SOLVE A RACING ISSUE WITH GOD INFO
    const godInfo = store.godInfo;
    const wikiText = godInfo[Object.keys(godInfo)[0]]?.extract;
    //   // console.log('%%%%%%%%%%%%%%%%%%%%, wikiText', wikiText);

    const howToPlay = `
    Your pantheon of gods are ready to lay waste to any monster foolish enough to meet them on
    the battlefield. Victory is gained once a monster has been reduced to zero power. If all four
    of your gods are reduced to zero power before the monster, you shall suffer defeat. damage is dealt based on 
    a comparison of each combatants color / element. Matching a foe's culture doubles all damage. Gods may
    not attack twice in a row. In the upper right corner, you will see your devotion points. When you are not in battle, you may click 
    the ^ button on any of your gods to increase their power by 1 at the cost of one devotion. Click the ?
    button to learn more about your god. Click the X button to replace a god for six devotion. All new gods start 
    with eight power.
  `

    //renders user page display based on store.display
    switch (store.display) {
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
                    <h2>{howToPlay}</h2>
                </div>
            );
            break;
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
