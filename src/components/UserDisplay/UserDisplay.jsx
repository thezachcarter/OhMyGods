import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { renderUserDisplay, display } from '../UserPage/UserPage';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function UserDisplay({ renderUserDisplay, display }) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('Functional Component');
  const displayReducer = store.display;  
  
  //THE COMMENTED OUT CODE BELOW IS LEFTOVER FROM TRYING MANY THING TO SOLVE A RACING ISSUE WITH GOD INFO
//   const godInfo = store.godInfo;
//   const wikiText = godInfo[Object.keys(godInfo)[0]]?.extract;
//   // console.log('%%%%%%%%%%%%%%%%%%%%, wikiText', wikiText);

//   const howToPlay = `
//     Your pantheon of gods are ready to lay waste to any monster foolish enough to meet them on
//     the battlefield. Victory is gained once a monster has been reduced to zero power. If all four
//     of your gods are reduced to zero power before the monster, you shall suffer defeat. damage is dealt based on 
//     a comparison of each combatants color / element. Matching a foe's culture doubles all damage. Gods may
//     not attack twice in a row. In the upper right corner, you will see your devotion points. When you are not in battle, you may click 
//     the ^ button on any of your gods to increase their power by 1 at the cost of 1 devotion. Click the ?
//     button to learn more about your god. Click the X button to replace a god for four devotion. All new gods start 
//     with eight power.
//   `
//   const [display, setDisplay] = useState(howToPlay); 

  
//   const renderUserDisplay = (params) => {
//     console.log('$$$$$$$$$$$$$$$$ renderUserDisplay');
//     switch (params) {
//       case 'howToPlay':
//         setDisplay(howToPlay)
//         break;
//       case 'displayGodInfo':
//         setDisplay(wikiText?.toString(wikiText));
//         // console.log('WIKITEXT:', wikiText);
//         // dispatch({ type: 'SET_USER_DISPLAY', payload: wikiText })
//         break;
//     }
//   }

  return (
    <div>
      <h2>{displayReducer}</h2>
    </div>
  );
}

export default UserDisplay;
