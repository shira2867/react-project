import { useState,useEffect } from "react";
import "./Game.css";
import { Timer } from "../Timer/Timer";
import { Bord } from "../Bord/Bord";

type GameProps = {
    GoToGame: any; // פעולה שאתה שולח כ-prop
    children?: React.ReactNode; // מאפשר children כאופציונלי
};
export function Game(props:GameProps) {
  const [TimeOff, setTimeOff] = useState(false);
  const [winner, setWinner] = useState(false);
  const [myBord, setBord] = useState<string[]>(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [showBord, setShowBord] = useState(false);
  const [display, setDisplay] = useState(true);

      const resetGame = () => {
        setTimeOff(false);
        setWinner(false);
        setBord(Array(9).fill(""));
        setTurn("X");
        setShowBord(false);
      };

  const EndZero = () => {
    setTimeOff(true);
  };

  function hasWinner(board: string[]) {
    const winningCombinations = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return true;
      }
    }
    return false;
  }

  function turnFunc(i: number) {
    if (myBord[i] !== "" || winner || TimeOff) return; // Prevent invalid moves
    const newBord = [...myBord];
    newBord[i] = turn;
    setBord(newBord);

    if (hasWinner(newBord)) {
      setWinner(true);
      setTimeout(() => {
        setShowBord(true);
      }, 3000);
    } else {
      setTurn(turn === "X" ? "O" : "X");
    }
  }

  if (showBord) {
    return <Bord GoToGame={props.GoToGame} resetGame={resetGame} />;
  }


  return (
    <div>
      {!TimeOff && !winner ? (
        <Timer parentFunc={EndZero} myNumberStart={20} />
      ) : null}

      <h2>משחק</h2>
      {TimeOff && !winner ? (
        <div className="game-over">GameOver</div>
      ) : winner ? (
        <div className="winner">{`Winner: ${turn}`}</div>
      ) : (
        <div className="game-board">
          {myBord.map((button, i) => (
            <div onClick={() => turnFunc(i)} className="game-cell" key={i}>
              {button}
            </div>
          ))}
        </div>
      )}

      <h2>בהנאה...</h2>
    </div>
  );
}
