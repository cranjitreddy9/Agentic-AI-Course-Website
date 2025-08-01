import React from 'react';

export default function PracticeQA({ items }) {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Practice Q&A</h4>
      <ul className="list-decimal list-inside">
        {items.map((qa, i) => (
          <li key={i}><strong>Q:</strong> {qa.q}<br/><strong>A:</strong> {qa.a}</li>
        ))}
      </ul>
    </div>
  );
}