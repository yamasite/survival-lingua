"use client";
import Link from 'next/link';
import Quiz from '../../components/Quiz';

const paragraphQuestions = [
  {
    question: "What does Ali like to do?",
    options: ['Membaca buku (Read books)', 'Menonton televisyen (Watch television)', 'Bermain permainan video (Play video games)', 'Mendengar muzik (Listen to music)'],
    answer: 'Membaca buku (Read books)',
  },
  {
    question: "Where does Ali go every day?",
    options: ['Perpustakaan (Library)', 'Sekolah (School)', 'Taman (Park)', 'Kedai (Shop)'],
    answer: 'Perpustakaan (Library)',
  },
  {
    question: "What is Kuala Lumpur?",
    options: ['Ibu kota Malaysia (The capital city of Malaysia)', 'Bandar kedua terbesar di Malaysia (The second largest city in Malaysia)', 'Sebuah pulau di Malaysia (An island in Malaysia)', 'Sebuah negeri di Malaysia (A state in Malaysia)'],
    answer: 'Ibu kota Malaysia (The capital city of Malaysia)',
  },
];

export default function Paragraphs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-4">
          <Link href="/training-camp" className="text-xl font-bold text-gray-800">Training Camp</Link>
        </nav>
      </header>
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Paragraphs Quiz</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h2 className="text-xl font-bold">Paragraph 1</h2>
            <p className="text-gray-800 font-bold mb-2">Nama saya Ali. Saya suka membaca buku. Setiap hari, saya pergi ke perpustakaan untuk belajar. Saya juga suka bermain bola sepak dengan kawan-kawan saya.</p>
            <p className="text-gray-600">My name is Ali. I like to read books. Every day, I go to the library to study. I also like to play football with my friends.</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-bold">Paragraph 2</h2>
            <p className="text-gray-800 font-bold mb-2">Kuala Lumpur adalah ibu kota Malaysia. Ia adalah bandar yang besar dan moden. Terdapat banyak bangunan tinggi, pusat membeli-belah, dan restoran di Kuala Lumpur.</p>
            <p className="text-gray-600">Kuala Lumpur is the capital city of Malaysia. It is a big and modern city. There are many tall buildings, shopping malls, and restaurants in Kuala Lumpur.</p>
          </div>
          <Quiz questions={paragraphQuestions} />
        </div>
      </main>
    </div>
  );
}