import React from 'react';
import Link from 'next/link';

export default function ProjectCard({ week, title, summary }) {
  return (
    <div className="mb-6 bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h4 className="font-semibold mb-2">Project: {title}</h4>
      <p className="mb-2">{summary}</p>
      <Link href={`/projects/${week}`}><a className="text-primary hover:underline">View Details</a></Link>
    </div>
  );
}