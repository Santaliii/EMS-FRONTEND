import React from "react";
import CRUDButton from "./CRUDButton"

interface IEmployeeProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  onDelete: (id: string) => void
}

const Employee: React.FC<IEmployeeProps> = ({id, firstName, lastName, email, onDelete}: IEmployeeProps) => {


  return(
      <tr>
        <th>{id}</th>
        <th>{firstName}</th>
        <th>{lastName}</th>
        <th>{email}</th>
        <th>
          <CRUDButton employeeId={id} onClick={onDelete} text="Update" bgColor="rgb(31, 31, 233)" />
          <CRUDButton employeeId={id} onClick={onDelete} text="Delete" bgColor="#a10d0d" />
        </th>
      </tr>
  )
}

export default Employee