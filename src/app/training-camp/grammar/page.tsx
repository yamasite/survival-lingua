"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const grammarQuestions = [
  {
    question: "What is the basic word order in Malay?",
    options: ['Subject-Verb-Object (SVO)', 'Subject-Object-Verb (SOV)', 'Verb-Subject-Object (VSO)', 'Object-Subject-Verb (OSV)'],
    answer: 'Subject-Verb-Object (SVO)',
  },
  {
    question: "How is plurality indicated for nouns in Malay?",
    options: ['By context or reduplication', 'By adding -s or -es', 'By changing the vowel', 'Nouns are always plural'],
    answer: 'By context or reduplication',
  },
  {
    question: "How is tense indicated for verbs in Malay?",
    options: ['By adverbs of time', 'By verb conjugation', 'By changing the word order', 'Verbs are always in the present tense'],
    answer: 'By adverbs of time',
  },
];

export default function Grammar() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/training-camp" className="text-xl font-bold text-gray-800">Training Camp</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Grammar Quiz</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Quiz questions={grammarQuestions} />
        </div>
      </main>
    </div>
  );
}