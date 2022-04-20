import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function Admin(props) {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const gods = store.adminGods;

  useEffect(() => {
    dispatch({ type: 'GET_ADMIN_GODS' })
  }, [])

  return (
    <div>
      <h2>ADMIN</h2>
      <div>

        <table>
          <thead>
            <th>id</th>
            <th>name</th>
            <th>culture</th>
            <th>element</th>
            <th>image</th>
            <th>info</th>
          </thead>
          <tbody>
            {gods.map(god => {
              return (
                <tr>
                  <td>{god.id}</td>
                  <td>{god.name}</td>
                  <td>{god.culture}</td>
                  <td>{god.element}</td>
                  <td>{god.image}</td>
                  <td>{god.info}</td>
                  <td><button>edit</button></td>
                  <td><button>delete</button></td>
                </tr>
              );
            })};
            {/* end gods.map */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
