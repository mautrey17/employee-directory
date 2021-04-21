import React from "react";

function Table(props) {
    //filter out employees with names that do not match the searched name
    // const filteredArr = props.results.filter(employee => employee.name.first.toLowerCase().includes(props.desiredName) || employee.name.last.toLowerCase().includes(props.desiredName))
    
    return (
        <table className="table mb-5">
            <thead>
                <tr key="headers">
                    <th scope="col">Title</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Phone</th>                   
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>{
                    //only display the employees with a name that matches the searched name
                    props.employees.map(employee => (
                        <tr key={employee.login.uuid}>
                            <td>{employee.name.title}</td>
                            <td>{employee.name.first}</td>
                            <td>{employee.name.last}</td>
                            <td>{employee.cell}</td>
                            <td>{employee.email}</td>
                            <td>{employee.location.country}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    )) 
                }
            
            </tbody>
        </table>
    )
}

export default Table;
