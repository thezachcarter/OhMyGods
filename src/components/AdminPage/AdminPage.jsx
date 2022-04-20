import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Admin() {
  
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  const gods = store.adminGods;
  const monsters = store.adminMonsters;

  useEffect(() => {
    dispatch({ type: 'GET_ADMIN_GODS' });
    dispatch({ type: 'GET_ADMIN_MONSTERS' });
  }, []);

  const [table, setTable] = useState('gods');
  const [godObj, setGodObj] = useState({
    name: '',
    culture: '',
    element: '',
    image: '',
    info: '',
  });

  const toggleTable = () => {
    table === 'gods' ? setTable('monsters') : setTable('gods');
    console.log(table);
  }

  const submitGod = (event) => {
    event.preventDefault;
    console.log('submitGod clicked', godObj);
    // dispatch({type: 'POST_GOD', payload: god})
  }

  const submitMonster = (event) => {
    event.preventDefault;
    console.log('submitMonster clicked', monster);
    dispatch({type: 'POST_MONSTER', payload: monster})
  }

  const handleGodObj = (event) => {
    switch (event.target.placeholder) {
      case 'name':
        setGodObj({...godObj, name : event.target.value,}) 
      case 'culture':
        setGodObj({...godObj, culture : event.target.value});
      case 'element':
        setGodObj({...godObj, element : event.target.value});
      case 'image':
        setGodObj({...godObj, image : event.target.value});
      case 'info':
        setGodObj({...godObj, info : event.target.value});
    }
    console.log('%%%%%%%%%%%%%%%%', godObj, event.target.value);
  }

  const handleGodEdit = (props) => {
    console.log('%%%%%%%%%%%%%%%% handleGodEdit', props.godProp);
    // dispatch({ type: 'SET_EDIT_GOD', payload: props.god })
  }


  return (
    <div>

      <h2>ADMIN</h2> 
      
      <button onClick={toggleTable}>Toggle Gods / Monsters</button>

      {/* FORMS, form rendered changes based on god/monster toggle */}
      {table === 'gods' ?
      //GOD FORM
      <div>
      <form>
        <input type="text" placeholder="name" onChange={handleGodObj}/>
        <input type="text" placeholder="culture" onChange={handleGodObj}/>
        <input type="text" placeholder="element" onChange={handleGodObj}/>
        <input type="text" placeholder="image" onChange={handleGodObj}/>
        <input type="text" placeholder="info" onChange={handleGodObj}/>
        <button type="submit" onClick={(event) => submitGod(event)}>Submit God</button>
      </form>
      </div>

      :
      //MONSTER FORM
      <div>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="culture"/>
          <input type="text" placeholder="element"/>
          <input type="text" placeholder="image"/>
          <input type="text" placeholder="info"/>
          <input type="text" placeholder="power"/>
          <button type="submit" onClick={(event) => submitMonster(event)}>Submit Monster</button>
        </form>
      </div>
      }

      {/* TABLES, table rendered changes based on god/monster toggle */}
      {table === 'gods' ?
      // GOD TABLE
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
                    <td></td>
                    <td><button onClick={handleGodEdit}>edit</button></td>
                    <td><button>delete</button></td>
                  </tr>
                );
              })}
            {/* end gods.map */}
          </tbody>
        </table>
        </div>

        :
        //MONSTER TABLE 
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
              <th>power</th>
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
                    <td>{monster.starting_power}</td>
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
