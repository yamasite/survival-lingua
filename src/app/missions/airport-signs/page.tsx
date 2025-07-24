"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';
import FillInTheBlank from '../../components/FillInTheBlank';
import MazeGame from '../../components/MazeGame';

const quizQuestions = [
  {
    question: "What does 'Ketibaan' mean?",
    options: ["Arrivals", "Departures", "Toilets", "Gates"],
    answer: "Arrivals",
  },
  {
    question: "What does 'Berlepas' mean?",
    options: ["Arrivals", "Departures", "Toilets", "Gates"],
    answer: "Departures",
  },
  {
    question: "What does 'Tandas' mean?",
    options: ["Arrivals", "Departures", "Toilets", "Gates"],
    answer: "Toilets",
  },
  {
    question: "What does 'Pintu' mean?",
    options: ["Arrivals", "Departures", "Toilets", "Gates"],
    answer: "Gates",
  },
  {
    question: "What does 'Kaunter Daftar Masuk' mean?",
    options: ["Check-in Counter", "Baggage Claim", "Immigration", "Customs"],
    answer: "Check-in Counter",
  },
  {
    question: "What does 'Tuntutan Bagasi' mean?",
    options: ["Check-in Counter", "Baggage Claim", "Immigration", "Customs"],
    answer: "Baggage Claim",
  },
  {
    question: "What does 'Imigresen' mean?",
    options: ["Check-in Counter", "Baggage Claim", "Immigration", "Customs"],
    answer: "Immigration",
  },
  {
    question: "What does 'Kastam' mean?",
    options: ["Check-in Counter", "Baggage Claim", "Immigration", "Customs"],
    answer: "Customs",
  },
];

const fillInTheBlankQuestions = [
    {
        question: "The sign for 'Arrivals' is ____.",
        answer: "Ketibaan"
    },
    {
        question: "If you are departing, you should look for the ____ sign.",
        answer: "Berlepas"
    },
    {
        question: "The word for 'Toilets' in Malay is ____.",
        answer: "Tandas"
    },
    {
        question: "To find your gate, you need to look for the sign that says ____.",
        answer: "Pintu"
    }
];


export default function AirportSignsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mission: Airport Signs</h1>
          <p className="text-lg text-gray-700 mb-8">
            You&apos;ve just landed at Kuala Lumpur International Airport (KLIA). Navigate your way through the airport by understanding the signs.
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Maze Game</h2>
            <MazeGame />
          </div>
        </div>
      </main>
    </div>
  );
}