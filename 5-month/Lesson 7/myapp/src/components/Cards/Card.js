function Card(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.name}</h2>
            <h3>{props.age}</h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;