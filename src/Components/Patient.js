import { Grid, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'

export default function Patient() {
    return (
       <Grid container>
           <Grid item xs={12} sm={12} md={12}></Grid>
           <Grid item xs={12} sm={12} md={12}>
               <Typography>Patient Details</Typography>
               <TextField 
               type="text"
               variant="outlined"
               label="Name"
               margin="normal"
               required
               fullWidth
               />
               <TextField
               type="text"
            variant="outlined"
            label="Address"
            margin="normal"
            required
            fullWidth
               />
               <TextField
               type="number"
               variant="outlined"
               label="Phno"
               margin="normal"
               required
               fullWidth
               />
               <TextField
               type="number"
               variant="outlined"
               label="Pincode"
               margin="normal"
               required
               fullWidth
               />
               <TextField
               type="text"
               variant="outlined"
               label="Email Id"
               margin="normal"
               fullWidth
               />
               <TextField
               type="text"
               variant="outlined"
               label="Bystander Name"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="text"
               variant="outlined"
               label="Doctor Name"
               fullWidth
               required
               margin="normal"
               />
               <TextField
               type="text"
               variant="outlined"
               label="Disease"
               fullWidth
               margin="normal"
               required
               />
               <TextField
               type="text"
               variant="outlined"
               label="Medicine"
               fullWidth
               required
               margin="normal"
               />
               <Button 
               type="submit"
               variant="contained"
               color="secondary"
               >SUBMIT</Button>
           </Grid>
           <Grid item xs={12} sm={12} md={12}></Grid>
       </Grid>
    )
}
