import React, { useState } from 'react';

export default function ValentineProposal() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({});

  const noMessages = [
    { emoji: "🥺", text: "Are you sure? Please reconsider..." },
    { emoji: "😢", text: "But... but... I really like you!" },
    { emoji: "🥹", text: "Maybe you clicked the wrong button?" },
    { emoji: "😭", text: "My heart is breaking... try again?" },
    { emoji: "💔", text: "Please? I promise to be the best Valentine!" },
    { emoji: "🙏", text: "One more chance? Pretty please?" },
    { emoji: "😿", text: "I'll be sad forever... unless you say yes!" },
    { emoji: "🌹", text: "I even got you virtual roses! Say yes!" },
    { emoji: "💕", text: "Come on, you know you want to say yes!" },
    { emoji: "🎀", text: "The Yes button is calling your name!" },
  ];

  const handleNo = () => {
    setNoCount(noCount + 1);
    
    // Make the No button run away
    const randomX = Math.random() * 80 - 40;
    const randomY = Math.random() * 80 - 40;
    setNoButtonStyle({
      transform: `translate(${randomX}px, ${randomY}px)`,
      transition: 'transform 0.3s ease'
    });
  };

  const handleYes = () => {
    setYesPressed(true);
  };

  if (yesPressed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-red-200 to-pink-400 p-4">
        <div className="text-center animate-bounce">
          <div className="text-9xl mb-8">🎉💖🎉</div>
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            YAAAY!
          </h1>
          <p className="text-3xl text-white mb-8 drop-shadow-md">
            I knew you'd say yes! 💕
          </p>
          <div className="text-7xl animate-pulse">
            ❤️ 🥰 💑 ❤️
          </div>
          <p className="text-2xl text-white mt-8 drop-shadow-md">
            Best Valentine's Day ever! 🌹
          </p>
        </div>
      </div>
    );
  }

  const currentMessage = noMessages[Math.min(noCount, noMessages.length - 1)];
  const yesButtonSize = Math.min(150 + noCount * 20, 350);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-red-100 to-pink-300 p-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="text-8xl mb-8 animate-pulse">💝</div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-red-600 mb-4 drop-shadow-lg">
          Will You Be My Valentine?
        </h1>
        
        <p className="text-2xl text-gray-700 mb-12 drop-shadow-sm">
          I promise to make you smile every day! 🌹
        </p>

        {noCount > 0 && (
          <div className="mb-8 animate-bounce">
            <div className="text-6xl mb-2">{currentMessage.emoji}</div>
            <p className="text-xl text-red-500 font-semibold">
              {currentMessage.text}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center relative min-h-[200px]">
          <button
            onClick={handleYes}
            style={{ 
              width: `${yesButtonSize}px`,
              height: `${yesButtonSize}px`,
            }}
            className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-3xl"
          >
            YES! 💕
          </button>
          
          <button
            onClick={handleNo}
            style={noButtonStyle}
            className="bg-red-400 hover:bg-red-500 text-white font-bold py-4 px-8 rounded-full shadow-lg text-xl relative"
          >
            No 😔
          </button>
        </div>

        {noCount > 3 && (
          <p className="mt-8 text-lg text-gray-600 italic">
            Hint: The "Yes" button is getting bigger because it's the right choice! 😉
          </p>
        )}
      </div>
    </div>
  );
}