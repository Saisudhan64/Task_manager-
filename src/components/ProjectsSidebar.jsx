import Button from "./Button.jsx";

export default function ProjectsSideBar({
  onProjectStart,
  projects,
  onProjectSelect,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onProjectStart}>+ Add Projects</Button>
      </div>
      <ul className="mt-8">
        {projects.map((prjct) => {
          let classes =
            "text-left w-full px-2 py-1 my-1  hover:text-stone-200 hover:bg-stone-800 rounded-md";
          if (prjct.id === selectedProjectId) {
            classes += " bg-stone-800 text-stone-200";
          } else {
            classes += " text-stone-400";
          }
          return (
            <li key={prjct.id}>
              <button
                className={classes}
                onClick={() => onProjectSelect(prjct.id)}
              >
                {prjct.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
