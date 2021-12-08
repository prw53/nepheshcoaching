import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { teal, lime } from '@material-ui/core/colors';
// import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';

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
