import {useEffect} from "react";
import * as readline from "readline";

const Q1Page = () => {
    const ExampleInput = [
        "8",
        "4 R",
        "1 P",
        "8 P",
        "3 R",
        "7 C",
        "5 S",
        "6 L",
        "2 L"
    ]

    function logic() {
        const N: number = +ExampleInput[0];
        for (let i = 1; i <= N; i++) {
            var inputs: string[] = ExampleInput[i].split(' ');
            const NUMPLAYER: number = +inputs[0];
            const SIGNPLAYER: string = inputs[1];
        }
    }

    return (
        <>
            <div>Q1 Page</div>
            <button onClick={(e) => {
                window.open("https://www.codingame.com/ide/puzzle/rock-paper-scissors-lizard-spock")
            }}>Open Question
            </button>
        </>
    )
}
export default Q1Page
