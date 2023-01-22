import { toastie } from "./index";

const Home = () => {
  return (
    <div>
      <button
        onClick={() =>
          toastie({
            title: "title",
            message: "hi",
            position: "top",
            positionOffset: 50,
            side: "left",
            sideOffset: 50,
          })
        }
      >
        click me
      </button>
    </div>
  );
};

export default Home;
