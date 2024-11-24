import React from 'react'
import { useState } from 'react'

export default function Register() {

    const [name,setName]=useState('');
    const [id,setId]=useState('');
    const [password,setPassword]=useState('');
    const [submit,setSubmit]=useState(false);
    
    function handleName(e){
        setName(e.target.value);
    }

    function handleId(e){
        setId(e.target.value);
    }
    function handlePassword(e){
        setPassword(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        setSubmit(true);
        console.log("username=",name);
        console.log("user id=",id);
        console.log("user pass=",password)
        ClearAll();
    }

    function ClearAll(){
        setName('');
        setId('');
        setPassword('');
    }
    function success(){
        if(submit){
        return(
            <h1>user register successfully</h1>
        )}
    }


  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label>User Name</label>
        <input type='text' value={name} onChange={handleName} required></input><br></br>

        <label>Email</label>
        <input type='email' value={id} onChange={handleId} required></input><br></br>

        <label>Password</label>
        <input type='password' value={password} onChange={handlePassword} required></input><br></br>

        <button type='submit' id='btn'>Register</button>
      </form>
      {success()};
    </div>
  )
}
