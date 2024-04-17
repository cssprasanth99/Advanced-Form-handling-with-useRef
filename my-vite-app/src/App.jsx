import { useRef, useEffect } from "react";
import "./App.css";

function App() {
  const inputRefs = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value.length > 6) {
      console.log("success");
      alert("Submission is Success");
    } else {
      console.log("Unsuccess");
      alert("Submission is unsuccessful");
    }
  };

  useEffect(() => {
    inputRefs.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            ref={inputRefs}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={password}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
