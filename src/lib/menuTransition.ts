/**
 * Animated open/close for the full-screen menu (<dialog>), using the View
 * Transitions API: on open, the current page shrinks — cropped, never
 * squashed — into the menu's centre frame while the menu slides in around
 * it; on close, the page grows back out of that frame. globals.css holds
 * the keyframes (`html.menu-opening` / `html.menu-closing`).
 *
 * Without the API, with reduced motion, or on phones (no centre frame) the
 * dialog simply opens/closes with its CSS fade.
 */

const FRAME = "[data-menu-frame]";

/** The menu transition in flight; only it may clear the html classes. */
let running: ViewTransition | null = null;

/** Inset of the centre frame from each viewport edge, as CSS variables. */
function setFrameVars(dialog: HTMLDialogElement) {
  const r = dialog.querySelector(FRAME)?.getBoundingClientRect();
  if (!r || r.width === 0) return;
  const root = document.documentElement;
  root.style.setProperty("--mf-t", `${r.top}px`);
  root.style.setProperty("--mf-r", `${window.innerWidth - r.right}px`);
  root.style.setProperty("--mf-b", `${window.innerHeight - r.bottom}px`);
  root.style.setProperty("--mf-l", `${r.left}px`);
}

function canAnimate() {
  return (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    // The centre frame only exists on large screens.
    window.matchMedia("(min-width: 1024px)").matches
  );
}

function animate(kind: "opening" | "closing", update: () => void) {
  if (!canAnimate()) {
    update();
    return;
  }
  const root = document.documentElement;
  root.classList.remove("menu-opening", "menu-closing");
  root.classList.add("menu-vt", `menu-${kind}`);
  const vt = document.startViewTransition(update);
  running = vt;
  const done = () => {
    if (running !== vt) return;
    running = null;
    root.classList.remove("menu-vt", "menu-opening", "menu-closing");
    for (const side of ["t", "r", "b", "l"]) {
      root.style.removeProperty(`--mf-${side}`);
    }
  };
  vt.finished.then(done, done);
}

export function openMenu(dialog: HTMLDialogElement | null) {
  if (!dialog || dialog.open) return;
  animate("opening", () => {
    dialog.showModal();
    setFrameVars(dialog);
  });
}

export function closeMenu(dialog: HTMLDialogElement | null) {
  if (!dialog || !dialog.open) return;
  setFrameVars(dialog);
  animate("closing", () => dialog.close());
}
