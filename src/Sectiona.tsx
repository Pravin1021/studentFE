import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu } from '@mui/base/Menu';


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
    const [formData,setFormData]=useState([])

    console.log(formData);
    
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

    const addFormA=async()=>{
        try{
          await axios.post("http://localhost:3001/FormA",{name:dataA,attendance:"",date:""})
        }
        catch(err){
            console.log(err);
        }
    }

    const getDataA=async()=>{
        try{
            const response=await axios.get("http://localhost:3001/")
            const df=response.data
            setFormData(df)
        }
        catch(err){
            console.log(err);
            
        }
    }

    const date=new Date()
    const day=date.getDate()
    const month=date.getMonth()+1
    const year=date.getFullYear()
    const todayDate:any=`${day}-${month}-${year}`


    const presentFuncA=async(dta:any)=>{
        const todayDateA = new Date().toISOString();

        try{
            await axios.put(`http://localhost:3001/FormA/${dta._id}`,{attendance:"Present",date:todayDateA})
        }
        catch(err){
            console.log(err);
        }
    }

    const absentFuncA=async(dta:any)=>{
        const todayDateA = new Date().toISOString();

        try{
            await axios.put(`http://localhost:3001/FormA/${dta._id}`,{attendance:"Absent",date:todayDateA})
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getDataA()
    },[presentFuncA,absentFuncA])

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
            <div style={{paddingTop:"1rem"}}><Button variant="contained" onClick={addFormA}>Add Name</Button></div>
            </Box>
        </Modal>
        <div>
            {`Today's Date:${todayDate}`}
            {formData.length>0?formData.map((data:any,index)=>{
                return(
                    <ul key={index}>
                    <li>{data.name} {data.attendance}</li>
                    <Button variant="contained" style={{margin:"16px"}} onClick={()=>presentFuncA(data)}>Present</Button>
                    <Button variant="contained" onClick={()=>absentFuncA(data)} style={{margin:"16px"}}>Absent</Button>
                </ul>
                )
            }):"No data found"}
           
        </div>
    </>
  )
}

export default Sectiona