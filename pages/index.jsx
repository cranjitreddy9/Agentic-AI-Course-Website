import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">Agentic AI Mastery</h1>
      <p className="mb-6">A 12-week interactive course to master autonomous AI agents.</p>
      <Link href="/weeks/1">
        <a className="px-6 py-3 bg-primary text-white rounded">Start Week 1 →</a>
      </Link>
    </div>
  );
}