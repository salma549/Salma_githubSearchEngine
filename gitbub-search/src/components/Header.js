


// import React from 'react';
// import logo from '../images/logo.jpg';
// import github from '../images/github.jpg';


// const Header = () => {
  

//   return (
//     <header className="bg-black p-4 flex-shrink-0">
//       <nav className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="w-14 p-2 sm:w-12 md:w-14 lg:w-16 rounded-full" />
//         </div>
//         <ul className="flex space-x-5 md:space-x-7 text-white text-medium sm:text-lg md:text-xl font-medium font-serif cursor-pointer">
//           <li>
//           <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">GitHub</a>
//           </li>
//           <li>
//             <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </li>
//           <li>
//             <a href="mailto:salmasanubar786@gmail.com">Mail</a>
//           </li>
         

        
         
//         </ul>
//       </nav>
//       <div className="text-center  sm:mt-20 flex flex-col items-center justify-center w-full">
//         <img src={github} alt="GitHub Logo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">Salma Sanubar</h1>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-green-300 mt-2">
//           GitHub <span className="text-purple-300">Search Engine</span>
//         </h2>
//       </div>
      
//     </header>
//   );
// };

// export default Header;


// import React, { useState } from 'react';
// import logo from '../images/logo.jpg';
// import github from '../images/github.jpg';
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Updated import for v2

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="bg-black p-4 flex-shrink-0">
//       <nav className="flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <img src={logo} alt="Logo" className="w-14 p-2 sm:w-12 md:w-14 lg:w-16 rounded-full" />
//         </div>

//         {/* Hamburger menu for smaller screens */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-white focus:outline-none">
//             {isOpen ? (
//               <XMarkIcon className="h-8 w-8" />
//             ) : (
//               <Bars3Icon className="h-8 w-8" />
//             )}
//           </button>
//         </div>

//         {/* Navigation links for larger screens and dropdown for smaller */}
//         <ul
//           className={`md:flex space-x-5 md:space-x-7 text-white text-medium sm:text-lg md:text-xl font-medium font-serif cursor-pointer 
//           ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-black top-16 right-0 w-full md:w-auto transition-transform transform md:translate-x-0`}
//         >
//           <li className="p-4 md:p-0 text-center border-b md:border-none">
//             <a href="/">Home</a>
//           </li>
//           <li className="p-4 md:p-0 text-center border-b md:border-none">
//             <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">GitHub</a>
//           </li>
//           <li className="p-4 md:p-0 text-center border-b md:border-none">
//             <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//           </li>
//           <li className="p-4 md:p-0 text-center border-b md:border-none">
//             <a href="mailto:salmasanubar786@gmail.com">Mail</a>
//           </li>
//         </ul>
//       </nav>

//       <div className="text-center sm:mt-20 flex flex-col items-center justify-center w-full">
//         <img src={github} alt="GitHub Logo" className="h-16 sm:h-20 md:h-24 rounded-full mb-4 sm:mb-6 md:mb-8" />
//         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-green-300">Salma Sanubar</h1>
//         <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-green-300 mt-2">
//           GitHub <span className="text-purple-300">Search Engine</span>
//         </h2>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import logo from '../images/logo.jpg';
import github from '../images/github.jpg';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black p-4 flex-shrink-0">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 rounded-full" />
        </div>

        {/* Hamburger menu for smaller screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Navigation links for larger screens and dropdown for smaller */}
        <ul
          className={`md:flex md:items-center md:space-x-6 text-white text-base sm:text-lg md:text-xl font-medium font-serif cursor-pointer 
          ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-black top-16 right-0 w-full md:w-auto transition-transform transform md:translate-x-0`}
        >
          <li className="p-4 md:p-0 text-center border-b md:border-none">
            <a href="/">Home</a>
          </li>
          <li className="p-4 md:p-0 text-center border-b md:border-none">
            <a href="https://github.com/salma549" target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li className="p-4 md:p-0 text-center border-b md:border-none">
            <a href="https://www.linkedin.com/in/salma-sanubar-8a7776251" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li className="p-4 md:p-0 text-center border-b md:border-none">
            <a href="mailto:salmasanubar786@gmail.com">Mail</a>
          </li>
        </ul>
      </nav>

      {/* Centered content for all screen sizes */}
      <div className="text-center mt-8 sm:mt-16 flex flex-col items-center justify-center w-full">
        <img src={github} alt="GitHub Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 rounded-full mb-4 sm:mb-6 md:mb-8" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-serif text-green-300">
          Salma Sanubar
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-mono text-green-300 mt-2">
          GitHub <span className="text-purple-300">Search Engine</span>
        </h2>
      </div>
    </header>
  );
};

export default Header;
