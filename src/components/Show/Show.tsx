

import React from "react";
import { useState } from "react"
import { Bord } from "../Bord/Bord";
import { Game } from "../Game/Game";

export function Show() {
  const [display, setDisplay] = useState(true);

  const resetGame = () => {
    setDisplay(false); // משנים את המצב לזמן קצר כדי לאפס את הקומפוננטה
    setTimeout(() => {
      setDisplay(true); // מציגים את המשחק מחדש
    }, 100);
  };

  return (
    <div>
      {display ? (
        <Bord GoToGame={() => setDisplay(false)} resetGame={resetGame} />
      ) : (
        <Game GoToGame={() => setDisplay(true)} />
      )}
    </div>
  );
}
