import React from 'react';
import { Link } from 'react-router-dom';

const Users = (props) => {
    const allUsers = props.guys ? props.guys : []
    console.warn(allUsers);

    return(
        <div>
            <ul>
                {
                    allUsers.map((p) => (
                        <li key={p.number}>
                             <Link to={`/user/${p.number}`}>{p.name}</Link>  
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Users;