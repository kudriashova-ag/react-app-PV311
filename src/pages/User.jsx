import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {
    const user = useLoaderData();

    return (
        <div>
            <h1>User {user.name}</h1>
            {user.email}, { user.phone }
        </div>
    );
}

export default User;
