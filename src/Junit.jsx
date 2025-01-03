import React, { useState } from 'react';

const TestNGReportGenerator = () => {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  
  const generateReport = () => {
    setStatus('Generating...');
    setMessage('Fetching the test results...');
    
    setTimeout(() => {
      setStatus('Completed');
      setMessage('TestNG report generated successfully!');
    }, 2000); // Simulate delay in generating report
  };

  const failReport = () => {
    setStatus('Failed');
    setMessage('An error occurred while generating the report.');
  };

  return (
    <div>
      <h2>TestNG Report Generator</h2>
      <p>Status: <strong>{status}</strong></p>
      <p>{message}</p>
      
      <button onClick={generateReport}>Generate Report</button>
      <button onClick={failReport}>Fail Report</button>
      
      <div style={{marginTop: '20px', padding: '10px', border: '1px solid #ccc'}}>
        <h3>Explanation:</h3>
        <p>
          TestNG generates an <code>index.html</code> report by default. This report includes test results like passed, failed, and skipped tests.
          Additionally, you can customize it by using listeners and external tools like Maven for more advanced reporting.
        </p>
      </div>
    </div>
  );
};

export default TestNGReportGenerator;
