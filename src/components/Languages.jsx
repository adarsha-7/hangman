export default function Languages(props) {
    return (
        <div className="flex w-100 flex-wrap items-center justify-center gap-1 font-bold text-black">
            <div
                className={
                    'rounded-md bg-red-400 p-2 text-sm ' +
                    (props.wrongGuess > 0 ? 'brightness-50' : '')
                }
            >
                React
                {props.wrongGuess > 0 ? <span className="z-10">💀</span> : ''}
            </div>

            <div
                className={
                    'rounded-md bg-blue-400 p-2 text-sm ' +
                    (props.wrongGuess > 1 ? 'brightness-50' : '')
                }
            >
                TypeScript
                {props.wrongGuess > 1 ? <span className="z-10">💀</span> : ''}
            </div>

            <div
                className={
                    'rounded-md bg-green-400 p-2 text-sm ' +
                    (props.wrongGuess > 2 ? 'brightness-50' : '')
                }
            >
                JavaScript
                {props.wrongGuess > 2 ? <span className="z-10">💀</span> : ''}
            </div>
            <div
                className={
                    'rounded-md bg-pink-400 p-2 text-sm ' +
                    (props.wrongGuess > 3 ? 'brightness-50' : '')
                }
            >
                CSS
                {props.wrongGuess > 3 ? <span className="z-10">💀</span> : ''}
            </div>
            <div
                className={
                    'rounded-md bg-indigo-400 p-2 text-sm ' +
                    (props.wrongGuess > 4 ? 'brightness-50' : '')
                }
            >
                HTML
                {props.wrongGuess > 4 ? <span className="z-10">💀</span> : ''}
            </div>
            <div
                className={
                    'rounded-md bg-lime-400 p-2 text-sm ' +
                    (props.wrongGuess > 5 ? 'brightness-50' : '')
                }
            >
                Express.js
                {props.wrongGuess > 5 ? <span className="z-10">💀</span> : ''}
            </div>
            <div
                className={
                    'rounded-md bg-orange-400 p-2 text-sm ' +
                    (props.wrongGuess > 6 ? 'brightness-50' : '')
                }
            >
                Node.js
                {props.wrongGuess > 6 ? <span className="z-10">💀</span> : ''}
            </div>
            <div className="rounded-md bg-slate-400 p-2 text-sm">PHP</div>
        </div>
    )
}
