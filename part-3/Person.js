const Person = ({name, age, hobbies}) => {
    return (
        <div>
            <p>Learn some information about this person</p>
            <ul>
                <li>Name: {name.length >= 8 ? name.substr(0,8) : name} </li>
                <li>Age: {age} </li>
                <li>Hobbies: {hobbies.map(h => `${h}, `)}</li>
                <li><b>{age >= 18 ? "Go Vote" : "You must be 18"}</b></li>
            </ul>
        </div>
    )
}