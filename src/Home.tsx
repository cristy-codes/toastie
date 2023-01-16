import { toastie } from "./index";

const Home = () => {
  return (
    <div>
      <button
        onClick={() =>
          toastie({
            message: "hi",

          })
        }
      >
        {" "}
        click me
      </button>
    </div>
  );
};

export default Home;
