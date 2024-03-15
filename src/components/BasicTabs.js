import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useState } from 'react';
import './BasicTabs.css';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, padding: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');

  const inputOneChangeHandler = (event) => {
    setInputOne(event.target.value);
    console.log(inputOne);
  }

  const inputTwoChangeHandler = (event) => {
    setInputTwo(event.target.value);
    console.log(inputTwo);
  }
  const swapHandler = () => {
    const [tempOne, tempTwo] = [inputOne, inputTwo];
    setInputOne(tempTwo);
    setInputTwo(tempOne);
  };


  return (
    <Box sx={{ width: '100%', padding: 0 }} className='destination'>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', padding: 0 }} className='destination'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="icon position tabs example"
        >
          <Tab icon={<LocationOnIcon />} label="One-Way" />
          <Tab icon={<DirectionsCarFilledIcon />} label="Round Trip" />
          <Tab icon={<AccessTimeIcon />} label="Hourly Ride" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="locationInput">
            <input id='' placeholder='ENTER PICKUP LOCATION' onChange={inputOneChangeHandler} value={inputOne}/>
            <input placeholder='ENTER DESTINATION LOCATION' onChange={inputTwoChangeHandler} value={inputTwo}/>
        </div>
        {/* <div onclick={swapHandler}><SwapVertIcon/></div> */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Round Trip
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Hourly Ride
      </CustomTabPanel>
    </Box>
  );
}
