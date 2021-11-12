import React, {useState} from "react";
import { FaSearch } from 'react-icons/fa'


interface ISearchForEmployeeProps {
  onSearch: (employeeId: string) => {}
} 

const SearchForEmployee: React.FC<ISearchForEmployeeProps> = ({onSearch}: ISearchForEmployeeProps) => {


  const [employeeSearch, setEmployeeSearch] = useState<string>('')

  const checkType = (employeeId: string) => employeeId.match('^[0-9]*$')
 

  return(
    <div className="search-employee">
      <input onChange={(event: any) => (setEmployeeSearch(event.target.value))} value={employeeSearch} type="text" placeholder="Employee ID"/>
      {/* // Search icon that when clicked will trigger a read query IFF the type entered in the input box is an integer */}
      <FaSearch className="search-icon" onClick={() =>  (checkType(employeeSearch) ? onSearch(employeeSearch) : alert("Invalid entry"))}/>
    </div>
  )
}

export default SearchForEmployee