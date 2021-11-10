

const REST_API_ROOT_URL = "http://localhost:8080/api/v1/employees"

class EmployeeService {

  getAllEmployees = async () => {
    const res = await fetch(REST_API_ROOT_URL)
    const data = await res.json()
    return data
  }

  addEmployee = async (employee: {firstName: string, lastName: string, email:string}) => {

    const res = await fetch(REST_API_ROOT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employee)
    })

  }

  deleteEmployee = async (employeeId: string) => {
    await fetch(`${REST_API_ROOT_URL}/${employeeId}`, {
      method: "DELETE",
    })
  }

  

}

export default new EmployeeService()