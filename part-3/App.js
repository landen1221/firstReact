const App = () => (
    <div>
       <Person name="Matthew Landen" age={31} hobbies= {["golfing", "programming", "dog walking"]} />
       <Person name="Sandra" age={29} hobbies= {["Writing", "reading", "wine"]} />
       <Person name="Jonathan" age={54} hobbies= {["Biking", "drinking", "sleeping"]} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));