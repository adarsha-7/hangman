import React from 'react'

export default function Keyboard(props) {
    const keyboard = props.letters.map((item) => (
        <button
            className={
                item.guessedRight
                    ? 'keyboard-button bg-green-400'
                    : item.guessedWrong
                      ? 'keyboard-button bg-red-400'
                      : 'keyboard-button bg-amber-400'
            }
            key={item.value}
            onClick={() =>
                props.gameWon || props.gameLost
                    ? null
                    : props.handleGuess(item.value)
            }
        >
            {item.value}
        </button>
    ))

    return (
        <div className="mx-20 my-10 flex w-150 flex-wrap items-center justify-center gap-2 text-xl font-medium">
            {keyboard}
        </div>
    )
}
