import NewTask from "./NewTask";

export default function Tasks({
  tasks,
  onAddTask,
  onDeleteTask,
  selectedProjectId,
}) {
  let filteredTasks = tasks.filter(
    (task) => task.projectId === selectedProjectId
  );
  return (
    <section>
      <h2 className="text-2l font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {!filteredTasks.length && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {filteredTasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {filteredTasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
