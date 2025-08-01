import React from 'react';
import { useRouter } from 'next/router';
import Lecture from '../../components/Lecture';
import ExampleProblem from '../../components/ExampleProblem';
import PracticeQA from '../../components/PracticeQA';
import ProjectCard from '../../components/ProjectCard';

// Syllabus for Weeks 1–4; placeholders thereafter
const syllabus = {
  1: {
    title: 'Prompt Engineering Basics',
    lecture: { title: 'ChatGPT Prompt Engineering for Developers', src: 'https://www.youtube.com/embed/tRvcAdqsJWo' },
    examples: [
      { description: 'Transform vague summary prompt into structured summary...', solution: '“Summarize…action items at the end.”' }
    ],
    practice: [
      { q: 'What are the two main stages of LLM training?', a: 'Pre-training and fine-tuning/RLHF.' },
      { q: 'Why use chain-of-thought prompting?', a: 'Encourages step-by-step reasoning.' }
    ],
    project: { title: 'PromptCraft Playground', summary: 'Experiment with basic vs improved prompts.' }
  },
  2: {
    title: 'Agentic AI Concepts',
    lecture: { title: 'Agentic AI: A Progression of Language Model Usage', src: 'https://www.youtube.com/embed/kJLiOGle3Lw' },
    examples: [
      { description: 'Outline ReAct loop for a query', solution: 'Thought→Action→Observation→Answer' }
    ],
    practice: [
      { q: 'What is the ReAct pattern?', a: 'Alternating reasoning and actions.' },
      { q: 'Why use tools in agents?', a: 'To access external data or services.' }
    ],
    project: { title: 'Calculator Chatbot', summary: 'Build a ReAct agent for math word problems.' }
  },
  3: {
    title: 'LangChain Framework',
    lecture: { title: 'LangChain Crash Course for Beginners', src: 'https://www.youtube.com/embed/lG7Uxts9SXs' },
    examples: [
      { description: 'Define a LangChain Tool and agent', solution: 'from langchain.agents import initialize_agent, Tool' }
    ],
    practice: [
      { q: 'Chain vs Agent?', a: 'Chains are fixed pipelines; Agents choose tools dynamically.' },
      { q: 'What is ConversationBufferMemory?', a: 'Memory module that retains dialogue history.' }
    ],
    project: { title: 'FAQ Agent', summary: 'Build an agent that answers FAQs from a JSON file.' }
  },
  4: {
    title: 'Retrieval-Augmented Generation (RAG)',
    lecture: { title: 'Learn RAG from Scratch – Python Tutorial', src: 'https://www.youtube.com/embed/sVcwVQRHIc8' },
    examples: [
      { description: 'Explain RAG', solution: 'Retrieve docs via embeddings, then generate with context.' }
    ],
    practice: [
      { q: 'Why embeddings?', a: 'Semantic similarity search.' },
      { q: 'How to use retrieved docs?', a: 'Insert as context into the LLM prompt.' }
    ],
    project: { title: 'Document Q&A Agent', summary: 'Build a RAG agent with citations.' }
  }
};

export default function WeekPage() {
  const { week } = useRouter().query;
  const wk = parseInt(week, 10);
  const data = syllabus[wk];

  if (!data) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Week {week}</h2>
        <p className="text-gray-700 dark:text-gray-300">Content for Week {week} is coming soon. Stay tuned!</p>
      </div>
    );
  }

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
