import React from 'react'

export default function Message(props) {
    const messageRef = React.useRef(null)
    let message = ''
    React.useEffect(() => {
        if (props.gameWon) {
            message = 'Congratulations! You won.'
        } else if (props.gameLost) {
            message = 'You Lost! Now use PHP forever.'
        } else {
            switch (props.wrongGuess) {
                case 1:
                    message = 'Say goodbye to React'
                    break
                case 2:
                    message = 'Type your last lines in TypeScript'
                    break
                case 3:
                    message = 'Run one final JavaScript script'
                    break
                case 4:
                    message = 'Style your last page with CSS'
                    break
                case 5:
                    message = 'Render your final HTML markup'
                    break
                case 6:
                    message = 'Send your last request with Express'
                    break
                default:
                    message = 'Good Luck!'
            }
        }

        messageRef.current.innerText = message
    }, [props.wrongGuess, props.gameWon, props.gameLost])

    return (
        <div
            className={
                'my-10 mb-10 flex h-18 w-100 items-center justify-center border-2 border-dotted border-gray-300 font-[Inter] text-lg' +
                (props.gameLost ? ' bg-red-400' : '') +
                (props.gameWon ? ' bg-green-400' : '')
            }
            ref={messageRef}
        >
            Good Luck!
        </div>
    )
}
