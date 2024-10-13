
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function UserPage({ getUser, user }) {
  const { username } = useParams();

  const {
    hireable,
    name,
    avatar_url,
    bio,
    company,
    blog,
    location,
    html_url,
    following,
    followers,
    email,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getUser(username);
  }, [getUser, username]);

  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-600 text-white py-10 text-center relative overflow-hidden ml-14 mt-3  ">
        <div className="absolute inset-0 opacity-50">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
               d="M0,128L30,138.7C60,149,120,171,180,192C240,213,300,235,360,202.7C420,171,480,85,540,53.3C600,21,660,43,720,74.7C780,107,840,149,900,170.7C960,192,1020,192,1080,160C1140,128,1200,64,1260,32C1320,0,1380,0,1410,0L1440,0L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
            ></path>
          </svg>
        </div>
        <h1 className="text-5xl font-extrabold mb-6 animate-pulse">Welcome, {username}!</h1>
        <Link
          to="/"
          className="inline-block bg-white text-blue-600 py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-xl"
        >
          Back to Search
        </Link>
      </div>

      <div className="container mx-auto mt-10 grid lg:grid-cols-2 gap-12 px-6 ml-8 hover:cursor-pointer">
        {/* Profile Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-110 hover:shadow-xl">
          <h2 className="text-2xl font-semibold mb-4">
            {hireable ? (
              <span className="text-green-500 animate-pulse">Open to Hire</span>
            ) : (
              <span className="text-red-500">Not Available for Hire</span>
            )}
          </h2>
          <img
            src={avatar_url}
            alt={name}
            className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover shadow-lg transform transition-all duration-300 hover:scale-110"
          />
          <h1 className="text-3xl font-bold mb-2">{name}</h1>
          {location && <p className="text-lg text-gray-500 mb-4">{location}</p>}
          {company && (
            <p className="text-lg font-medium text-gray-600 mb-2">
              <strong>Company:</strong> {company}
            </p>
          )}
          {email && (
            <p className="text-lg font-medium text-gray-600">
              <strong>Email:</strong> {email}
            </p>
          )}
        </div>

        {/* Bio and Social Links Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-110 hover:shadow-xl">
          {bio && (
            <>
              <h2 className="text-2xl font-semibold mb-4 text-center">Bio</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{bio}</p>
            </>
          )}

          {blog && (
            <p className="text-lg font-medium mb-4 text-blue-600">
              <strong>Blog:</strong>{" "}
              <a
                href={blog}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-500"
              >
                {blog}
              </a>
            </p>
          )}

          <div className="flex justify-center space-x-4">
            <a
              href={html_url}
              className="bg-gradient-to-r from-blue-500 to-green-500 text-white py-3 px-6 rounded-full shadow-lg hover:from-green-400 hover:to-blue-400 transition transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto mt-10 px-6 ml-10 hover:cursor-pointer mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-110 hover:shadow-xl">
            <h3 className="text-lg">Followers</h3>
            <p className="text-2xl font-bold">{followers}</p>
          </div>
          <div className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white py-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-110 hover:shadow-xl">
            <h3 className="text-lg">Following</h3>
            <p className="text-2xl font-bold">{following}</p>
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-110 hover:shadow-xl">
            <h3 className="text-lg">Public Repos</h3>
            <p className="text-2xl font-bold">{public_repos}</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white py-6 rounded-lg shadow-md text-center transition-transform transform hover:scale-110 hover:shadow-xl">
            <h3 className="text-lg">Public Gists</h3>
            <p className="text-2xl font-bold">{public_gists}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;