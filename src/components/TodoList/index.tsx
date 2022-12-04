import { useState } from "react";
import { TODO } from "../../types";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

type Props = {
  todos: TODO[];
};

export const TodoList: React.FC<Props> = (props: Props) => {
  const [todos, setTodos] = useState<TODO[]>(props.todos);

  return (
    <div className={styles.container}>
      <h2>TodoList</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <TodoItem todo={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
