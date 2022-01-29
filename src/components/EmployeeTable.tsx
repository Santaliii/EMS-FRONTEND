import React from "react";
import Employee from "./Employee"
import {IEmployeeWithID} from '../interfaces/EmployeeInterfaces'
interface IEmployeeTableProps {
  employees: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }[]
  onDelete: (id: string) => void
}


const EmployeeTable: React.FC<IEmployeeTableProps> = ({employees, onDelete}: IEmployeeTableProps) => {

  return(
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(
            (employee: IEmployeeWithID)  => (<Employee key={employee.id} id={employee.id} 
            firstName={employee.firstName} lastName={employee.lastName}
            email={employee.email} onDelete={onDelete}/>))}
        </tbody>
      </table>
  )
}

export default EmployeeTable