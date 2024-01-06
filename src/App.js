 import './App.css';
 import Header from './components/Header';
 import TextField from '@mui/material/TextField';
 import Stack from '@mui/material/Stack';
 import Button from '@mui/material/Button';
 import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
 import AddIcon from '@mui/icons-material/Add';
import {useState} from 'react';
 
function App() {
  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[data,setData] = useState([]);

  const addData = () => {
    //Spread Operator...
    setData([...data,{name:name,email:email}]);
    setName("");
    setEmail("");
  }
  const removeItem=(index)=>{
    let arr = data;
    //splice method use
    arr.splice(index,1);
    setData([...arr]);
  }


  return (
    <div className="App">
     <Header/>

     <div className='form'>
     <Stack spacing={2} direction="row">
     <TextField 
     onChange={(event)=>setName(event.target.value)}
     value={name} 
     id="outlined-basic" 
     label="Name" 
     variant="outlined" />

     <TextField 
     onChange={(event)=>setEmail(event.target.value)}
     value={email} 
     id="outlined-basic" 
     label="Email" 
     variant="outlined" />

     <Button onClick={addData} color='success' variant="contained"><AddIcon/></Button>
     </Stack>
      </div>

      // Assuming you're using React with JSX syntax
<div className='data'>
  <table className='responsive-table'>
    <thead>
      <tr>
        <th>S.No.</th>
        <th>Name</th>
        <th>Email</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
      {data.map((element, index) => (
        <tr key={index}>
          <td>{index}</td>
          <td>{element.name}</td>
          <td>{element.email}</td>
          <td>
            <Button onClick={() => removeItem(index)} color='error' variant="contained">
              <DeleteSweepIcon />
            </Button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


    </div>
  );
}

export default App;
