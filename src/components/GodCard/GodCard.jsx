import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './GodCard.css'

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function GodCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Functional Component');

  const godArray = store.usersGods;

  useEffect(() => {
    dispatch({ type: 'GET_USERS_GODS' });
  }, []);

  return (
    <div>
      {godArray.map(god => {
        return (
          <div className="godCard" key={god.id} >
            <p>{god.name}</p>
            <img
              className="godImg"
              src={god.image}
              alt={god.name}
            /> 
            <p>{god.culture}</p>
            <p>{god.element}</p>
            <p>{god.power}</p>
          </div>
        );
      })}
    </div>
  );
}

export default GodCard;