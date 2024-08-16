import React, { useState } from 'react';
import { Tabs, Tab, Box, useTheme } from '@mui/material';
import CatalogOwn from './CatalogOwn';
import ResponsiveGrid from './ResponsiveGrid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

const MyTabs = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        marginTop: 'auto',
        color: theme.palette.text.grey,
      }}
    >
      <Tabs 
        value={value} 
        onChange={handleChange} 
        aria-label="simple tabs example"
        textColor="inherit"
        indicatorColor="primary" 
      >
        <Tab label="Tab 1"/>
        <Tab label="Tab 2"/>
      </Tabs>
      <TabPanel value={value} index={0}>
        <ResponsiveGrid/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CatalogOwn/>
      </TabPanel>
    </Box>
  );
};

export default MyTabs;
