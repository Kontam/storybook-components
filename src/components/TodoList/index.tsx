import { useState } from "react";
import { TODO } from "../../types";
import TodoItem from "../TodoItem";
import styles from "./TodoList.module.css";

type Props = {
  todos: TODO[];
};

export const TodoList: React.FC<Props> = (props: Props) => {
  const [todos, setTodos] = useState<TODO[]>(props.todos);

  // TODOに完了チェックを入れる
  const handleChange = (id: string) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    setTodos(nextTodos);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>TodoList</h2>
      <ul>
        {todos.map((item) => (
          <li key={item.id} className={styles.item}>
            <TodoItem todo={item} handleChange={handleChange} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
