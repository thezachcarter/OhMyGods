import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function GodCard(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const [heading, setHeading] = useState('Functional Component');

  const gods = store.gods;

  console.log(gods);

  useEffect(() => {
    dispatch({ type: 'GET_GODS' });
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default GodCard;