import React from "react";
import {useState} from "react"
import './Keyboard.css'
type KeyboardProps = {
    send: any; // פעולה שאתה שולח כ-prop
    children?: React.ReactNode; // מאפשר children כאופציונלי
};

    export function Keyboard(props: KeyboardProps) {
        const English = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '*',
            'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', '*',
            'z', 'x', 'c', 'v', 'b', 'n', 'm']
        const Hebrew = [
            'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '*',
            'ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', '*',
            'ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ'
        ];
        const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const specialCharacters = [
            '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',' ',
            '-', '_', '=', '+', '[', ']', '{', '}', ';', ':',' ',
            '\'', '"', ',', '.', '/', '<', '>', '?', '|', '\\'
        ];
        const [language, setLanguage] = useState(true);
        function changeLanguage() {
            setLanguage(language === true ? false : true);
        }
        return <div className="keyboard-container">
               <div className="row">
                {numbers.map((num, i) => (
                    <button onClick={() => props.send(num)} className="key">{num}</button>
                ))}
            </div>
            <div>
                {specialCharacters.map((char, i) => (
                        <span>
                        {char ==' ' ? <br /> : <button onClick={() => props.send(char)} className="key">{char == '*' ? <br /> : char}</button>
                        }
                    </span>))}
            </div>
            {language ? <div >
                {English.map((char, i) => (
    
                    <span>
                        {char == '*' ? <br /> : <button onClick={() => props.send(char)} className="key">{char == '*' ? <br /> : char}</button>
                        }
                    </span>
                ))}
            </div>
                : <div>
                    {Hebrew.map((char, i) => (
                        <span>
                            {char == '*' ? <br /> : <button onClick={() => props.send(char)} className="key">{char == '*' ? <br /> : char}</button>
                            }
                        </span>
                    ))}
                </div>}
    
            <button onClick={() => props.send('  ')}>space</button>
            <button onClick={changeLanguage}>change language</button>
        </div>
    }