import ReactDOM from 'react-dom';
import React, {useState, useEffect} from 'react';
import './App.css';



function Welcome(){
  const[users,setUsers]=useState([]);
  const[loading, settLoading]=useState(true);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
       setUsers(data);
       settLoading(false);
    })
    .catch(error=>{
      console.error("If it is not loading, will be error msg");
      settLoading(false);
    });
  },[]);

    if(loading){
      return <p>Loading</p>;

    }
    return(
      <div>
        <h1>List out the users in API</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
          </tr>
          {users.map(user =>(
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </table>
      </div>
  )

}


