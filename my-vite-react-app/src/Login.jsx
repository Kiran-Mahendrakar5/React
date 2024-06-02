import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <h2>Login Form</h2>
            <form action="login.php" method="post">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;
