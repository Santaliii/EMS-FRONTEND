import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom'
import {IEmployee} from '../interfaces/EmployeeInterfaces'

interface IAddEmployeeProps {
  onAdd: (employee: IEmployee) => void
}

const AddEmployee: React.FC<IAddEmployeeProps> = ({onAdd}: IAddEmployeeProps) => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const navigate = useNavigate()


  // Function for input sanitization.
  const onSubmit = async (e: any) => {
    e.preventDefault()

    // Check if any input is missing
    if(firstName.length === 0 || lastName.length === 0 || email.length === 0)
        alert("Missing required field(s)")
    // Regex to match the email with a valid email entry
    else if(!email.match('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'))
        alert("Please enter a valid email address")
    // If everything checks out, begin employee addition process and clear input
    else{

        // Contact server (which contacts DB) to check if given email already exists.
        const res = await fetch(`http://localhost:8080/api/v1/employees/checkemail/${email}`)
        // If the response returns with an OK response (meaning to conflict error is thrown), add the new employee into the system.
        if(res.ok){
          onAdd({firstName, lastName, email})
          setFirstName('')
          setLastName('')
          setEmail('')
          navigate("/")
        }
        // If the response does not return with an OK response, notify the client that the email is a duplicate.
        else
          alert("Email belongs to another employee")    
    }
  }

  const onClear = (e: any) => {
    e.preventDefault()
      setFirstName('')
      setLastName('')
      setEmail('')
  }


  return(
    <div className="add-employee-form-container">
      <h1>Add Employee</h1>
      <form onSubmit={onSubmit} onReset={onClear} className="add-employee-form">
      <h3>* Required Fields</h3>
      <h4 style={{color: "red"}}>Employee ID will be automatically determined.</h4>
      
        <div className="form-element">

          
          <input type="text" placeholder="First Name"
          value={firstName} onChange={(event: any) => setFirstName(event.target.value)}/>

        </div>

        <div className="form-element">

          
          <input type="text" placeholder="Last Name"
          value={lastName} onChange={(event: any) => setLastName(event.target.value)}/>

        </div>

        <div className="form-element">

          
          <input type="text" placeholder="Email"
          value={email} onChange={(event: any) => setEmail(event.target.value)}/>
          

        </div>


        <input type="submit" value="Add Employee" className="btn"/>
        <input type="reset" value='Clear Form' className="btn"/>
      
      </form>
    </div>
  )
}

export default AddEmployee