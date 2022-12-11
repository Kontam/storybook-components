import { TODO } from "../../types";
import styles from "./TodoItem.module.css";

type Props = {
  todo: TODO;
  handleChange: (id: string) => void;
};

export const TodoItem: React.FC<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={props.todo.done}
          onChange={() => props.handleChange(props.todo.id)}
        />
        {props.todo.name}
      </label>
    </div>
  );
};

export default TodoItem;
