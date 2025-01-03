import React, { useState } from 'react';

const ParallelTestSimulation = () => {
  const [testResults, setTestResults] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const simulateTestRun = () => {
    setIsRunning(true);
    setTestResults([]);
    
    // Simulating three tests running in parallel
    const test1 = new Promise(resolve => {
      setTimeout(() => resolve("Test 1 Passed"), 1000);
    });
    const test2 = new Promise(resolve => {
      setTimeout(() => resolve("Test 2 Passed"), 800);
    });
    const test3 = new Promise(resolve => {
      setTimeout(() => resolve("Test 3 Passed"), 1200);
    });

    // Wait for all tests to complete
    Promise.all([test1, test2, test3])
      .then(results => {
        setTestResults(results);
        setIsRunning(false);
      });
  };

  return (
    <div>
      <h2>TestNG Parallel Test Simulation</h2>
      <button onClick={simulateTestRun} disabled={isRunning}>
        {isRunning ? "Running..." : "Run Tests in Parallel"}
      </button>
      
      {isRunning && <p>Tests are running. Please wait...</p>}
      
      <ul>
        {testResults.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
};

export default ParallelTestSimulation;
