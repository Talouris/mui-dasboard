import { Grid, Card, CardContent, Typography } from '@mui/material';
import { dataBase } from '../api/products/Data';

const ResponsiveGrid = () => {
  return (
    <Grid 
      container 
      spacing={3} 
      justifyContent="center" 
      sx={{ padding: '15px' }} 
    >
      {dataBase.map(item => (
        <Grid 
          item 
          key={item.id} 
          xs={12}
          sm={6} 
          md={4}
          lg={3}
        >
          <Card>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.cardP" gutterBottom>
                    Item ID: {item.id}<br/>
                    Item price: {item.price}
                </Typography>
                <Typography variant="h5" component="div">
                    Brand: {item.wisitContent.brand}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.cardP">
                    Male: {item.preConten.male}
                </Typography>
                <Typography variant="body2" >
                    {item.preConten.presentTitle}
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponsiveGrid;
