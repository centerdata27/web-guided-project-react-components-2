// This is the top-level component
// so we'll keep application state at this level.
// 👉 1- Import the state hook!
import React, { useState } from 'react'
import FriendsList from './FriendsList'
import Search from './Search'

// 👉 2- Import the dummy data that will power the application.
// (Tomorrow we'll fetch the data from an API instead.)

///data => //////////////////////////////////////////////////////////////////////////
import dummyfriendsData, {hello} from '../dummy-data/friends'
import Friends from '../dummy-data/friends';
console.log (hello); // this is just to show how to import a variable from a file
console.log(dummyfriendsData); // all the datat we are going to use in this applicatiopn 
//////////////////////////////////////////////////////////////////////////////////////////////

//keep track of data =>
export default function App() {   //kep track of data we are using and , datat we will change over time 
  // 👉 3- Initialize a slice of state to keep track of the data
  // using the dummy data as the initial value of the slice of state
  const [friendsData, changeFriendsData] = useState(dummyfriendsData);  
  console.log(changeFriendsData); //function that will change the data we are using in the application
  console.log(friendsData); // this is just to show how to use the data we imported from the dummy-data fil
//////////////////////////////////////////////////////////////////////////////////////////


  // 👉 4- Initialize a slice to keep track of the value of the search box
  // using an empty string as the initial value of the slice
  const [searchTerm, changeSearchTerm] = useState(''); // this is the value of the search box, we will use it to filter the data we are using in the application
  console.log(searchTerm); // this is just to show how to use the search term in the application
  console.log(changeSearchTerm); // this is just to show how to change the search term in the application
  console.log(''); //shows that teh serch box is working and we can change the value of the search ter(empty)
///////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 👉 5- Build a `changeStatus` function that takes an id and
  // changes the `married` from true to false and viceversa

  const changeStatusId = (id) => {
    // this function will change the status of the friends in the application
    const updatedFriends = friendsData.map(friend => {
      if (friend.id=== id) {
        return { ...friend, married: !friend.married }; // toggle the married status
      }
      return friend; // return the friend object as is if id does not match
    });
    changeFriendsData(updatedFriends); // update the state with the new data
  } // this is a function that will change the status of the friends in the application
 
  // STRETCH - Make a helper function that returns
  // a filtered array of friends data (filtering by search term)
  const getFilterFriends= () => { 
  const  termNormalized= searchTerm.trim().toLowerCase(); // normalize the search term by removing whitespace and converting to lowercase
  if (!termNormalized) return friendsData; // if the search term is empty, return the original array
  return friendsData.filter( friend => {
    // filter the friends array by checking if the name includes the search term
    return friend.name.toLowerCase().includes(termNormalized);
    
  })
}
console.log(<div className='app-friends container'></div>)
  return (
    <div className='app-friends container'>
      {/* 👉 6- Render the Search component */}
      {/* STRETCH - Changes to the input should update the search term */}
      <Search searching={changeSearchTerm}/> {/* this is the search box that will filter the data we are using in the application */}

      {/* 👉 7- Render the FriendsList component */}
      <FriendsList showFriendsData={getFilterFriends()} changeKevin={changeStatusId}/>
      
      {/* What prop/props does FriendsList need? */}
    </div>
  )
}
