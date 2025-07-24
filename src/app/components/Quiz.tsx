"use client";

import { useState } from 'react';

interface QuizProps {
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Quiz Complete!</h2>
        <p className="text-lg">Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
      <div className="grid grid-cols-1 gap-4">
        {questions[currentQuestion].options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswer(option)}
            disabled={showFeedback}
            className={`p-4 rounded-lg text-left w-full ${showFeedback ? (option === questions[currentQuestion].answer ? 'bg-green-500' : 'bg-red-500') : 'bg-white hover:bg-gray-100'}`}>
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-4 text-center">
          <p className={`text-lg font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : 'Wrong Answer'}
          </p>
          <button onClick={handleNextQuestion} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}