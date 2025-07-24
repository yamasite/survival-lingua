"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const quizQuestions = [
  {
    question: 'What does "Berhenti" mean?',
    options: ['Stop', 'Give Way', 'Speed Limit', 'No Entry'],
    answer: 'Stop',
  },
  {
    question: 'What does "Beri Laluan" mean?',
    options: ['Stop', 'Give Way', 'Speed Limit', 'No Entry'],
    answer: 'Give Way',
  },
  {
    question: 'What does "Had Laju" mean?',
    options: ['Stop', 'Give Way', 'Speed Limit', 'No Entry'],
    answer: 'Speed Limit',
  },
  {
    question: 'What does "Dilarang Masuk" mean?',
    options: ['Stop', 'Give Way', 'Speed Limit', 'No Entry'],
    answer: 'No Entry',
  },
  {
    question: 'What does "Jalan Sehala" mean?',
    options: ['One Way', 'No Parking', 'Roundabout', 'Exit'],
    answer: 'One Way',
  },
];

export default function RoadSignsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between">
            <Link href="/missions" className="text-xl font-bold text-gray-800">
              &larr; Back to Missions
            </Link>
          </nav>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mission: Road Signs</h1>
          <p className="text-lg text-gray-700 mb-8">
            You are driving in Malaysia. Understand the road signs to get to your destination safely.
          </p>
          <Quiz questions={quizQuestions} />
        </div>
      </main>
    </div>
  );
}