import React, { useState } from "react";
import  { useNavigate } from 'react-router-dom'

interface IAddEmployeeProps {
  onAdd: (employee: {firstName: string, lastName: string, email:string}) => void
}

const AddEmployee: React.FC<IAddEmployeeProps> = ({onAdd}: IAddEmployeeProps) => {

  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const navigate = useNavigate()

  const onSubmit = (e: any) => {
    e.preventDefault()

    if(
      firstName.length === 0 || lastName.length === 0 ||
      email.length === 0)
        alert("Missing required field(s)")
    else{
      onAdd({firstName, lastName, email})
      setFirstName('')
      setLastName('')
      setEmail('')
      navigate("/")
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