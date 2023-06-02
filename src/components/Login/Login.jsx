import React, { useState, useEffect } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('Eaterguide@gmail.com');
  const [password, setPassword] = useState('1234');

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      // Perform automatic login
      onLogin();
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    // Check if the entered email and password match the credentials
    if (email === 'Eaterguide@gmail.com' && password === '1234') {
      // Persist the login state
      localStorage.setItem('isLoggedIn', 'true');

      // Perform login actions
      onLogin();
    } else {
      // Display an error message for incorrect credentials
      console.log('Invalid email or password');
    }
  };

  return (
    <div className="bg-LightGray min-h-screen flex items-center justify-center">
      <div className="max-w-md m-10 w-full px-6 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">Eater's Guide</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Eaterguide@gmail.com"
            value={email}
            onChange={handleEmailChange}
            className="border-2 border-LightGray px-4 py-2 mb-4 rounded-md focus:outline-none font-medium"
          />
          <input
            type="password"
            placeholder="1234"
            value={password}
            onChange={handlePasswordChange}
            className="border-2 border-LightGray px-4 py-2 mb-4 rounded-md focus:outline-none font-medium"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-1 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
