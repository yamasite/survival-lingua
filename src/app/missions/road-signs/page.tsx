"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';
import FillInTheBlank from '../../components/FillInTheBlank';
import DrivingGame from '../../components/DrivingGame';

const quizQuestions = [
  {
    question: "What does the 'Berhenti' sign mean?",
    options: ['Stop', 'Go', 'Yield', 'No Entry'],
    answer: 'Stop',
  },
  {
    question: "What does the 'Beri Laluan' sign mean?",
    options: ['Stop', 'Go', 'Yield', 'No Entry'],
    answer: 'Yield',
  },
  {
    question: "What does the 'Dilarang Masuk' sign mean?",
    options: ['Stop', 'Go', 'Yield', 'No Entry'],
    answer: 'No Entry',
  },
  {
    question: "What does the 'Had Laju' sign indicate?",
    options: ['Speed Limit', 'No Parking', 'One Way', 'School Zone'],
    answer: 'Speed Limit',
  },
  {
    question: "What does the 'Jalan Sehala' sign mean?",
    options: ['Speed Limit', 'No Parking', 'One Way', 'School Zone'],
    answer: 'One Way',
  },
];

const fillInTheBlankQuestions = [
    {
        question: "The sign for 'Stop' is '____'.",
        answer: "Berhenti"
    },
    {
        question: "To 'Yield' to other traffic, you look for the '____ ____' sign.",
        answer: "Beri Laluan"
    },
    {
        question: "A 'No Entry' sign is indicated by '____ ____'.",
        answer: "Dilarang Masuk"
    },
    {
        question: "The 'Speed Limit' is shown by the '____ ____' sign.",
        answer: "Had Laju"
    },
    {
        question: "A 'One Way' street is marked with a '____ ____' sign.",
        answer: "Jalan Sehala"
    }
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
            Understanding road signs is crucial for safety. Learn these common signs in Malaysia.
          </p>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Multiple Choice Quiz</h2>
            <Quiz questions={quizQuestions} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fill in the Blank</h2>
            <FillInTheBlank questions={fillInTheBlankQuestions} />
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Driving Game</h2>
            <DrivingGame />
          </div>
        </div>
      </main>
    </div>
  );
}