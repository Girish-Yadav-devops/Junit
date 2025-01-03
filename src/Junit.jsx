import React, { useState } from 'react';

function TestNGSimulator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [testStatus, setTestStatus] = useState('');

  const validateLogin = (username, password) => {
    // Simulate a simple login validation function
    return username === 'admin' && password === 'password123';
  };

  const handleTest = () => {
    const [username, password] = input.split(',');
    const isValid = validateLogin(username.trim(), password.trim());

    if (isValid) {
      setTestStatus('Test Passed!');
      setResult('You are logged in!');
    } else {
      setTestStatus('Test Failed');
      setResult('Invalid credentials!');
    }
  };

  return (
    <div>
      <h1>TestNG Simulator: Login Validation</h1>
      <input 
        type="text" 
        placeholder="Enter username, password" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <button onClick={handleTest}>Run Test</button>
      
      <div>
        <p>Status: <span style={{ color: testStatus === 'Test Passed!' ? 'green' : 'red' }}>{testStatus}</span></p>
        <p>Result: {result}</p>
      </div>
    </div>
  );
}

export default TestNGSimulator;
