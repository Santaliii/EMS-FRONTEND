
const REST_API_ROOT_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

   getAllEmployees = async () => {
    const res = await fetch(REST_API_ROOT_URL)
    const data = await res.json()
    return data
  }

  getEmployeeById = async (employeeId: string) => {
  
      // Tries to fetch the employee with the specified ID.
      try {
        const res = await fetch(`${REST_API_ROOT_URL}/${employeeId}`)
        // Checks if the server does not return a correct employee object
        if(!res.ok){
          // If it doesn't throw an error 
          throw Error(`Employee with id ${employeeId} does not exist`)
        }
        // Since response is ok, return the employee object.
        const data = await res.json()
        return data
      } catch (error) {
        console.log(error);
        // Returns an empty object to signify that an employee with given ID does not exist.
        return {}
      }
      
  }

  addEmployee = async (employee: {firstName: string, lastName: string, email:string}) => {

    try {
      const res = await fetch(REST_API_ROOT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
      })
      console.log(res.ok);
      if(!res.ok){
        throw Error(`Email already exists`)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  deleteEmployee = async (employeeId: string) => {
      await fetch(`${REST_API_ROOT_URL}/${employeeId}`, {
      method: "DELETE",
    })
  }

 


}

export default new EmployeeService()