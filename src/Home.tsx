import { toastie } from "./index";

const Home = () => {
  return (
    <div>
      <button
        onClick={() =>
          toastie({
            description:
              "You are now obligated to give a star ",
            message: `we notify you that ${performance.now()}`,
            position: "bottom",
            positionOffset: 50,
            side: "right",
            sideOffset: 50,
            theme: "success",
          })
        }
      >
        click me
      </button>
    </div>
  );
};

export default Home;
