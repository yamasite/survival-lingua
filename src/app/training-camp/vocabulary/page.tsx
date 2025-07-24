"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const vocabularyQuestions = [
  {
    question: "What is 'Good morning' in Bahasa Melayu?",
    options: ['Selamat pagi', 'Terima kasih', 'Sama-sama', 'Berapa harganya?'],
    answer: 'Selamat pagi',
  },
  {
    question: "What is 'Thank you' in Bahasa Melayu?",
    options: ['Tolong', 'Terima kasih', 'Sama-sama', 'Berapa harganya?'],
    answer: 'Terima kasih',
  },
  {
    question: "What is 'You're welcome' in Bahasa Melayu?",
    options: ['Selamat pagi', 'Tolong', 'Sama-sama', 'Berapa harganya?'],
    answer: 'Sama-sama',
  },
  {
    question: "What is 'How much is this?' in Bahasa Melayu?",
    options: ['Selamat pagi', 'Terima kasih', 'Sama-sama', 'Berapa harganya?'],
    answer: 'Berapa harganya?',
  },
  {
    question: "What is 'Help / Please' in Bahasa Melayu?",
    options: ['Tolong', 'Terima kasih', 'Sama-sama', 'Selamat pagi'],
    answer: 'Tolong',
  },
];

export default function Vocabulary() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/training-camp" className="text-xl font-bold text-gray-800">Training Camp</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Vocabulary Quiz</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Quiz questions={vocabularyQuestions} />
        </div>
      </main>
    </div>
  );
}