import "./App.css";
import Container from "./components/Container";
import TodoList from "./components/TodoList";
import { TODO } from "./types";

const TODOS: TODO[] = [
  { id: "1", name: "shopping", done: false },
  { id: "2", name: "cleaning", done: true },
  { id: "3", name: "nap", done: false },
];

function App() {
  return (
    <div>
      <Container>
        <TodoList todos={TODOS} />
      </Container>
    </div>
  );
}

export default App;
