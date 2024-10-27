


// import React from 'react';

// function Main({ users }) {
//     return (
//         <center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
//                 {users.map((user, i) => (
//                     <div 
//                         key={i} 
//                         className="flex flex-col items-center border p-4  hover:shadow-xl transition bg-gray-400 shadow-lg shadow-gray-500 rounded-md"
//                     >
//                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
//                         <h2 className="text-lg font-bold text-black">{user.name || user.login}</h2>
//                         <p className="text-sm text-black">{user.bio}</p>
//                         <p className="text-sm text-black">@{user.login}</p>
                   
//                         <button 
//                             className="mt-2 px-2 py-2 bg-blue-700 text-white hover:bg-blue-700 rounded-md transition"
//                             onClick={() => window.open(user.html_url, "_blank")}
//                         >
//                             View Profile
//                         </button>
//                     </div>
//                 ))} 
//             </div>
//         </center>
//     );
// }

// export default Main;



// import React from 'react';
// import { Link } from 'react-router-dom';

// function Users({ users }) {
//     return (
//         <center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ml-10">
//                 {users.map((user, i) => (
//                     <div 
//                         key={i} 
//                         className="flex flex-col items-center border p-4  hover:shadow-xl transition bg-gray-400 shadow-lg shadow-gray-500 rounded-md"
//                     >
//                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
//                         <h2 className="text-lg font-bold text-black">{user.name || user.login}</h2>
//                         <p className="text-sm text-black">{user.bio}</p>
//                         <p className="text-sm text-black">@{user.login}</p>
                   
//                         <button className='mt-2 px-2 py-2 bg-blue-700 text-white hover:bg-blue-700 rounded-md transition'>
//               <Link to={`/user/${user.login}`} >
//                 Git Profile
//               </Link>
//             </button>
//                     </div>
//                 ))} 
//             </div>
//         </center>
//     );
// }

// export default Users;

import React from 'react';
import { Link } from 'react-router-dom';

function Users({ users }) {
    return (
        <div className="container mx-auto px-2 sm:px-4 lg:px-8 py-4 ">
            {/* Grid layout to handle responsiveness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {users.map((user, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col items-center border p-4 hover:shadow-xl transition bg-gray-100 shadow-lg rounded-md"
                    >
                        {/* Responsive profile image size */}
                        <img 
                            src={user.avatar_url} 
                            alt="profilepic" 
                            className="rounded-full mb-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" 
                        />
                        <h2 className="text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold text-black">
                            {user.name || user.login}
                        </h2>
                        <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 mt-1">
                            {user.bio || 'No bio available'}
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-1">@{user.login}</p>

                        {/* Responsive button padding and font size */}
                        <Link 
                            to={`/user/${user.login}`}
                            className="mt-3 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base bg-blue-600 text-white hover:bg-blue-700 rounded-md transition"
                        >
                            Git Profile
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Users;
