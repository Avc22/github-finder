import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';
import React, { useContext } from 'react';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner></Spinner>
    } else {
        return (
            <div className="container">
                <div className="row">
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users;
