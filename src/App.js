import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./features/authSlice";
function App() {
  const auth = useSelector((state) => state.auth.auth);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {auth && (
        <div>
          {" "}
          <p>login please</p>
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            login
          </button>
        </div>
      )}
      {!auth && (
        <div>
          hello
          <button
            onClick={() => {
              dispatch(login());
            }}
          >
            logout
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
