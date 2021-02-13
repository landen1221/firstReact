const Tweet = (props) => {
    return (
        <div>
            <h4>{props.username} -- {props.name} -- {props.date}</h4>
            <p>{props.message}</p>
        </div>
    )
}