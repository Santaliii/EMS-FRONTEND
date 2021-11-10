import React from "react";
import EmployeeTable from "./EmployeeTable";

interface IEmployeeTableProps {
  employees: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }[]
  onDelete: (id: string) => void
}

const EmployeeContainer: React.FC<IEmployeeTableProps> = ({employees, onDelete}: IEmployeeTableProps) => {
  return(
    <div className="employee-container">
      <h1>Employee List</h1>
      <EmployeeTable onDelete={onDelete} employees={employees}/>
    </div>
  )
}

export default EmployeeContainer