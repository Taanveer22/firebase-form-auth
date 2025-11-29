import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset error message
    setErrorMessage("");

    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <h1 className="text-2xl text-center font-medium">Sign Up Form</h1>
      <form
        onSubmit={handleFormSubmit}
        className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
      >
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Sign Up</button>
          </fieldset>
        </div>
      </form>
      {errorMessage && (
        <p className="text-xl font-medium text-red-500">{errorMessage}</p>
      )}
    </>
  );
};

export default SignUp;
