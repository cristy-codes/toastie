import "./index.css";
type ToastieOptions = {
  message: string;
  description?: string;
  theme?: "danger" | "warning" | "success" | "info";
  position?: "top" | "bottom";
  positionOffset?: number;
  side?: "left" | "right";
  sideOffset?: number;
  timeout?: number;
  canClose?: boolean;
};

/**
 * TODO: Animation
 * TODO: Toastie container
 */
export const toastie = (opts: ToastieOptions): void => {
  const {
    description,
    theme = "info",
    message,
    timeout = 2000,
    position = "top",
    positionOffset = 0,
    side = "right",
    sideOffset = 0,
    canClose = true,
  } = opts;

  let toastieContainer =
    document.querySelector<HTMLElement>("#toastie-container");
  if (!toastieContainer) {
    toastieContainer = document.createElement("div");
    toastieContainer.id = "toastie-container";
    toastieContainer.classList.add("t-toastie-container");
    toastieContainer.classList.add(`t-position__${position}`);
    toastieContainer.classList.add(`t-side__${side}`);
    toastieContainer.style[position] = `${positionOffset}px`;
    toastieContainer.style[side] = `${sideOffset}px`;

    document.body.appendChild(toastieContainer);
  }

  const toastieDiv = document.createElement("div");

  toastieDiv.classList.add("t-toaster");
  toastieDiv.classList.add(`t-${theme}`);

  const toastieBody = document.createElement("div");
  toastieBody.classList.add("t-body");

  const toastieBodyContent = document.createElement("div");
  toastieBodyContent.classList.add("t-body__content");

  if (message) {
    const toastieMessage = document.createElement("div");
    toastieMessage.classList.add("t-message");
    toastieMessage.textContent = message;
    toastieBodyContent.appendChild(toastieMessage);
  }

  if (description) {
    const toastieDescription = document.createElement("div");
    toastieDescription.classList.add("t-description");
    toastieDescription.textContent = description;
    toastieBodyContent.appendChild(toastieDescription);
  }

  toastieBody.appendChild(toastieBodyContent);

  if (canClose) {
    const toastieClose = document.createElement("button");
    toastieClose.classList.add("t-close");
    toastieClose.addEventListener("click", () =>
      toastieContainer?.removeChild(toastieDiv)
    );
    toastieBody.appendChild(toastieClose);
  }

  toastieDiv.appendChild(toastieBody);
  toastieContainer.appendChild(toastieDiv);

  setTimeout(() => {
    document.body.removeChild(toastieDiv);
  }, timeout);
};
