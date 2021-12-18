import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lime, teal } from '@mui/material/colors';
// import useStyles from './styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import useStyles from './styles';
import Navbar2 from './components/Navbar2';

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
      'Jost',
    ].join(','),
    // h2: {
    //   // fontFamily: 'calligraffiti'
    //   fontFamily: 'Corinthia'
    // },
  },
});

const fancyFont = createTheme({
  typography: [
    'Corinthia', 'cursive',
  ]
});

function App() {
  // const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <CssBaseline />
          <Navbar />
          {/* <Navbar2 /> */}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
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
