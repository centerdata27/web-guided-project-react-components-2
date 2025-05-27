import React from 'react'
// 👉 1- FriendsList renders several Friend components, import Friend
import Friend from './Friend'

//feed it the data it needs to render each friend
export default function FriendsList(props) {
  // 👉 2- What data does FriendsList need to do its job? Use destructuring
  console.log(props); // this is just to show how to use the props in the application 
  const { showFriendsData, changeKevin } = props; // this is the data we are using in the application, we will use it to render the friends in the application
  console.log(changeKevin); // this is just to show how to use the changeKevin function in the application
///////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className='list-friends container'>
      {/* 👉 3- We need to loop over the data rendering a Friend as we go */}
      {/* Each friend is going to need a `key` prop and also some other prop with data */}\
      {showFriendsData.map(frs => {
          return < Friend friend = {frs} key={frs.id} changeKevin = {changeKevin}/>
      })
      }

    </div>
  )
}
///////////////////////////////////////////////////////////////////////////////

// use.map to loop over the data and render a Friend component for each friend