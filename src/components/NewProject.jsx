import { useRef } from "react";
import Input from "./Input";
import Dialog from "./Dialog";

export default function NewProject({ onAdd, onCancel }) {
  let titleRef = useRef();
  let descriptionRef = useRef();
  let dueDateRef = useRef();
  let dialogRef = useRef();
  function handleSave() {
    let title = titleRef.current.value;
    let description = descriptionRef.current.value;
    let dueDate = dueDateRef.current.value;
    if (title === "" || description === "" || dueDate === "") {
      dialogRef.current.open();
      return;
    }
    onAdd({ title, description, dueDate });
  }
  return (
    <>
      <Dialog ref={dialogRef} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... Looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">please enter all the values</p>
      </Dialog>
      <div className="mt-16 w-[35rem]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={titleRef} label="Title" />
          <Input ref={descriptionRef} label="Description" textarea />
          <Input type="date" ref={dueDateRef} label="Due Date" />
        </div>
      </div>
    </>
  );
}
