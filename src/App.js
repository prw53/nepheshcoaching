import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Typography, CssBaseline } from '@material-ui/core';

// import useStyles from './styles';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';


function App() {
  // const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>

        <CssBaseline />
        <Navbar />
        {/* <Typography variant="h1">App Page</Typography> */}

        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" element={<Home />} />
          <Route path="Home" element={<Home />} />
          {/* <Route path="/about" component={About} /> */}
          <Route path="About" element={<About />} />
          {/* <Route path="/contacts" component={Contacts} /> */}
          <Route path="Contacts" element={<Contacts />} />
        </Routes>

        <Footer />

      </BrowserRouter>



    </div>
  );
};

export default App;




// This is a React Router v6 app

// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users/*" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>
//       <Routes>
//         <Route path=":id" element={<UserProfile />} />
//         <Route path="me" element={<OwnUserProfile />} />
//       </Routes>
//     </div>
//   );
// }
