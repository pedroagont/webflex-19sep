import './App.css';
import Header from './Header';
import Counter from './Counter';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <Header title="Hello from App!" />
      <Counter />
      <TodoList />
    </div>
  );
}

export default App;
