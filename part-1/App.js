const App = () => (
    <div>
        <FirstComponent /> 
        <NamedComponent name="Matthew Landen" />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));