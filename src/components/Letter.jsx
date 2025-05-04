export default function Letter(props) {
    return (
        <div className="m-15 flex items-center justify-center gap-1">
            {props.word.map((item) => (
                <div className="letter" key={item.id}>
                    {item.isGuessed && item.value}
                </div>
            ))}
        </div>
    )
}
