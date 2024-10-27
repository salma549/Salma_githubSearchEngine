

// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white p-4">
//       <div className="flex flex-col items-center justify-center space-y-2 md:flex-row md:space-y-0 md:space-x-4">
//         <p className="text-center md:text-left text-sm sm:text-base">
//           © Copyright 
//             <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">
//            <span className='text-orange-600 font-serif'>Code</span><span className='text-white font-serif'>For</span><span className='text-green-600 font-serif'>India.com</span>
//           </span> 
//           All Rights Reserved <span className='text-pink-400'>2024</span>
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 w-full lg:w-full">
      <div className="max-w-screen-full mx-full px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
          © Copyright{' '}
          <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent font-bold">
            <span className="text-orange-600 font-serif">Code</span>
            <span className="text-white font-serif">For</span>
            <span className="text-green-600 font-serif">India.com</span>
          </span>{' '}
          - All Rights Reserved <span className="text-pink-400">2024</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
