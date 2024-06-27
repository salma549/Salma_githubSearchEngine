// import React from 'react';

// import Header from "./components/Header"

// import Footer from './components/Footer';
// import './index.css';

// function App() {
//   return (
//     <div className="flex flex-col min-h-screen">
    
//       <Header />
//       <Footer />
//     </div>
//   );
// }

// export default App;



// import './App.css';
// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import Header from "./components/Header"
// import Footer from './components/Footer';
// import './index.css';
// import { Routes, Route } from 'react-router-dom';

// import Main from './components/Main';
// import Search from './components/Search';
// import UserProfile from './components/UserProfile';

// function App() {
//   const [users, setUsers] = useState([]);

//   const searchUsers = async (userName) => {
//     try {
//       let result = await axios.get(`https://api.github.com/search/users?q=${userName}`);
//       setUsers(result.data.items);
//       console.log(result.data.items);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const defaultUsers = async () => {
//     try {
//       let result = await axios.get('https://api.github.com/users');
//       console.log(result.data);
//       setUsers(result.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     defaultUsers();
//   }, [])

//   return (
//     <>
     
//     <Header />
//          <Search searchUsers={searchUsers} />
//         {/* <Main users={users} />  */}

// <Routes>
        
//         <Route path='/' element={<Main users={users} />} />
//         <Route path='/user/:username' element={<UserProfile/>}/>
//       </Routes>
//         <Footer />
     
//     </>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from "./components/Header";
import Footer from './components/Footer';
import './index.css';
import { Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Search from './components/Search';
import UserProfile from './components/UserProfile';

function App() {
  const [users, setUsers] = useState([]);

  const searchUsers = async (userName) => {
    try {
      let result = await axios.get(`https://api.github.com/search/users?q=${userName}`);
      setUsers(result.data.items);
      console.log(result.data.items);
    } catch (error) {
      console.error(error);
    }
  }

  const defaultUsers = async () => {
    try {
      let result = await axios.get('https://api.github.com/users');
      console.log(result.data);
      setUsers(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    defaultUsers();
  }, [])

  return (
    <>
      <Header />
      <Search searchUsers={searchUsers} />
      <Routes>
        <Route path='/' element={<Main users={users} />} />
        <Route path='/user/:username' element={<UserProfile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;


