import React,{ useState, useEffect } from 'react';
import { axiosWithAuth } from '../tools/axiosAuth';
import Friend from './Friend';
import NewFriendForm from './NewFriendForm';

const Friends = () => {

    const [friends, updateFriends] = useState([]);

    useEffect(() => {
      axiosWithAuth().get('http://localhost:5000/api/friends')
      .then(res => {
          updateFriends(res.data)
      })
      .catch(err => {
          console.log(err);
      })
    },[])

    const removeHandler = itemId => {
        updateFriends(...friends.filter(item => item.id !== itemId));
    }
    

    return (
        <div>
            { friends.map((friend,i) => {
                return (
                    <Friend
                    key={i}
                    id={friend.id}
                    name={friend.name}
                    age={friend.age}
                    email={friend.email}
                    removeHandler={removeHandler} />
                )
            })}
            <NewFriendForm
            friends={friends} 
            />
        </div>
    );
}

export default Friends;
