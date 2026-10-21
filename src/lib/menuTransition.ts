/**
 * Animated open/close for the full-screen menu (<dialog>), using the View
 * Transitions API: on open, the current page shrinks — cropped, never
 * squashed — into the menu's centre frame while the menu slides in around
 * it; on close, the page grows back out of that frame. globals.css holds
 * the keyframes (`html.menu-opening` / `html.menu-closing`).
 *
 * The frame exists at every size (on phones it sits beside the links).
 * Without the API, or with reduced motion, the dialog simply opens/closes
 * with its CSS fade.
 */

const FRAME = "[data-menu-frame]";

/** The menu transition in flight; only it may clear the html classes. */
let running: ViewTransition | null = null;

/** CSS variables set by setFrameVars (removed after each transition). */
const VARS = ["--mf-t", "--mf-r", "--mf-bt", "--mf-l", "--mf-vh"];

/**
 * The frame's position as CSS variables: insets from the top, right and
 * left viewport edges (`--mf-t`, `--mf-r`, `--mf-l`), its bottom edge
 * measured from the top (`--mf-bt`, so a phone's moving toolbars don't
 * shift it) and the viewport height (`--mf-vh`). Also used before a
 * product link expands the frame into its page (`menu-expand` in
 * globals.css).
 */
export function setFrameVars(dialog: HTMLDialogElement) {
  const r = dialog.querySelector(FRAME)?.getBoundingClientRect();
  if (!r || r.width === 0) return;
  const root = document.documentElement;
  root.style.setProperty("--mf-t", `${r.top}px`);
  root.style.setProperty("--mf-r", `${window.innerWidth - r.right}px`);
  root.style.setProperty("--mf-bt", `${r.bottom}px`);
  root.style.setProperty("--mf-l", `${r.left}px`);
  root.style.setProperty("--mf-vh", `${window.innerHeight}px`);
}

function canAnimate() {
  return (
    typeof document.startViewTransition === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
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
    for (const name of VARS) root.style.removeProperty(name);
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
