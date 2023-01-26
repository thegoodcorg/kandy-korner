import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

// const navigate = Navigate()

export const JobApplication = () => {
    const [locations, setLocations] = useState([])
    const [newUser, updateNewUser] = useState(
        { name: "", startDate: "", rate: "", storeNumber: "1", email: "" })
    const [newEmployeeReturn, setNewEmployee] = useState({})

    useEffect(() => {
       if(newEmployeeReturn.id){
        const employeeData = {
            userId: newEmployeeReturn.id,
            startDate: newUser.startDate,
            rate: parseInt(newUser.rate)
        }
        fetch("http://localhost:8088/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeData)
        }
        )
            .then(res => res.json())
            .then(() => {
                // navigate("/employees")
            }
            )
    }   
    },[newEmployeeReturn]
    )

    useEffect(() => {
        fetch('http://localhost:8088/locations')
            .then(res => res.json())
            .then((data) => setLocations(data))
    },
        [])
    return (<>

        <h1>New Hire Onboarding</h1>
        <input type="field" placeholder="Full Name"
            onChange={
                (e) => {
                    const copy = { ...newUser };
                    copy.name = e.target.value;
                    updateNewUser(copy);
                }}></input>
        <input type="field" placeholder="Email address"
            onChange={
                (e) => {
                    const copy = { ...newUser };
                    copy.email = e.target.value;
                    updateNewUser(copy);
                }}></input>
        <input type="date" placeholder="Hire Date"
            onChange={
                (e) => {
                    const copy = { ...newUser };
                    copy.startDate = e.target.value;
                    updateNewUser(copy);
                }}></input>
        <select
            onChange={
                (e) => {
                    const copy = { ...newUser };
                    copy.storeNumber = e.target.value;
                    updateNewUser(copy);
                }}>
            {locations.map((location) => {
                return <option key={location.storeNumber} value={location.storeNumber}
                >
                    Store: {location.storeNumber}, at {location.address}
                </option>
            }
            )}
        </select>
        <input type="number" placeholder="Rate"
            onChange={
                (e) => {
                    const copy = { ...newUser };
                    copy.rate = e.target.value;
                    updateNewUser(copy);
                }}></input>
        <button
            onClick={() => {
                const name = [] = newUser.name.split(" ")
                const newEmployee = {
                    first_name: name[0],
                    last_name: name[1],
                    isStaff: true,
                    email: newUser.email

                }
                fetch("http://localhost:8088/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newEmployee)
                }
                )
                    .then(res => res.json())
                    .then(response => setNewEmployee(response))
            
            }}>Save</button>
    </>
    )

}


