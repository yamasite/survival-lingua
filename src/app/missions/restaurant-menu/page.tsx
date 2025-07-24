"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';
import FillInTheBlank from '../../components/FillInTheBlank';
import MatchingGame from '../../components/MatchingGame';

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
  {
    question: 'What is "Ikan Bakar"?',
    options: ['Grilled Fish', 'Fried Rice', 'Chicken Satay', 'Beef Rendang'],
    answer: 'Grilled Fish',
  },
  {
    question: 'What is "Roti Canai"?',
    options: ['Flatbread', 'Steamed Bun', 'Rice Cake', 'Spring Roll'],
    answer: 'Flatbread',
  },
  {
    question: 'What is "Curry Laksa"?',
    options: ['Spicy Noodle Soup', 'Chicken Porridge', 'Fish Head Curry', 'Vegetable Stir-fry'],
    answer: 'Spicy Noodle Soup',
  },
];

const fillInTheBlankQuestions = [
    {
        question: "A popular Malaysian rice dish cooked in coconut milk is called ____ ____.",
        answer: "Nasi Lemak"
    },
    {
        question: "____ ____ is the Malay term for 'Fried Chicken'.",
        answer: "Ayam Goreng"
    },
    {
        question: "The national drink of Malaysia, a pulled tea, is known as ____ ____.",
        answer: "Teh Tarik"
    },
    {
        question: "If you want to order oxtail soup, you should look for ____ ____ on the menu.",
        answer: "Sup Ekor"
    },
    {
        question: "To ask for plain water, you can say ____ ____.",
        answer: "Air Kosong"
    },
    {
        question: "A popular Malaysian grilled fish is called ____ ____.",
        answer: "Ikan Bakar"
    },
    {
        question: "A type of Indian-influenced flatbread in Malaysia is ____ ____.",
        answer: "Roti Canai"
    },
    {
        question: "A spicy noodle soup with a coconut milk base is called ____ ____.",
        answer: "Curry Laksa"
    }
];

const matchingGameItems = {
  left: [
    { id: 1, text: 'Nasi Lemak', matchId: 1 },
    { id: 2, text: 'Ayam Goreng', matchId: 2 },
    { id: 3, text: 'Teh Tarik', matchId: 3 },
    { id: 4, text: 'Sup Ekor', matchId: 4 },
    { id: 5, text: 'Air Kosong', matchId: 5 },
    { id: 6, text: 'Ikan Bakar', matchId: 6 },
    { id: 7, text: 'Roti Canai', matchId: 7 },
    { id: 8, text: 'Curry Laksa', matchId: 8 },
  ],
  right: [
    { id: 1, text: 'Coconut Rice', matchId: 1 },
    { id: 2, text: 'Fried Chicken', matchId: 2 },
    { id: 3, text: 'Pulled Tea', matchId: 3 },
    { id: 4, text: 'Oxtail Soup', matchId: 4 },
    { id: 5, text: 'Plain Water', matchId: 5 },
    { id: 6, text: 'Grilled Fish', matchId: 6 },
    { id: 7, text: 'Flatbread', matchId: 7 },
    { id: 8, text: 'Spicy Noodle Soup', matchId: 8 },
  ].sort(() => Math.random() - 0.5),
};

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
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Multiple Choice Quiz</h2>
            <Quiz questions={quizQuestions} />
          </div>
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Fill in the Blank</h2>
            <FillInTheBlank questions={fillInTheBlankQuestions} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Matching Game</h2>
            <MatchingGame items={matchingGameItems} />
          </div>
        </div>
      </main>
    </div>
  );
}