import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [successMessage, setSucceesMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // reset state status
    setSucceesMessage(false);
    setErrorMessage("");

    // sign in functionality
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucceesMessage(true);
      })
      .catch((error) => {
        console.log(error.message);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
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
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
            {successMessage && (
              <p className="text-xl font-medium text-green-500">
                user login successfully
              </p>
            )}

            {errorMessage && (
              <p className="text-xl font-medium text-red-500">{errorMessage}</p>
            )}
            <div>
              <p className="text-xl font-medium text-center">
                New to this website Please
                <span className="btn btn-sm btn-info ml-3">
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
