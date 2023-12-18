import { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const Sectiona = () => {

    const [open, setOpen] = useState(false);
    const [dataA,setDataA]=useState("")
    console.log(dataA);
    
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const navigate=useNavigate()

    const handleB=()=>{
        navigate("/Sectionb")
    }


  return (
    <>
        <div style={{display:"flex",justifyContent:"space-between",padding:"1rem"}}>
            <Button variant="contained" onClick={handleOpen}>Add form section A</Button>
            <Button variant="contained" onClick={handleB}>Section B</Button>
        </div>  
      
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <Box sx={{ ...style, width: 400 }}>
            <h2 style={{textAlign:"center"}}>Form for Section A</h2>  
            <TextField id="outlined-basic" label="Student Name" fullWidth variant="outlined" onChange={(e:any)=>setDataA(e.target.value)} />
            <div style={{paddingTop:"1rem"}}><Button variant="contained">Add Name</Button></div>
            </Box>
        </Modal>
    </>
  )
}

export default Sectiona