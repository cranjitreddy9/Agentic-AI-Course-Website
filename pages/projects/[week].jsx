import React from 'react';
import { useRouter } from 'next/router';

const projectDetails = {
  1: {
    name: 'PromptCraft Playground',
    details: [
      'Create tasks with basic vs improved prompts.',
      'Document outputs.',
      'Implement in Python.'
    ],
    solution: `response_basic = llm(prompt_basic)
response_improved = llm(prompt_improved)
print(response_basic, response_improved)`,
    skills: ['Prompt engineering', 'LLM API usage']
  },
  2: {
    name: 'Calculator Chatbot',
    details: [
      'Create a ReAct agent for math problems.',
      'Integrate calculate() function.',
      'Log reasoning.'
    ],
    solution: `agent = initialize_agent(tools=[calculate_tool], llm=llm)
print(agent.run("What is 12 * (8 + 2)?"))`,
    skills: ['ReAct pattern', 'Tool integration']
  },
  // Add weeks 3-12...
};

export default function ProjectDetails() {
  const { week } = useRouter().query;
  const p = projectDetails[parseInt(week)];
  if (!p) return <p>Loading...</p>;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Project Details (Week {week}): {p.name}</h2>
      <ul className="list-disc list-inside mb-4">
        {p.details.map((d, i) => <li key={i}>{d}</li>)}
      </ul>
      <h4 className="font-semibold mb-2">Example Solution Snippet</h4>
      <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded overflow-auto"><code>{p.solution}</code></pre>
      <h4 className="font-semibold mt-4 mb-2">Skills to Master</h4>
      <ul className="list-disc list-inside">
        {p.skills.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </div>
  );
}