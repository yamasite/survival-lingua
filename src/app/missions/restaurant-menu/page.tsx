"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const quizQuestions = [
  {
    question: 'What is "Nasi Lemak"?',
    options: ['Coconut Rice', 'Fried Chicken', 'Pulled Tea', 'Oxtail Soup'],
    answer: 'Coconut Rice',
  },
  {
    question: 'What is "Ayam Goreng"?',
    options: ['Coconut Rice', 'Fried Chicken', 'Pulled Tea', 'Oxtail Soup'],
    answer: 'Fried Chicken',
  },
  {
    question: 'What is "Teh Tarik"?',
    options: ['Coconut Rice', 'Fried Chicken', 'Pulled Tea', 'Oxtail Soup'],
    answer: 'Pulled Tea',
  },
  {
    question: 'What is "Sup Ekor"?',
    options: ['Coconut Rice', 'Fried Chicken', 'Pulled Tea', 'Oxtail Soup'],
    answer: 'Oxtail Soup',
  },
  {
    question: 'What is "Air Kosong"?',
    options: ['Plain Water', 'Iced Lemon Tea', 'Orange Juice', 'Coffee'],
    answer: 'Plain Water',
  },
];

export default function RestaurantMenuPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mission: Restaurant Menu</h1>
          <p className="text-lg text-gray-700 mb-8">
            You are at a local Malaysian restaurant. Order your food by understanding the menu.
          </p>
          <Quiz questions={quizQuestions} />
        </div>
      </main>
    </div>
  );
}