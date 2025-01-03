import React, { useState } from 'react';

function TestRunner() {
  const [testResult, setTestResult] = useState(null);

  // Simulating the execution of a test
  const runTest = () => {
    const randomTestOutcome = Math.random() > 0.5 ? "Pass" : "Fail";
    setTestResult(randomTestOutcome);
  };

  return (
    <div>
      <h2>Automated Testing with JUnit + Selenium</h2>
      <p>Click "Run Test" to simulate a Selenium + JUnit test execution!</p>
      <button onClick={runTest}>Run Test</button>

      {testResult && (
        <div style={{ marginTop: "20px" }}>
          <h3>Test Result: {testResult}</h3>
          {testResult === "Pass" ? (
            <p style={{ color: "green" }}>✅ The test passed successfully!</p>
          ) : (
            <p style={{ color: "red" }}>❌ The test failed. Check your code!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default TestRunner;
