export default function Text() {
    return (
        <div className="flex flex-col items-center gap-5">
            <h1 className="text-3xl text-[rgb(230_230_230)]">
                Hangman feat. WebDev
            </h1>
            <p className="text-md w-160 text-center text-[rgb(150_150_150)]">
                Guess the word in under 7 attempts. With each attempt, a web
                language dies until there is only PHP left and you will have to
                code in PHP for the rest of your life.
            </p>
        </div>
    )
}
