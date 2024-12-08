import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, forwardRef } from "react";
import Button from "./Button";

const Dialog = forwardRef(function Dialog({ buttonCaption, children }, ref) {
  let dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}{" "}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Dialog;
