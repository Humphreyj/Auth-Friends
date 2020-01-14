import React from 'react';
import styled from 'styled-components';

const Fren = styled.div`
display: flex;
justify-content: space-between;
align-items: center;

.age {
    margin: 0 2em;
}
`

const Friend = (props) => {
    return (
        <Fren>
            <p>{props.name}</p>
            <p className='age'>{props.age}</p>
            <p>{props.email}</p>
            <button onClick={()=> props.removeHandler(props.id)}>X</button> 
        </Fren>
    );
}

export default Friend;
