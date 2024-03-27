import React, { useState, useSyncExternalStore } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
//import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlinedIcon'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState(1);
  //this is our blue header has four links , the first one on left hand an icon
  return (
    <div>
      <AppBar sx={{ backgroundColor: '#E0AE87' }} position="fixed">
          <Toolbar>
          <NavLink to="/" style={{color:"black"}}> 
          <Typography>
            <LibraryBooksIcon />
          </Typography></NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            color="black" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add Book" />
            <Tab LinkComponent={NavLink} to="/Books" label="Books" />
            <Tab LinkComponent={NavLink} to="/About" label="About Us" />
          </Tabs>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header
