import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        let result = await axios.get(`https://api.github.com/users/${username}`);
        setUser(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [username]);

  if (!user) return <div className="text-center">Loading...</div>;

  return (
    <div className="flex flex-col items-center max-w-2xl mx-auto p-6 mt-6 mb-6 bg-gray-400 shadow-lg shadow-gray-600 rounded-md">
      <img className="w-24 h-24 rounded-full mb-4" src={user.avatar_url} alt={user.login} />
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">{user.login}</h1>
        {user.name && <p className="text-lg text-gray-700 mb-1 font-serif">{user.name}</p>}
        {user.bio && <p className="text-lg text-gray-700 mb-1 font-serif">{user.bio}</p>}
        {user.location && <p className="text-gray-700 mb-4 font-serif">{user.location}</p>}
        <p className="text-black ">Followers: {user.followers}</p>
        <p className="text-black ">Following: {user.following}</p>
        <p className="text-black ">Public Repos: {user.public_repos}</p>
      </div>
      <div className="mt-6">
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserProfile;


