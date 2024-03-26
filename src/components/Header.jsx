import React, { useState, useSyncExternalStore } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
//import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlinedIcon'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom'
const Header = () => {
  const [value, setValue] = useState(1);
  return (

    <div>

      <AppBar sx={{ backgroundColor: '#232F3D' }} position="fixed">
        {/* <APPBAr position  = "sticky"> */}
        <Toolbar>
          <NavLink to="/" style={{color:"white"}}> 
          <Typography>
            <LibraryBooksIcon />

          </Typography></NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, val) => setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/Books" label="Books" />
            <Tab LinkComponent={NavLink} to="/About" label="About Us" />
          </Tabs>
        </Toolbar>

      </AppBar>
    </div>
  )
}

export default Header
