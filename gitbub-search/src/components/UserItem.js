import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({user}) {
  return (
    <>
    <div className="card text-center">
            <img src={user.avatar_url}></img>
            <h3>{user.login}</h3>
            <div>
              <Link to={`/user/${user.login}`} className="btn btn-dark btn-sm my-1">
                Git Profile
              </Link>
            </div>
          </div>
    </>
  )
}

export default UserItem