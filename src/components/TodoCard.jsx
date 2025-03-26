export function TodoCard(props) {
  const { todo, handleDeleteTodo, todoIndex, handleCompletedTodo } = props;

  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div className="todo-buttons">
        <button
          onClick={() => handleCompletedTodo(todoIndex)}
          disabled={todo.complete}
        >
          Done
        </button>
        <button onClick={() => handleDeleteTodo(todoIndex)}>Delete</button>
      </div>
    </div>
  );
}
