import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`);

export default function Sidebar() {
  const [dark, setDark] = useState(false);

  // Initialize theme on mount
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    if (stored === 'dark') {
      setDark(true);
    } else if (stored === 'light') {
      setDark(false);
    } else if (typeof window !== 'undefined') {
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setDark(prefers);
    }
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Agentic AI</h2>
        <nav>
          {weeks.map((w, idx) => (
            <Link key={idx} href={`/weeks/${idx + 1}`}>
              <a className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200">{w}</a>
            </Link>
          ))}
        </nav>
      </div>
      <button
        onClick={() => setDark(prev => !prev)}
        className="mt-4 w-full px-3 py-2 bg-primary text-white rounded"
      >
        {dark ? 'Light Mode' : 'Dark Mode'}
      </button>
    </aside>
  );
}
