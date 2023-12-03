//Header.js
import React, { useState } from "react";
import { AppBar,Toolbar,Tab,Tabs, Typography } from "@mui/material";
import BoyIcon from '@mui/icons-material/Boy';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [value, setValue] = useState();
    return (
      <div>
        <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
          <Toolbar>
            
              <Typography>
                <BoyIcon />
              </Typography>
         
            <Tabs
              sx={{ ml: "auto" }}
              textColor="inherit"
              indicatorColor="primary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
   
   <Tab LinkComponent={NavLink} to="/add" label="Add users" />
            <Tab LinkComponent={NavLink} to="/users" label=" Users" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
    );
};


export default Header;