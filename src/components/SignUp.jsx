import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";

const SignUp = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // password validation
    if (password.length < 6) {
      setErrorMessage("password must be more than 6 characters");
      return;
    }

    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
    if (!regex.test(password)) {
      setErrorMessage("give at least one uppercase, lowercase, symbol, number");
      return;
    }

    // reset state status
    setErrorMessage("");
    setSuccessMessage(false);

    // create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage(true);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
        setSuccessMessage(false);
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

      {successMessage && (
        <p className="text-xl font-medium text-green-500">
          sign up successfully done
        </p>
      )}
    </>
  );
};

export default SignUp;
