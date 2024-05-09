import Container from "@mui/material/Container";
import * as React from 'react';
import Grid from "@mui/material/Grid";
import Chip from '@mui/joy/Chip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

export default function JobCard({job}){

   return (
     <>
        <Container maxWidth="lg">
        <Grid container direction="row" alignItems="center" justifyContent="center"spacing={2}style={{marginTop:"20px"}}>
        <Grid item xs={12}key={job.id}>
        <Card key={job.id} sx={{ Width: 320, '&:hover': { cursor:"pointer"} }}>
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
          alt=""
          />
        </AspectRatio>
        <CardContent>
        <Typography variant="p" sx={{ fontSize: 18}} component="div">
         {job.company}
        </Typography>
        <Typography sx={{ mb: 0}} color="text.secondary">
         {job.role}
        </Typography>
        <Typography variant="p" sx={{ fontSize: 15 , mb: 1.5 }}  component="div">
         {job.location} | Exp: {job.experience} years
        </Typography>
        <Typography variant="p" sx={{ fontSize: 15 , mb:1.5}}  component="div">
         {job.minBasePay} | {job.EmpNo}
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
        {job.jobDescription}
        </Typography>
        </CardContent>
        <CardActions>
        <Button size="small">View Job</Button>
        </CardActions>
        </Card>
        </Grid>
        </Grid>
       </Container>
       
    </>
    
      
       

   )
}
