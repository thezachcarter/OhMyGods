import React from 'react';
import {useSelector} from 'react-redux';
import {useHistory, useLocation} from 'react-router-dom';
import GodCard from '../GodCard/GodCard';

//styling
import './UserPage.scss'

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const location = useLocation();

  console.log(location);
  return (
    <div className="userPageGrid">
      <h1 className="title">OhMyGods</h1> 
      <button className="battleBtn" onClick={() => history.push('/battle')}>TO BATTLE!!!</button>

      {/* style classes coming from GodCard component= godCard AND godCardContainer */}
      <GodCard />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
