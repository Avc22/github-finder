import React, { useEffect, Fragment, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext'

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { getUser, loading, user, repos, getUserRepos } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, [])

    const { name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable, company } = user;

    if (loading) return <Spinner />

    return (
        <div>
            <Link to='/' className='btn btn-primary'>
                Back to search
            </Link>
                Hireable: {' '}
            {hireable ? <p>TRUE</p> : <p>FALSE</p>}
            <div>
                <img src={avatar_url} alt="" />
                <h1>{name}</h1>
                <p>Location: {location}</p>
            </div>
            <div>
                {bio && (
                    <Fragment>
                        <h3>Bio</h3>
                        <p>{bio}</p>
                    </Fragment>
                )}
                <a href={html_url}>Visit Github</a>
            </div>
            <ul>
                <li>
                    {login &&
                        <>
                            <strong>Username:</strong> {login}
                        </>
                    }
                </li>
                <li>
                    {company &&
                        <>
                            <strong>Company:</strong> {company}
                        </>
                    }
                </li>
                <li>
                    {blog &&
                        <>
                            <strong>Website:</strong> {blog}
                        </>
                    }
                </li>
            </ul>
            <div>
                <div>Followers: {followers} </div>
                <div>Following: {following} </div>
                <div>Public Repos: {public_repos} </div>
                <div>Public Gists: {public_gists} </div>
            </div>
            <Repos repos={repos} />
        </div>
    )
}

export default User;
