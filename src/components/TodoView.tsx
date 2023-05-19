import Todo from "../models/Todo";

interface ITodoProps {
  todo: Todo;
}

const TodoView = ({ todo }: ITodoProps) => {
  return (
    <>
      <div>
        <p>{todo.task}</p>
      </div>
    </>
  );
};

export default TodoView;
