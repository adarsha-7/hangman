export default function Button(props) {
    return (
        <>
            {(props.gameLost || props.gameWon) && (
                <button
                    className="h-15 w-50 cursor-pointer rounded-md bg-amber-500 text-2xl text-white"
                    onClick={() => props.newGame()}
                >
                    New Game
                </button>
            )}
        </>
    )
}
