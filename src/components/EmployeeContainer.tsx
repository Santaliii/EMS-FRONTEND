import React from "react";
import EmployeeTable from "./EmployeeTable";
import SearchForEmployee from './SearchForEmployee';


interface IEmployeeTableProps {
  employees: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }[]
  onDelete: (employeeId: string) => void
  onSearch: (employeeId: string) => {}
}

const EmployeeContainer: React.FC<IEmployeeTableProps> = ({employees, onDelete, onSearch}: IEmployeeTableProps) => {
  return(
    <div className="employee-container">
      <h1>Employee List</h1>
      <SearchForEmployee onSearch={onSearch} />
      <EmployeeTable onDelete={onDelete} employees={employees}/>
    </div>
  )
}

export default EmployeeContainer