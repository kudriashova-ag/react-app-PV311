import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, Outlet, useLoaderData, useSearchParams } from 'react-router';

const Users = () => {
   /* const [users, setUsers] = useState([]);

    useEffect(() => { 
        getUsers();
    }, [])

    const getUsers = async () => { 
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
    }*/
    
    const users = useLoaderData();
    
    const [search, setSearch] = useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') || '');

    useEffect(() => {
        setSearch({q: textSearch});
    }, [textSearch]);
    
    const filterUsers = (user) => user.name.toLowerCase().includes(textSearch.toLowerCase());

    return (
        <div>
            <h1>Users</h1>

            <div>
                <input type="text" value={textSearch} onChange={(e) => setTextSearch(e.target.value)} />
            </div>

            {users.filter(filterUsers).map(user => <div key={user.id}> <Link to={`/users/${user.id}`}>{user.name}</Link> </div>)}

            <Outlet />
        </div>
    );
}

export default Users;

  
  