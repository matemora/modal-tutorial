import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { ToDoItem } from './components/ToDoItem';

type ToDoListItem = {
  id: number;
  title: string;
}

function App() {
  const [toDoList, setToDoList] = useState<ToDoListItem[]>([]);
  const [title, setTitle] = useState('');

  function addToDo(title: string) {
    if(!title) {
      return;
    }
    setToDoList(previousToDoList => {
      return [...previousToDoList, {
        id: (new Date()).getTime(),
        title,
      }]
    });
    setTitle('');
  }

  function deleteToDo(id: number) {
    setToDoList(previousToDoList => {
      return previousToDoList.filter(toDo => toDo.id !== id);
    })
  }

  return (
    <div className="App">
      <div className="input-area">
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={() => addToDo(title)}>
          Add item
        </Button>
      </div>
      <div className="to-do-list-items">
        <p>To-do list:</p>
        {toDoList.map(toDo => (
          <ToDoItem
            key={toDo.id}
            text={toDo.title}
            onDelete={() => deleteToDo(toDo.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
