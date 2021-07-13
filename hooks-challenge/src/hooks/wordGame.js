

import  { useState, useEffect, useRef} from "react"

function useWordGame(startingTime = 10) {
    const [text, setText] = useState(" ")
    const [timeRemaining, setTimeremaining] = useState(startingTime)
    const [isTimeRunning, setIstimerunning] = useState(false)
    const [textLength, setTextlength] = useState(0)
    const inputRef = useRef(null)
    
    function startGame() {
      
        setTextlength(0)
        setText("")
        setIstimerunning(true)
        setTimeremaining(startingTime)
        inputRef.current.disabled = false
        inputRef.current.focus()
    }

    function handleChange(e) {
        const { value } = e.target
        setText(value)
    }

    function calculateWordLength(text) {
        const wordArr = text.trim().split(" ")
        return wordArr.filter(word => word !== "").length
    }


    function endGame()  {
            setIstimerunning(false)
            const numWords = calculateWordLength(text)
            setTextlength(numWords)
            setTimeremaining(0) 
    }

    function decrementTime() {
        setTimeremaining(time => time - 1)
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining !== 0) {
            setTimeout(decrementTime, 1000)
        }
        else if(timeRemaining === 0){
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    return {timeRemaining,text,isTimeRunning,textLength,inputRef,handleChange,startGame}
}

export default useWordGame