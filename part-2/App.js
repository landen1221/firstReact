const App = () => (
    <div>
        <Tweet username="landen1221" name="Matthew Landen" date = {getDate()} message="Learning React is pretty fun!" />
        <Tweet username="bella" name="Bella Landen" date = {getDate()} message="I like to go on a lot of walks!" />
        <Tweet username="Mr.Vito" name="Vito Landen" date = {getDate()} message="I like to sleep and eat!" /> 
    </div>
);

function getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today
}

ReactDOM.render(<App />, document.getElementById("root"));