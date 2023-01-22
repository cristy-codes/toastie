import "./index.css";
type ToastieOptions = {
  title: string;
  message: string;
  timeout?: number;
  theme?: "danger" | "warning" | "success" | "info";
  position?: "top" | "bottom";
  positionOffset?: number;
  side?: "left" | "right";
  sideOffset?: number;
};

export const toastie = (opts: ToastieOptions): void => {
  const {
    title,
    theme = "info",
    message,
    timeout = 2000,
    position = "top",
    positionOffset = 0,
    side = "right",
    sideOffset = 0,
  } = opts;

  const toastieDiv = document.createElement("div");
  const toastieTitle = document.createTextNode(message);
  toastieDiv.textContent = title;

  toastieDiv.classList.add("t-toaster");
  toastieDiv.classList.add(`t-position__${position}`);
  toastieDiv.classList.add(`t-side__${side}`);
  toastieDiv.classList.add(`t-${theme}`);
  toastieDiv.style[position] = `${positionOffset}px`;
  toastieDiv.style[side] = `${sideOffset}px`;

  document.body.appendChild(toastieDiv);
  toastieDiv.appendChild(toastieTitle);

  setTimeout(() => {
    document.body.removeChild(toastieDiv);
  }, timeout);
};
