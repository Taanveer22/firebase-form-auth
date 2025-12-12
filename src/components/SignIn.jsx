import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useRef, useState } from "react";

const SignIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSucceesMessage] = useState(false);
  const emailRef = useRef();

  const handleSignInForm = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setErrorMessage("");
    setSucceesMessage(false);

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

  const handleForgetPassword = () => {
    console.log("give me your email", emailRef.current.value);

    const email = emailRef.current.value;

    if (!email) {
      alert("please provide a valid email");
    } else {
      sendPasswordResetEmail(auth, email)
        .then(() => {
          console.log("password reset email sent");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div class="hero bg-base-200 min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Sign In now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <form
            onSubmit={handleSignInForm}
            class="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          >
            <div class="card-body">
              <fieldset class="fieldset">
                <label class="label">Email</label>
                <input
                  ref={emailRef}
                  name="email"
                  type="email"
                  class="input"
                  placeholder="Email"
                />
                <label class="label">Password</label>
                <input
                  name="password"
                  type="password"
                  class="input"
                  placeholder="Password"
                />
                <div onClick={handleForgetPassword}>
                  <a class="link link-hover">Forgot password?</a>
                </div>
                <button class="btn btn-neutral mt-4">Sign In</button>
              </fieldset>
            </div>
            {errorMessage && (
              <p className="text-lg font-medium text-red-500">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-lg font-medium text-green-500">
                Sign In Successful...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
