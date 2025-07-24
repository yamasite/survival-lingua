"use client";
import React, { useState, useEffect, useCallback } from 'react';

const initialMaze = [
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 3, 1, 0, 1, 3, 1, 0, 3, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 1, 1],
  [1, 3, 0, 0, 3, 1, 1, 3, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [3, 0, 0, 1, 3, 0, 3, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 3, 0, 0, 3, 0, 3, 0, 1],
  [1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 3, 1, 1, 3, 0, 0, 0, 3, 2],
];

interface Question {
    question: string;
    options: string[];
    answer: string;
}

const questions: Question[] = [
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

const MazeGame = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 });
  const [maze, setMaze] = useState(initialMaze);
  const [question, setQuestion] = useState<Question | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (question) return;

    const { x, y } = playerPosition;
    let newX = x;
    let newY = y;

    if (e.key === 'ArrowUp') newY--;
    if (e.key === 'ArrowDown') newY++;
    if (e.key === 'ArrowLeft') newX--;
    if (e.key === 'ArrowRight') newX++;

    if (maze[newY] && maze[newY][newX] !== 0) {
      setPlayerPosition({ x: newX, y: newY });
      if (maze[newY][newX] === 2) {
        setFeedback('Congratulations! You reached the end!');
      } else if (maze[newY][newX] === 3) {
        setQuestion(questions[Math.floor(Math.random() * questions.length)]);
        const newMaze = [...maze];
        newMaze[newY][newX] = 1; // Mark question as answered
        setMaze(newMaze);
      }
    }
  }, [question, playerPosition, maze]);

  const handleAnswer = (answer: string) => {
    if (question) {
      if (answer === question.answer) {
        setFeedback('Correct! Keep going.');
      } else {
        setFeedback(`Not quite. The correct answer is ${question.answer}.`);
      }
      setQuestion(null);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="text-center">
      <div className="grid grid-cols-10 gap-1 bg-gray-300 p-2 mx-auto w-max">
        {maze.map((row, y) =>
          row.map((cell, x) => (
            <div
              key={`${x}-${y}`}
              className={`w-10 h-10 flex items-center justify-center text-xl ${
                cell === 0 ? 'bg-gray-800' : 'bg-white'
              } ${
                playerPosition.x === x && playerPosition.y === y
                  ? 'bg-blue-500'
                  : ''
              }`}
            >
              {cell === 2 && '🏁'}
              {cell === 3 && '❓'}
              {playerPosition.x === x && playerPosition.y === y && '😀'}
            </div>
          ))
        )}
      </div>
      {question && (
        <div className="mt-4 p-4 bg-gray-200 rounded w-max mx-auto">
          <h3 className="text-xl font-bold">{question.question}</h3>
          <div className="mt-2">
            {question.options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
      {feedback && <p className="mt-4 text-lg font-semibold">{feedback}</p>}
    </div>
  );
};

export default MazeGame;