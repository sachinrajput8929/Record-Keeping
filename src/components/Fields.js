import React from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
const Fields = ({key,name,email,index}) =>{
    return(
      
         <div className='data_val'>
        <h3>{index}</h3>
        <h4>{name}</h4>
        <h4>{email}</h4>
        <Stack spacing={2} direction="row">
           <Button   color='error' variant="contained"><DeleteSweepIcon/></Button>
           </Stack>

      </div>
    )
}
export default Fields;