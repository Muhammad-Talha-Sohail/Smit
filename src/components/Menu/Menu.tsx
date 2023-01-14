import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link } from 'react-router-dom';

import "./li.css";
export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs value={value} onChange={handleChange} centered>
          < Link to='/'> 
          <Tab label="Home" /></Link>
          
          <Link to ='/about'>
            <Tab label=" About" />
            </Link>
          <Link to='/service' >
            <Tab label="Service" />
            </Link>
      
          <Tab label=" News" />
          <Tab label=" Contact us" />
        </Tabs>
     
      </Box>
       
        </>
    );
  }
