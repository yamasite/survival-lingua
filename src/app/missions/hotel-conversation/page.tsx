"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const quizQuestions = [
  {
    question: 'How do you say "I have a reservation" in Bahasa Melayu?',
    options: [
      'Saya ada tempahan.',
      'Bilik untuk satu malam.',
      'Pukul berapa sarapan pagi?',
      'Boleh saya dapatkan kata laluan Wi-Fi?',
    ],
    answer: 'Saya ada tempahan.',
  },
  {
    question: 'How do you say "A room for one night" in Bahasa Melayu?',
    options: [
      'Saya ada tempahan.',
      'Bilik untuk satu malam.',
      'Pukul berapa sarapan pagi?',
      'Boleh saya dapatkan kata laluan Wi-Fi?',
    ],
    answer: 'Bilik untuk satu malam.',
  },
  {
    question: 'How do you ask "What time is breakfast" in Bahasa Melayu?',
    options: [
      'Saya ada tempahan.',
      'Bilik untuk satu malam.',
      'Pukul berapa sarapan pagi?',
      'Boleh saya dapatkan kata laluan Wi-Fi?',
    ],
    answer: 'Pukul berapa sarapan pagi?',
  },
  {
    question: 'How do you ask for the Wi-Fi password in Bahasa Melayu?',
    options: [
      'Saya ada tempahan.',
      'Bilik untuk satu malam.',
      'Pukul berapa sarapan pagi?',
      'Boleh saya dapatkan kata laluan Wi-Fi?',
    ],
    answer: 'Boleh saya dapatkan kata laluan Wi-Fi?',
  },
  {
    question: 'How do you say "Thank you" in Bahasa Melayu?',
    options: ['Terima kasih.', 'Selamat pagi.', 'Selamat tinggal.', 'Maaf.'],
    answer: 'Terima kasih.',
  },
];

export default function HotelConversationPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mission: Hotel Conversation</h1>
          <p className="text-lg text-gray-700 mb-8">
            You need to check into your hotel. Use these phrases to communicate with the receptionist.
          </p>
          <Quiz questions={quizQuestions} />
        </div>
      </main>
    </div>
  );
}