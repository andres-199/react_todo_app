import React, { useState } from "react";
import { ToDoItem } from "./interfaces/ToDoItem.interface";
import TextInput from "../TextInput";

const ToDoList: React.FC = () => {
  const [items, setItems] = useState<ToDoItem[]>([]);

  const handleAdd = (text: string) => {
    const newItem: ToDoItem = {
      id: items.length + 1,
      text,
    };
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <TextInput onAdd={handleAdd} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
