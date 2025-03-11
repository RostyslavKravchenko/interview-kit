import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Interview Kit</h1>
      </header>
      <section className="main">
        <input type="text" onChange={() => console.log(1)} placeholder='text' />
      </section>
    </div>
  );
}

export default App;
