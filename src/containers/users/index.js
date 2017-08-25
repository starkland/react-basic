import React from 'react';
import { Link } from 'react-router-dom';
import UserAPI from '../../api/user';

const API = new UserAPI();

const Users = () => {
    const allUsers = API.all();

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