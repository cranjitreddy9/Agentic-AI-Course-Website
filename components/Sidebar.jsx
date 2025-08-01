import React, { useEffect, useState } from 'react';
import Link from 'next/link';
const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);

export default function Sidebar() {
  const [dark, setDark] = useState(false);
  useEffect(() => document.documentElement.classList.toggle('dark', dark), [dark]);

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 flex flex-col justify-between">
      <nav>
        <h2 className="text-2xl font-bold mb-4">Agentic AI</h2>
        {weeks.map((w, idx) => (
          <Link key={idx} href={`/weeks/${idx + 1}`}>
            <a className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700">{w}</a>
          </Link>
        ))}
      </nav>
      <button onClick={() => setDark(!dark)} className="mt-4 py-2 bg-primary text-white rounded">
        Toggle {dark ? 'Light' : 'Dark'} Mode
      </button>
    </aside>
  );
}