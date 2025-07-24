"use client";
import { useState } from 'react';

interface MatchItem {
  id: number;
  text: string;
  matchId: number;
}

interface MatchingGameProps {
  items: { left: MatchItem[]; right: MatchItem[] };
}

export default function MatchingGame({ items }: MatchingGameProps) {
  const [leftItems, setLeftItems] = useState<MatchItem[]>(items.left);
  const [rightItems, setRightItems] = useState<MatchItem[]>(items.right);
  const [selectedLeft, setSelectedLeft] = useState<MatchItem | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleLeftClick = (item: MatchItem) => {
    if (item.matchId === 0) return;
    setSelectedLeft(item);
  };

  const handleRightClick = (item: MatchItem) => {
    if (!selectedLeft || item.matchId === 0) return;

    if (selectedLeft.matchId === item.id) {
      const newLeft = leftItems.map(i => i.id === selectedLeft.id ? { ...i, matchId: 0 } : i);
      const newRight = rightItems.map(i => i.id === item.id ? { ...i, matchId: 0 } : i);
      setLeftItems(newLeft);
      setRightItems(newRight);
      setSelectedLeft(null);

      if (newLeft.every(i => i.matchId === 0)) {
        setCompleted(true);
      }
    } else {
      alert("Try again!");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <div className="flex justify-between">
        <div className="w-1/2 pr-2">
          {leftItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleLeftClick(item)}
              className={`p-2 my-1 border rounded cursor-pointer ${selectedLeft?.id === item.id ? 'bg-blue-200' : ''} ${item.matchId === 0 ? 'bg-gray-300 text-gray-500 line-through' : 'hover:bg-gray-100'}`}
            >
              {item.text}
            </div>
          ))}
        </div>
        <div className="w-1/2 pl-2">
          {rightItems.map(item => (
            <div
              key={item.id}
              onClick={() => handleRightClick(item)}
              className={`p-2 my-1 border rounded cursor-pointer ${item.matchId === 0 ? 'bg-gray-300 text-gray-500 line-through' : 'hover:bg-gray-100'}`}
            >
              {item.text}
            </div>
          ))}
        </div>
      </div>
      {completed && <div className="mt-4 text-center text-green-500 font-bold">Congratulations! You&apos;ve matched them all!</div>}
    </div>
  );
}