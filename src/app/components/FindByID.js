import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent } from '@mui/material';

const ElementFinder = () => {
  const [searchId, setSearchId] = useState('');
  const [foundElement, setFoundElement] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3000/api/products/`);
        if (response.ok) {
          const fetchedData = await response.json();
          setData(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle the search
  const handleSearch = () => {
    const element = data.find((item) => item.id === parseInt(searchId));
    setFoundElement(element);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Search for an Element by ID
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <TextField
          label="Enter ID"
          variant="outlined"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>
      {loading && <Typography>Loading...</Typography>}
      {foundElement ? (
        <Card sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h5">{foundElement.preConten.presentTitle}</Typography>
            <Typography variant="body1">{foundElement.preConten.male}</Typography>
            <Typography variant="body2">Price: ${foundElement.price}</Typography>
          </CardContent>
        </Card>
      ) : (
        searchId && !loading && (
          <Typography variant="body1" color="error">
            Element with ID {searchId} not found.
          </Typography>
        )
      )}
    </Box>
  );
};

export default ElementFinder;
