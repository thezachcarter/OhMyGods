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
  const monsters = store.adminMonsters;

  useEffect(() => {
    dispatch({ type: 'GET_ADMIN_GODS' });
    dispatch({ type: 'GET_ADMIN_MONSTERS' });
  }, []);

  const [table, setTable] = useState('gods');

  const toggleTable = () => {
    table === 'gods' ? setTable('monsters') : setTable('gods');
    console.log(table);
  };

  return (
    <div>

      <h2>ADMIN</h2> 

      <div>
      <button onClick={toggleTable}>Toggle Gods / Monsters</button>
      </div>

      {table === 'god' ?

      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>culture</th>
              <th>element</th>
              <th>image</th>
              <th>info</th>
            </tr>
          </thead>
          <tbody>
              {gods.map(god => {
                return (
                  <tr key={god.id}>
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
              })}
            {/* end gods.map */}
          </tbody>
        </table>
        </div>

        :

        <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>culture</th>
              <th>element</th>
              <th>image</th>
              <th>info</th>
            </tr>
          </thead>
          <tbody>
              {monsters.map(monster => {
                return (
                  <tr key={monster.id}>
                    <td>{monster.id}</td>
                    <td>{monster.name}</td>
                    <td>{monster.culture}</td>
                    <td>{monster.element}</td>
                    <td>{monster.image}</td>
                    <td>{monster.info}</td>
                    <td><button>edit</button></td>
                    <td><button>delete</button></td>
                  </tr>
                );
              })}
            {/* end monsters.map */}
          </tbody>
        </table>
        </div>

      }
      
    </div>
  );
}

export default Admin;
