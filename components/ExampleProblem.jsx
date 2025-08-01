import React from 'react';

export default function ExampleProblem({ description, solution }) {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Example</h4>
      <p className="italic mb-2">{description}</p>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto"><code>{solution}</code></pre>
    </div>
  );
}