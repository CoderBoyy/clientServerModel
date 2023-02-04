import React from 'react'
import {db} from '../firebaseConfig'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {addDoc, collection} from 'firebase/firestore'
const EntryForm = () => {
  const [employeeName, setEmployeeName]=useState();
  const [email, setEmail]=useState();
  const [contact, setContact]=useState();
  const [doj, setDoj]=useState();
  const [psotion, setPosition]=useState();
  const [teamName, setTeamName]=useState();

  const employeeData=collection(db,"employeeData")
  const handleSubmit=()=>{
    addDoc(employeeData,{
      name:employeeName,
      email:email,
      contac:contact,
      doj:doj,
      position:psotion,
      teamName:teamName
    }).then(()=>{
      if(!alert("Data submitted successfully."))document.location='https://www.juniper.net/'
    }).catch((error)=>{
      alert(error.message)
    })
  };

  const navigate=useNavigate();

  return (
    <div className='contact-form'>
      <h1>Kindly enter your details.</h1>
        <form action="" className='details-form'>
          <div>
            <label htmlFor="employeeName">Full Name</label>
            <input type="text" autoComplete='off' name='employeeName' id='employeeName' onChange={(event)=>{setEmployeeName(event.target.value)}}/>
          </div>
          <div>
            <label htmlFor="email">Juniper Email</label>
            <input type="text" autoComplete='off' name='email' id='email' onChange={(event)=>{setEmail(event.target.value)}}/>
          </div>
          <div>
            <label htmlFor="contact">Contact</label>
            <input type="text" autoComplete='off' name='contact' id='contact' onChange={(event)=>{setContact(event.target.value)}}/>
          </div>
          <div>
            <label htmlFor="doj">Date of Joining</label>
            <input type="date" autoComplete='off' name='doj' id='doj' onChange={(event)=>{setDoj(event.target.value)}}/>
          </div>
          <div>
            <label htmlFor="position">Position</label>
            <input type="text" autoComplete='off' name='position' id='position' onChange={(event)=>{setPosition(event.target.value)}}/>
          </div>
          <div>
            <label htmlFor="teamName">Team Name</label>
            <input type="text" autoComplete='off' name='teamName' id='teamName' onChange={(event)=>{setTeamName(event.target.value)}}/>
          </div>
        </form>
        <button onClick={handleSubmit} onClick={this.onClick}>Submit</button>
    </div>
  )
}

export default EntryForm