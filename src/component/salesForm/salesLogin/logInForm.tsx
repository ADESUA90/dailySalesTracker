import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LogInForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    //const [id, setId] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (username === "AUSEDA" && password === "only susu can login") {
            navigate("/salesForm");
        } else {
            alert("Invalid username or password");
        };
    };
    return (
        <>
            <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-[url('https://img.freepik.com/free-photo/orange-copy-space-background-with-sale-idea_23-2148305925.jpg?t=st=1731707340~exp=1731710940~hmac=6901b1c3fdcde3f008c98756ac2c7bfbfac5089b7c8751af33da75cb3fa0e9f7&w=900')] h-100">

                <h1 className="text-2xl font-bold text-center mt-0 pt-0">For staff only</h1>

                <form onSubmit={handleLogin}>
                    <nav className="flex flex-col items-center">
                        <label htmlFor="name">UserName:</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            required />
                        <label htmlFor="Password">Password:</label>
                        <input type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />

                    </nav>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-0.5 px-2 rounded">Log in</button>
                </form>

            </div>

        </>


    );
};

export default LogInForm;