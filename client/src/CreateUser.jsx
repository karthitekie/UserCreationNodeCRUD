import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function CreateUsers() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const navigate = useNavigate(); // Use navigate hook

    const submit = (e) => {
        e.preventDefault(); // Prevent form default behavior

        // Send data to backend
        axios.post("http://localhost:3001/createUser", { name, email, age })
            .then((result) => {
                console.log(result);
                navigate('/'); // Navigate to the homepage after successful submission
            })
            .catch((err) => {
                console.log(err); // Handle errors
            });
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submit}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label>Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control" 
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label>Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label>Age</label>
                        <input type="number" placeholder="Enter Age" className="form-control"
                        value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUsers;
