import React, { useState } from "react";

function TestRunner() {
  const [result, setResult] = useState("");
  const [testCase, setTestCase] = useState("");
  const [isTestRunning, setIsTestRunning] = useState(false);
  const [showHiddenContent, setShowHiddenContent] = useState(false);

  // Simulate running a test (like JUnit)
  const runTest = () => {
    setIsTestRunning(true);
    setTestCase("Test for add(3, 4) === 7 is running...");
    
    // Simulate JUnit test process step-by-step
    setTimeout(() => {
      const result = testAddition();
      setResult(result ? "Test Passed!" : "Test Failed.");
      setShowHiddenContent(true);  // Show hidden content after the test runs
    }, 1000); // simulate test delay
  };

  // The actual test for addition (simulates JUnit test case)
  const testAddition = () => {
    setTestCase("Checking if the addition of 3 and 4 equals 7...");
    return add(3, 4) === 7; // Simulate checking if 3 + 4 equals 7
  };

  // Add function to simulate the logic
  const add = (a, b) => a + b;

  // Reset the state when the user clicks on reset button
  const resetTest = () => {
    setResult("");
    setTestCase("");
    setIsTestRunning(false);
    setShowHiddenContent(false);
  };

  return (
    <div>
      <h2>JUnit Test Simulation</h2>
      <button onClick={runTest} disabled={isTestRunning}>
        {isTestRunning ? "Running Test..." : "Run Test"}
      </button>
      <button onClick={resetTest} disabled={!result}>
        Reset Test
      </button>
      
      <h3>{result}</h3>
      
      {/* Display the test case message */}
      <p>{testCase}</p>

      {/* Conditionally render the hidden content when test finishes */}
      {showHiddenContent && (
        <div>
          <h4>Simulating JUnit Test Code:</h4>
          <pre>
            {`
@Test
public void testAddition() {
    // Simulate the test for addition
    int result = add(3, 4);
    assertEquals(7, result); // The assertion checks if 3 + 4 equals 7
}

private int add(int a, int b) {
    return a + b;
}
            `}
          </pre>
          <p>
            <strong>Explanation:</strong> This code is similar to what you would write in JUnit for Java.
            - The <code>@Test</code> annotation marks the method as a test.
            - Inside the test, we call the <code>add(3, 4)</code> method and check if it returns <code>7</code> using <code>assertEquals</code>.
            - If the result is as expected, the test passes, otherwise, it fails.
          </p>
        </div>
      )}
    </div>
  );
}

export default TestRunner;