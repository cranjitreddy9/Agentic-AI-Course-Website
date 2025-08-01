import React from 'react';
import { useRouter } from 'next/router';
import Lecture from '../../components/Lecture';
import ExampleProblem from '../../components/ExampleProblem';
import PracticeQA from '../../components/PracticeQA';
import ProjectCard from '../../components/ProjectCard';

const syllabus = {
  1: {
    title: 'Prompt Engineering Basics',
    lecture: { title: 'ChatGPT Prompt Engineering for Developers', src: 'https://www.youtube.com/embed/tRvcAdqsJWo' },
    examples: [{ description: 'Transform vague summary prompt into structured summary...', solution: '“Summarize...action items at the end.”' }],
    practice: [
      { q: 'What are the two main stages of LLM training?', a: 'Pre-training and fine-tuning/RLHF.' },
      { q: 'Why use chain-of-thought prompting?', a: 'Encourages step-by-step reasoning.' }
    ],
    project: { title: 'PromptCraft Playground', summary: 'Experiment with basic vs improved prompts.' }
  },
  2: {
    title: 'Agentic AI Concepts',
    lecture: { title: 'Agentic AI: A Progression of Language Model Usage', src: 'https://www.youtube.com/embed/kJLiOGle3Lw' },
    examples: [{ description: 'Outline ReAct loop for a query', solution: 'Thought→Action→Observation→Answer' }],
    practice: [
      { q: 'What is the ReAct pattern?', a: 'Alternating reasoning and actions.' },
      { q: 'Why use tools in agents?', a: 'To access external data or services.' }
    ],
    project: { title: 'Calculator Chatbot', summary: 'Build a ReAct agent for math word problems.' }
  },
  // Add weeks 3-12 as needed...
};

export default function WeekPage() {
  const { week } = useRouter().query;
  const data = syllabus[parseInt(week)] || {};
  if (!data.title) return <p>Loading...</p>;
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Week {week}: {data.title}</h2>
      <Lecture {...data.lecture} />
      {data.examples.map((ex, i) => <ExampleProblem key={i} {...ex} />)}
      <PracticeQA items={data.practice} />
      <ProjectCard week={week} title={data.project.title} summary={data.project.summary} />
    </div>
  );
}