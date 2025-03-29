import React from "react";
import { useState } from "react"
import { Keyboard } from "../Keyboard/Keyboard";
import { CharModel } from "../../Models/CharModel.Models";
import './Bord.css'

interface CharsProps {
    myChar: CharModel
}

type BordProps = {
    GoToGame: () => void; // פונקציה למעבר למסך המשחק
    resetGame: () => void; // פונקציה לאיפוס מצב המשחק  
      children?: React.ReactNode; // מאפשר children כאופציונלי
};

export function Bord(props:BordProps) {


    const [color, setColor] = useState('black');
    const [bold, setBold] = useState(400);
    const [size, setSize] = useState(18);
    const [capsLock, setcapsLock] = useState(false);
    const [bordList, setBordList] = useState<CharModel[]>([]);

   
    function sendFunc(thisChar: string) {
        const newChar = new CharModel(thisChar, bold, size, color, capsLock)
        setBordList((prev) => [...prev, newChar]);
    }
    function Increase() {
        const thisSize=size+2
        setSize(thisSize)
    }
    function Decrease() { 
        const thisSize=size-2
        if (10 < size)  
            setSize(thisSize)
    }
    function changeColor(thisColor: string) {
        setColor(thisColor)
    }
    function changeBold() {
        setBold(bold === 400 ? 700 : 400)
    }
    function deleteThis() {
        setBordList(bordList.slice(0,-1));
    }
    function deleteAll() {
        setBordList([]);
    }
    function capsLockFunc() {
        setcapsLock(capsLock === true ? false : true);
    }
   return <div className="bord-container">
          <div className="display-container">
             {
              bordList.map((c) => (
               <span style={{color:c.color,fontSize:c.size,fontWeight:c.bold}}>{c.capsLock==true? c.char.toUpperCase():c.char.toLowerCase()}
                </span>) )
            }
        </div>
        <button onClick={Increase}>להגדיל</button>

        <button onClick={Decrease}>להקטין</button>
        <button onClick={() => (changeColor('red'))}className="red">אדום</button>
        <button onClick={() => (changeColor('blue'))}className="blue">כחול</button>
        <button onClick={() => (changeColor('black'))}className="black">שחור</button>
        <button onClick={changeBold}>עובי</button>
        <button onClick={deleteThis} className="delete">
            delete
          </button>
          <button onClick={deleteAll} className="delete">
            delete all
          </button>
          <button onClick={capsLockFunc} className="caps-lock">
            caps lock
          </button>
          <button onClick={props.GoToGame}>משחק</button>

        <Keyboard send={sendFunc}></Keyboard>
    </div>
   
         
         
}