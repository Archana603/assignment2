import { Button, Table, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Todo = () => {
   const [inputarr,setInputarr]=useState([])

  const [todo, setTodo] = useState('');
  const [quan, setQuan] = useState('');

  const changetodo = (event)=>{
    setTodo(event.target.value);
  };
  const changequan=(event)=>{
    setQuan(event.target.value);
  };

  const transferValue = (event) => {
    setInputarr([...inputarr,{todo,quan}])
    };
   

  
  
  const tableRows=inputarr.map((info)=>{
    return(
      <tr id="trow">
        <td>{info.todo}</td>
        <td>{info.quan}</td>
      </tr>
    )

  });
  

  return (
     <div className="container">
<div className="bag">
      <Typography variant='h4'>ToDo LIST</Typography>
      <br />
      <input type="text" name="todo" id="task" value={todo} placeholder='Enter a Todo..' onChange={changetodo} />
      <br /><br />
      <input type="number" name="qun" id="quan" value={quan} placeholder='Enter quantity..' onChange={changequan} />
      <br /><br />
      <Button type='submit' id="but" variant="contained" onClick={transferValue}>Add</Button>
    <br /><br />
    <Table border="1" width="100%" id="table">
      <thead>
        <tr>
          <th>TODO</th>
          <th>QUANTITY</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
    </div>
    </div>
    
  );
        
  }


export default Todo;