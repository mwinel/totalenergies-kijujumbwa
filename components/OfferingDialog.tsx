"use client";
import { useEffect, useRef, type ReactNode } from "react";
import Icon from "./Icon";

/** Native modal supplies focus containment and makes the rest of the page inert. */
export default function OfferingDialog({
  id,
  title,
  trigger,
  children,
  className,
}: {
  id: string;
  title: string;
  trigger: ReactNode;
  children: ReactNode;
  className: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef("");
  const locked = useRef(false);
  function restore() {
    if (locked.current) {
      document.body.style.overflow = previousOverflow.current;
      locked.current = false;
    }
    opener.current?.focus({ preventScroll: true });
  }
  useEffect(
    () => () => {
      if (locked.current)
        document.body.style.overflow = previousOverflow.current;
    },
    [],
  );
  function open() {
    previousOverflow.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    locked.current = true;
    dialog.current?.showModal();
  }
  return (
    <>
      <button
        ref={opener}
        className={className}
        onClick={open}
        aria-haspopup="dialog"
        aria-controls={`${id}-dialog`}
      >
        {trigger}
      </button>
      <dialog
        ref={dialog}
        id={`${id}-dialog`}
        className="offering-dialog"
        aria-labelledby={`${id}-title`}
        onClose={restore}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls = event.currentTarget.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex="0"]',
          );
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last?.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first?.focus();
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              dialog.current?.close();
          }
        }}
      >
        <div className="dialog-content">
          <button
            autoFocus
            className="dialog-close"
            aria-label="Close details"
            onClick={() => dialog.current?.close()}
          >
            <Icon name="close" />
          </button>
          <span className="eyebrow">Explore the station</span>
          <h2 id={`${id}-title`}>{title}</h2>
          {children}
        </div>
      </dialog>
    </>
  );
}
