"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const sentenceQuestions = [
  {
    question: "What is the English translation of 'Saya suka makan nasi lemak.'?",
    options: ['I like to eat fried rice.', 'I like to eat nasi lemak.', 'I want to order nasi lemak.', 'Where can I find nasi lemak?' ],
    answer: 'I like to eat nasi lemak.',
  },
  {
    question: "What is the English translation of 'Di mana tandas?'?",
    options: ['Where is the restaurant?', 'Where is the toilet?', 'What is this?', 'How much is this?' ],
    answer: 'Where is the toilet?',
  },
  {
    question: "What is the English translation of 'Boleh saya dapatkan bil?'?",
    options: ['Can I get the menu?', 'Can I get the bill?', 'Can I have more water?', 'Is this spicy?' ],
    answer: 'Can I get the bill?',
  },
];

export default function Sentences() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/training-camp" className="text-xl font-bold text-gray-800">Training Camp</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Sentences Quiz</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Quiz questions={sentenceQuestions} />
        </div>
      </main>
    </div>
  );
}