"use client";

import { useState } from 'react';

interface FillInTheBlankProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export default function FillInTheBlank({ questions }: FillInTheBlankProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswer = () => {
    if (userAnswer.toLowerCase().trim() === questions[currentQuestion].answer.toLowerCase().trim()) {
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
    setUserAnswer('');
  };

  if (currentQuestion >= questions.length) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Game Complete!</h2>
        <p className="text-lg">Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion].question}</h2>
      <input
        type="text"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        disabled={showFeedback}
        className="p-4 border rounded-lg w-full"
        placeholder="Type your answer here"
      />
      <button
        onClick={handleAnswer}
        disabled={showFeedback || !userAnswer}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-400"
      >
        Submit
      </button>
      {showFeedback && (
        <div className="mt-4 text-center">
          <p className={`text-lg font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Correct!' : `Wrong Answer. The correct answer is: ${questions[currentQuestion].answer}`}
          </p>
          <button onClick={handleNextQuestion} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}