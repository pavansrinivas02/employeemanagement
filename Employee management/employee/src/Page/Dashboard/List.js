import React from 'react'

function List({ employees, handleEdit, handleDelete }) {

    return (
        <div className='contain-table'>
            <table className='striped-table'>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>EmpName</th>
                        <th>Dob</th>
                        <th>Age</th>
                        <th>sex</th>
                        <th>contactno</th>
                        <th>Emailid</th>
                        <th>Address</th>
                        <th>designation</th>
                        <th>Emptype</th>
                        <th>Qualification</th>
                        <th>Department</th>
                        <th>Bankname</th>
                        <th>Bankaccno</th>

                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.EmpName}</td>
                                <td>{employee.Dob}</td>
                                <td>{employee.Age}</td>
                                <td>{employee.sex}</td>
                                <td>{employee.contactno} </td>
                                <td>{employee.Emailid} </td>
                                <td>{employee.Address} </td>
                                <td>{employee.designation} </td>
                                <td>{employee.Emptype} </td>
                                <td>{employee.Qualification} </td>
                                <td>{employee.Department} </td>
                                <td>{employee.Bankname} </td>
                                <td>{employee.Bankaccno} </td>

                                <td className="text-right">
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="button muted-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="button muted-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default List