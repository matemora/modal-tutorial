import { Button } from "./Button";
import './styles.css';

type ToDoItemProps = {
  text: string;
  onDelete: () => void;
}

export function ToDoItem(props: ToDoItemProps) {
  return (
    <div className="to-do-item">
      <p>{props.text}</p>
      <Button variation="danger" onClick={props.onDelete}>
        Delete
      </Button>
    </div>
  );
}