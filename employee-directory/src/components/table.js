import React from "react";

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(employee => (
                    // let name = `${employee.name.title} ${employee.name.first} ${employee.name.last}`
                    <tr>
                        <td>{`${employee.name.title} ${employee.name.first} ${employee.name.last}`}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.email}</td>
                    </tr>
                ))   
                }
            </tbody>
        </table>
    )
}

export default Table;