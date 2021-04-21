import React from "react";

function Table(props) {
    //filter out employees with names that do not match the searched name
    const filteredArr = props.results.filter(employee => employee.name.first.toLowerCase().includes(props.desiredName) || employee.name.last.toLowerCase().includes(props.desiredName))
    
    return (
        <table className="table mb-5">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>                   
                    <th scope="col">Email</th>
                    <th scope="col">Country</th>
                    <th scope="col">Gender</th>
                </tr>
            </thead>
            <tbody>{
                //if there is currently no name being searched, display all employees
                props.desiredName === '' ? 
                    props.results.map(employee => (
                        <tr>
                            <td>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</td>
                            <td>{employee.cell}</td>
                            <td>{employee.email}</td>
                            <td>{employee.location.country}</td>
                            <td>{employee.gender}</td>
                        </tr>
                    )) 
                    :
                    //only display the employees with a name that matches the searched name
                    filteredArr.map(employee => (
                        <tr>
                            <td>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</td>
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