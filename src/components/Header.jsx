export function Header(props) {
  const { todos } = props;
  const todosLength = todos.length;
  const isTextPlural = todosLength !== 1;
  const taskOrTasks = isTextPlural ? "tasks" : "task";

  return (
    <header>
      <h1 className="text-gradient">
        You have {todosLength} open {taskOrTasks}.
      </h1>
    </header>
  );
}
