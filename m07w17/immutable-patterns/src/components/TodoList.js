import { useState } from 'react';

function TodoList(props) {
  const [listItems, setListItems] = useState(['learn js', 'learn react']);

  const renderedList = listItems.map((item, idx) => <li key={idx}>{item}</li>);

  const handleAddTodoItem = (e) => {
    e.preventDefault();

    const newTodoInputVal = e.target.todoContent.value;

    // bad
    // listItems.push(newTodoInputVal)

    // good
    setListItems((prevListItems) => [...prevListItems, newTodoInputVal]);

    e.target.reset();
  };

  return (
    <div>
      <h2>This is my todo list!</h2>
      <form onSubmit={handleAddTodoItem}>
        <input type="text" name="todoContent" />
        <button>Create todo!</button>
      </form>
      <ul>{renderedList}</ul>
    </div>
  );
}

export default TodoList;
