


import React from 'react';
import logo from '../images/logo.jpg';
import github from '../images/github.jpg';


const Header = () => {
  

  return (
    <header className="bg-black p-4 flex-shrink-0">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="w-14 p-2 sm:w-12 md:w-14 lg:w-16 rounded-full" />
        </div>
        <ul className="flex space-x-5 md:space-x-7 text-white text-medium sm:text-lg md:text-xl font-medium font-serif cursor-pointer">
          <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href="mailto:salmasanubar786@gmail.com">Mail</a>
          </li>
          <li>
            <a href="User" target="_blank" rel="noopener noreferrer">UserProfile</a>
          </li>

          {/* <Link to="/user/:username">
          UserProfile
          </Link> */}
         
        </ul>
      </nav>
      <div className="text-center  sm:mt-20 flex flex-col items-center justify-center w-full">
        <img src={github} alt="GitHub Logo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">Salma Sanubar</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-green-300 mt-2">
          GitHub <span className="text-purple-300">Search Engine</span>
        </h2>
      </div>
      {/* <div className="flex flex-col p-4 md:flex-row md:space-x-4 mt-4 w-80 md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Search your GitHub user here..."
          className="p-3 h-10 rounded-md w-full md:w-3/4 bg-gradient-to-r from-purple-300 to-pink-300 placeholder-gray-500 mb-2 md:mb-0"
        />
        <button
          onClick={handleSearch}
          className="text-black  h-10 rounded-full w-full md:w-1/4 bg-gradient-to-r from-purple-200 to-pink-200"
        >
          Search
        </button>
      </div> */}
    </header>
  );
};

export default Header;