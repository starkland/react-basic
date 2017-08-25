import React from 'react';
import UserAPI from '../../api/user';

const API = new UserAPI();

const UserComponent = (props) => {
    const user = API.get(
        parseInt(props.match.params.number, 10)
    )
    
    if (!user) {
        return <div>Sorry, but the user was not found</div>
    }

    return(
        <div>
            <h1>{user.name} (#{user.number})</h1>
            <h2>{user.position}</h2>
        </div>
    )
}

export default UserComponent;