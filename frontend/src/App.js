import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CssBaseline } from '@material-ui/core';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, teal } from '@mui/material/colors';
// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { teal, lime } from '@material-ui/core/colors';
// import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
// import TitilliumWeb from './Fonts/TitilliumWeb-SemiBold.ttf';


// Customise the Material-UI theme
const theme = createTheme({
  palette: {
    primary: {
      main: teal[400],
    },
    secondary: {
      main: lime[600],
    },
  },
  typography: {
    fontFamily: [
      'Corinthia', 
      'cursive',
      'Jost'
    ].join(','),
  },
  // typography: {
  //   fontFamily: 'Josefin Sans'
  // },
  // body: {
  //   font-family: 'Titillium Web', sans-serif
  // }
  // .heading {
  //   font-weight: 700;
  // }
  // .subheading {
  //   font-weight: 300;
  // }
});

function App() {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contacts" element={<Contacts />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
