import React from 'react'
import { Tabs, Tab, AppBar } from '@mui/material'

function Navbar2() {

  const [selectedTab, setSelectedTab] = React.useState('1');

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  return (
    <div>
      <AppBar>
        <Tabs value={selectedTab} onChange={handleChange} >
          <Tab label="Home" />
          <Tab label="About" />
          <Tab label="Contact Us" />
        </Tabs>
      </AppBar>
    </div>
  )
}

export default Navbar2
