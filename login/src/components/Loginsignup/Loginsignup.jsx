import React, { useState } from 'react';
import './Loginsignup.css';

const Loginsignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => setUsername(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Username:', username);
        console.log('Password:', password);
        /* Loginsignup.css */
        setUsername('');
        setPassword('');
    };

    return (
        <div className="login-signup-wrapper">
            <h1 className="heading">Login</h1>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                    <br />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Loginsignup;
