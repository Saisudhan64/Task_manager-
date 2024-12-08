import NoProjectsImage from "../assets/no-projects.png";
import Button from "./Button.jsx";

export default function NoProjectsSelected({ onProjectStart }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={NoProjectsImage}
        alt="No Task Empty Image"
        className="w-16 h-16 mx-auto object-contain"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a Project or get Stated with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onProjectStart}>Create a New Project</Button>
      </p>
    </div>
  );
}
