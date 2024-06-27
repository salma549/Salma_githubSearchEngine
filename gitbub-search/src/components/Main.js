// // // import React from 'react';

// // // function Main({ users }) {
// // //     return (
// // //         <center>
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
// // //                 {users.map((user, i) => (
// // //                     <div 
// // //                         key={i} 
// // //                         className="flex flex-col items-center border p-4 rounded shadow-lg cursor-pointer hover:shadow-xl transition"
// // //                         onClick={() => window.open(user.html_url, "_blank")}
// // //                     >
// // //                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
// // //                         <h2 className="text-lg font-bold">{user.login}</h2>
// // //                     </div>
// // //                 ))}
// // //             </div>
// // //         </center>
// // //     )
// // // }

// // // export default Main;

// // import React from 'react';

// // function Main({ users }) {
// //     return (
// //         <center>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
// //                 {users.map((user, i) => (
// //                     <div 
// //                         key={i} 
// //                         className="flex flex-col items-center border p-4 rounded-md shadow-md cursor-pointer hover:shadow-xl transition"
// //                         onClick={() => window.open(user.html_url, "_blank")}
// //                     >
// //                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
// //                         <h2 className="text-lg font-bold">{user.login}</h2>
// //                     </div>
// //                 ))}
// //             </div>
// //         </center>
// //     );
// // }

// // export default Main;

// import React from 'react';

// function Main({ users }) {
//     return (
//         <center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4  ">
//                 {users.map((user, i) => (
//                     <div 
//                         key={i} 
//                         className="flex flex-col items-center border p-4 rounded-md shadow-md cursor-pointer hover:shadow-xl transition "
//                         onClick={() => window.open(user.html_url, "_blank")}
//                     >
//                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
//                         <h2 className="text-lg font-bold text-white">{user.login}</h2>
//                     </div>
//                 ))}
//             </div>
//         </center>
//     );
// }

// export default Main;

// import React from 'react';

// function Main({ users }) {
//     return (
//         <center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 ">
//                 {users.map((user, i) => (
//                     <div 
//                         key={i} 
//                         className="flex flex-col items-center border p-4 rounded-md shadow-md cursor-pointer hover:shadow-xl transition"
//                         onClick={() => window.open(user.html_url, "_blank")}
//                     >
//                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
//                         <h2 className="text-lg font-bold text-white">{user.login}</h2>
//                         <button 
//                             className="mt-2 px-4 py-2 bg-blue-500 text-white  hover:bg-blue-700 rounded-md transition"
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

// function Main({ users }) {
//     return (
//         <center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
//                 {users.map((user, i) => (
//                     <div 
//                         key={i} 
//                         className="flex flex-col items-center border p-4 rounded-md shadow-md cursor-pointer hover:shadow-xl transition"
//                         onClick={() => window.open(user.html_url, "_blank")}
//                     >
//                         <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
//                         <h2 className="text-lg font-bold text-black">{user.name}</h2>
//                         <p className="text-sm text-black">@{user.login}</p>
//                         <p className="text-sm text-black">{user.bio}</p>
//                         <button 
//                             className="mt-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md transition"
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



import React from 'react';

function Main({ users }) {
    return (
        <center>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                {users.map((user, i) => (
                    <div 
                        key={i} 
                        className="flex flex-col items-center border p-4  hover:shadow-xl transition bg-gray-400 shadow-lg shadow-gray-500 rounded-md"
                    >
                        <img src={user.avatar_url} alt="profilepic" className="rounded-full mb-4 w-24 h-24" />
                        <h2 className="text-lg font-bold text-black">{user.name || user.login}</h2>
                        <p className="text-sm text-black">@{user.login}</p>
                        <p className="text-sm text-black">{user.bio}</p>
                        <button 
                            className="mt-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md transition"
                            onClick={() => window.open(user.html_url, "_blank")}
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </center>
    );
}

export default Main;