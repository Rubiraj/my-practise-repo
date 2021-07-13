import React from 'react'

import useWordGame from "./hooks/wordGame"

function App() {

    const {
        timeRemaining,
        isTimeRunning,
        startGame,
        handleChange,
        inputRef,
        textLength,
        text,
    } = useWordGame(5)
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={inputRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time Remaining: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isTimeRunning}>
                {textLength>0 ?"Play Again":"Start"}
            </button>
            <h1>Word count: {textLength}</h1>
        </div>
    )
}

export default App