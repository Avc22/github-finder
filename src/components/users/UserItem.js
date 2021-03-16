import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const UserItem = ({ user: { login, avatar_url, html_url } }) => {


    return (

        <div className="col-4 mb-5 text-center">
            <img src={avatar_url} alt="Not found" style={{ width: '100px' }}></img>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-primary">
                    More
                    </Link>
            </div>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
