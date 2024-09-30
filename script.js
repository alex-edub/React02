
// Exemplo prático de React
function App() {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>Contador: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Aumentar</button>
            <button onClick={() => setCount(count - 1)}>Diminuir</button>
        </div>
    );
}

// Renderizar o componente App dentro da div 'root'
ReactDOM.render(<App />, document.getElementById('root'));
