export function TodoCard(props) {
  const { todoIndex, todos } = props;
  const todo = todos[todoIndex];
  console.log(todo);
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button>Delete</button>
        <button>Done</button>
      </div>
    </div>
  );
}
