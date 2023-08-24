import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
    const id = selectedEmployee.id;
    const [EmpName, setEmpName] = useState(selectedEmployee.EmpName);
    const [Dob, setDob] = useState(selectedEmployee.Dob);
    const [Age, setAge] = useState(selectedEmployee.Age);
    const [sex, setsex] = useState(selectedEmployee.sex);
    const [contactno, setcontactno] = useState(selectedEmployee.contactno);
    const [Emailid, setEmailid] = useState(selectedEmployee.Emailid);
    const [Address, setAddress] = useState(selectedEmployee.sex);
    const [designation, setdesignation] = useState(selectedEmployee.designation);
    const [Emptype, setEmptype] = useState(selectedEmployee.Emptype);
    const [Qualification, setQualification] = useState(selectedEmployee.Qualification);
    const [Department, setDepartment] = useState(selectedEmployee.Department);
    const [Bankname, setBankname] = useState(selectedEmployee.Bankname);
    const [Bankaccno, setBankaccno] = useState(selectedEmployee.Bankaccno);
    const handleUpdate = e => {
        e.preventDefault();

        if (!EmpName || !Dob || !Age || !sex || !contactno ||!Emailid||!Address||!designation||!Emptype||!Qualification||!Department||!Bankname||!Bankaccno) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        if (contactno.length !== 10) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'Contact number should have 10 digits.',
                showConfirmButton: true,
            });
        }

        const employee = {
            id,
            EmpName,
            Dob,
            Age,
            sex,
            contactno,
            Emailid,
            Address,
            designation,
            Emptype,
            Qualification,
            Department,
            Bankname,
            Bankaccno
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.firstName} ${employee.Dob}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Employee</h1>
                <label htmlFor="EmpName">EmpName</label>
                <input
                    id="EmpName"
                    type="text"
                    name="EmpName"
                    value={EmpName}
                    onChange={e => setEmpName(e.target.value)}
                />
                <label htmlFor="Dob">Dob</label>
                <input
                    id="Dob"
                    type="date"
                    name="Dob"
                    value={Dob}
                    onChange={e => setDob(e.target.value)}
                />
                 <label htmlFor="Age">Age</label>
                <input
                    id="Age"
                    type="number"
                    name="Age"
                    value={Age}
                    onChange={e => setAge(e.target.value)}
                />
                <label htmlFor="sex">sex</label>
                <input
                    id="sex"
                    type="text"
                    name="sex"
                    value={sex}
                    onChange={e => setsex(e.target.value)}
                />
                <label htmlFor="contactno">contactno</label>
                <input
                    id="contactno"
                    type="number"
                    name="contactno"
                    value={contactno}
                    onChange={e => setcontactno(e.target.value)}
                />
                <label htmlFor="Emailid">Emailid</label>
                <input
                    id="Emailid"
                    type="email"
                    name="Emailid"
                    value={Emailid}
                    onChange={e => setEmailid(e.target.value)}
                />
                <label htmlFor="Address">Address</label>
                <input
                    id="Address"
                    type="text"
                    name="Address"
                    value={Address}
                    onChange={e => setAddress(e.target.value)}
                />
                <label htmlFor="designation">designation</label>
                <input
                    id="designation"
                    type="text"
                    name="designation"
                    value={designation}
                    onChange={e => setdesignation(e.target.value)}
                />
                <label htmlFor="Emptype">Emptype</label>
                <input
                    id="Emptype"
                    type="text"
                    name="Emptype"
                    value={Emptype}
                    onChange={e => setEmptype(e.target.value)}
                />
                <label htmlFor=" Qualification"> Qualification</label>
                <input
                    id=" Qualification"
                    type=" text"
                    name=" Qualification"
                    value={Qualification}
                    onChange={e => setQualification(e.target.value)}
                />
                <label htmlFor=" Department"> Department</label>
                <input
                    id="Department"
                    type="text"
                    name="Department"
                    value={Department}
                    onChange={e => setDepartment(e.target.value)}
                />
                <label htmlFor="Bankname">Bankname</label>
                <input
                    id="Bankname"
                    type="text"
                    name="Bankname"
                    value={Bankname}
                    onChange={e => setBankname(e.target.value)}
                />
                <label htmlFor="Bankaccno">Bankaccno</label>
                <input
                    id="Bankaccno"
                    type="number"
                    name="Bankaccno"
                    value={Bankaccno}
                    onChange={e => setBankaccno(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit