import Container from "@mui/material/Container";
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Chip from '@mui/joy/Chip';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

const bull = (
   <Box
     component="span"
     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
   >
     •
   </Box>
 );

export default function JobCard(){

   return (
      <Container maxWidth="lg">
       <Grid container direction="row" justifyContent="center" alignItems="center"spacing={2} style={{marginTop:"20px"}}>
          <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ minWidth: 320 , '&:hover': { cursor:"pointer"} }}>
         <CardContent>
         <Chip
          variant="outlined"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
        Posted 7 days ago
        </Chip>
        <CardContent sx={{ display: 'flex', pl:0, pr:0, alignItems: 'center' }}>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
        <CardContent>
        <Typography variant="p" sx={{ fontSize: 18}} component="div">
        FlexWash Technologies
        </Typography>
        <Typography sx={{ mb: 0}} color="text.secondary">
        Senior Engineer
        </Typography>
        <Typography variant="p" sx={{ fontSize: 15 , mb: 1.5 }}  component="div">
         India | Exp: 5-5 years
        </Typography>
        </CardContent>
        </CardContent>
        <Typography variant="h5" component="div">
         About Company
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold'}}  component="div">
         About us
        </Typography>
        
        <Typography variant="body2" sx={{ textAlign : 'left'}} >
        Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. 

Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages..
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Job</Button>
      </CardActions>
    </Card>
           </Grid>
          <Grid item xs={12} sm={4} ms={4}>
          <Card sx={{ minWidth: 320 , '&:hover': { cursor:"pointer" } }}>
         <CardContent>
         <Chip
          variant="outlined"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
        Posted 7 days ago
        </Chip>
        <CardContent sx={{ display: 'flex', pl:0, pr:0, alignItems: 'center' }}>
        <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90"
          srcSet="https://images.unsplash.com/photo-1507833423370-a126b89d394b?auto=format&fit=crop&w=90&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
        <CardContent>
        <Typography variant="p" sx={{ fontSize: 18}} component="div">
        FlexWash Technologies
        </Typography>
        <Typography sx={{ mb: 0}} color="text.secondary">
        Senior Engineer
        </Typography>
        <Typography variant="p" sx={{ fontSize: 15 , mb: 1.5 }}  component="div">
         India | Exp: 5-5 years
        </Typography>
        </CardContent>
        </CardContent>
        <Typography variant="h5" component="div">
         About Company
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 'bold'}}  component="div">
         About us
        </Typography>
        
        <Typography variant="body2" sx={{ textAlign : 'left'}} >
        Flex Wash is an operating system for the car wash industry. Our solutions help owners manage their operations and grow revenue. 

Our POS has a built-in CRM, allowing car washes to take advantage of their customer transaction history in order to funnel customers into subscriptions and higher margin wash packages..
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View Job</Button>
      </CardActions>
    </Card>
       
          </Grid>
      
       </Grid>

      </Container>

   )
}