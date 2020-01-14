import React, { useState } from 'react';
import  { axiosWithAuth } from '../tools/axiosAuth';
import styled from 'styled-components';

const FormWrap = styled.div`

form {
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        margin: 1em 0;
    }
}
`

const NewFriendForm = (props) => {

    const [newFriend, updateNewFriend] = useState({
        
        id: props.friends.length,
        name: '',
        age: '',
        email: '',
        

    })

    const handleChange = e => {
        updateNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
        console.log(newFriend)
    }

    const handleSubmit = () => {
        
        axiosWithAuth()
        .post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }



    return (
        <FormWrap>
            <form onSubmit={handleSubmit} >
                <input 
                type="text"
                name='name'
                value={newFriend.name}
                onChange={handleChange}
                    />

                <input 
                type="text"
                name='age'
                value={newFriend.age}
                onChange={handleChange}
                    />

                <input 
                type="text"
                name='email'
                value={newFriend.email}
                onChange={handleChange}
                    />

                <button type='submit'>Add Friend!</button>
                
            </form>
            
        </FormWrap>
    );
}

export default NewFriendForm;
