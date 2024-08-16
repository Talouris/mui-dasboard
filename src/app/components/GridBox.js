import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { dataBase } from '../api/products/Data';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const card = ({item}) => (
    <React.Fragment>
        <CardContent sx={{maxWidth: 345,  p: {xs:'0', sm: '5px'}}}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              Item ID:{item.id}<br/>
              Item price:{item.price}
          </Typography>
          <Typography variant="h5" component="div">
              Brand: {item.wisitContent.brand}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Male:{item.preConten.male}
          </Typography>
          <Typography variant="body2" >
              {item.preConten.presentTitle}
              <br />
              {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions sx={{ display:{xs: 'none', sm: 'block'}}}>
        <Button size="small">See More</Button>
        </CardActions>
      
    </React.Fragment>

)

function OutlinedCard() {
    return (
      
          dataBase.map((dataItem) => (
              <Grid sx={6} alignItems={'center'}  key={dataItem.id}>
                  <Item>
                      <Box sx={{ minWidth: {xs: 105, sm: 220, md: 275}}}>
                          <Card variant="outlined">{card({item:dataItem})}</Card>
                      </Box>
                  </Item>
              </Grid>
          ))
      
      
    )
  }
  

export default function GridBox() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <OutlinedCard/>
      </Grid>
    </Box>
  );
}