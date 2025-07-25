"use client";
import React, { useState, useEffect, useRef } from 'react';

interface RoadSign {
  sign: string;
  question: string;
  options: string[];
  answer: string;
  position: number;
  answered?: boolean;
}

const initialRoadSigns: RoadSign[] = [
  { sign: '🛑', question: 'Apakah maksud tanda ini?', options: ['Berhenti', 'Beri Laluan', 'Jalan'], answer: 'Berhenti', position: 20 },
  { sign: '⚠️', question: 'Apakah maksud tanda ini?', options: ['Amaran', 'Maklumat', 'Peraturan'], answer: 'Amaran', position: 50 },
  { sign: '🚸', question: 'Apakah yang ditunjukkan oleh tanda ini?', options: ['Zon Sekolah', 'Hospital di Hadapan', 'Taman Permainan'], answer: 'Zon Sekolah', position: 80 },
];

const DrivingGame = () => {
  const [carPosition, setCarPosition] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<RoadSign | null>(null);
  const [message, setMessage] = useState('');
  const [roadSigns, setRoadSigns] = useState(initialRoadSigns);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  const moveCar = (direction: 'left' | 'right') => {
    if (currentQuestion) return;

    if (direction === 'right') {
      setCarPosition((prev) => Math.min(prev + 2, 96));
    } else if (direction === 'left') {
      setCarPosition((prev) => Math.max(prev - 2, 0));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      moveCar('right');
    } else if (e.key === 'ArrowLeft') {
      moveCar('left');
    }
  };

  useEffect(() => {
    const sign = roadSigns.find(
      (s) => carPosition >= s.position && carPosition <= s.position + 4 && !s.answered
    );
    if (sign) {
      setCurrentQuestion(sign);
    }
  }, [carPosition, roadSigns]);

  useEffect(() => {
    if (gameAreaRef.current) {
      gameAreaRef.current.focus();
    }
  }, []);

  const handleAnswer = (option: string) => {
    if (currentQuestion && option === currentQuestion.answer) {
      setMessage('Betul! Anda boleh terus memandu.');
      setRoadSigns((prevSigns) =>
        prevSigns.map((s) =>
          s.position === currentQuestion.position ? { ...s, answered: true } : s
        )
      );
      setCurrentQuestion(null);
      setTimeout(() => setMessage(''), 2000);
    } else {
      setMessage('Salah. Cuba lagi!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  return (
    <div>
      <div
        ref={gameAreaRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative w-full h-80 bg-green-400 border-8 border-gray-800 rounded-lg overflow-hidden focus:outline-none"
      >
        <div className="absolute top-1/2 w-full h-1 bg-gray-600" />
        <div
          className="absolute text-5xl"
          style={{ left: `${carPosition}%`, bottom: `10%` }}
        >
          🚗
        </div>
        {roadSigns.map((sign) => (
          <div
            key={sign.position}
            className="absolute text-4xl"
            style={{ left: `${sign.position}%`, bottom: `40%` }}
          >
            {sign.sign}
          </div>
        ))}
        {currentQuestion && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-2xl font-bold mb-4">{currentQuestion.question}</p>
              <div className="flex gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
              {message && <p className="mt-4 text-lg font-semibold">{message}</p>}
            </div>
          </div>
        )}
        {!currentQuestion && message && (
          <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">{message}</p>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={() => moveCar('left')} className="px-8 py-4 bg-gray-500 text-white rounded-lg mr-4 text-2xl">⬅️</button>
        <button onClick={() => moveCar('right')} className="px-8 py-4 bg-gray-500 text-white rounded-lg text-2xl">➡️</button>
      </div>
    </div>
  );
};

export default DrivingGame;