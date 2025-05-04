import React from 'react'
import Confetti from 'react-confetti'
import Text from './Text'
import Message from './Message'
import Languages from './Languages'
import Letter from './Letter'
import Keyboard from './Keyboard'
import Button from './Button'
import Answer from './Answer'
import words from './words'

export default function App() {
    const [gameWon, setGameWon] = React.useState(false)
    const [gameLost, setGameLost] = React.useState(false)
    const [wrongGuess, setWrongGuess] = React.useState(0)

    const [wordArr, setWordArr] = React.useState(
        words[Math.floor(Math.random() * words.length)]
            .toUpperCase()
            .split('')
            .map((item, index) => {
                return { value: item, id: index, isGuessed: false }
            })
    )

    const [letters, setLetters] = React.useState(
        Array.from({ length: 26 }, (item, index) => {
            return {
                value: String.fromCharCode(65 + index),
                guessedRight: false,
                guessedWrong: false,
            }
        })
    )

    React.useEffect(() => {
        if (wrongGuess >= 7) {
            setGameLost(true)
        }
    }, [letters])

    React.useEffect(() => {
        if (wordArr.every((item) => item.isGuessed)) {
            setGameWon(true)
        }
    }, [letters])

    function handleGuess(letter) {
        setLetters((prev) =>
            prev.map((item) => {
                if (item.value == letter) {
                    if (
                        wordArr.map((item) => item.value).includes(item.value)
                    ) {
                        return { ...item, guessedRight: true }
                    } else {
                        setWrongGuess((prev) => ++prev)
                        return { ...item, guessedWrong: true }
                    }
                } else {
                    return item
                }
            })
        )
        setWordArr((prev) =>
            prev.map((item) =>
                item.value === letter ? { ...item, isGuessed: true } : item
            )
        )
    }

    function newGame() {
        setGameLost(false)
        setGameWon(false)
        setWordArr(
            words[Math.floor(Math.random() * words.length)]
                .toUpperCase()
                .split('')
                .map((item, index) => {
                    return { value: item, id: index, isGuessed: false }
                })
        )
        setWrongGuess(0)
        setLetters(
            Array.from({ length: 26 }, (item, index) => {
                return {
                    value: String.fromCharCode(65 + index),
                    guessedRight: false,
                    guessedWrong: false,
                }
            })
        )
    }

    return (
        <div className="flex flex-col items-center">
            <Text />
            <Message
                gameWon={gameWon}
                gameLost={gameLost}
                wrongGuess={wrongGuess}
            />
            <Languages wrongGuess={wrongGuess} />
            <Letter
                gameWon={gameWon}
                gameLost={gameLost}
                wrongGuess={wrongGuess}
                word={wordArr}
            />
            <Keyboard
                gameWon={gameWon}
                gameLost={gameLost}
                letters={letters}
                handleGuess={handleGuess}
            />
            <Button gameWon={gameWon} gameLost={gameLost} newGame={newGame} />
            <Answer
                gameLost={gameLost}
                word={wordArr.map((item) => item.value).join('')}
            />
            {gameWon && (
                <Confetti
                    width={window.innerWidth - 10}
                    height={window.innerHeight - 10}
                />
            )}
        </div>
    )
}
