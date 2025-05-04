export default function Answer(props) {
    return (
        <span className="fixed right-50 bottom-10">
            {props.gameLost ? 'Answer: ' + props.word : ''}
        </span>
    )
}
