import "./index.css";
type ToastieOptions = {
  direction?: "top" | "bottom" | "right" | "left";
  message: string;
  timeout?: number;
  theme?: "danger" | "warning" | "success" | "info";
};

export const toastie = (opts: ToastieOptions): void => {
  const { direction = "top", theme = "info", message, timeout = 1500 } = opts;
  const toastieDiv = document.createElement("div");
  toastieDiv.textContent = message;
  toastieDiv.classList.add(`t-${theme}`);

  document.body.appendChild(toastieDiv);

  setTimeout(() => {
    document.body.removeChild(toastieDiv);
  }, timeout);
};
