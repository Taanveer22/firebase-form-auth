import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // auth functionality
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <h1 className="text-2xl font-medium text-center">Register Form</h1>
      <form
        onSubmit={handleFormSubmit}
        className=" bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
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

        <button className="btn btn-neutral mt-4">Register</button>
      </form>
    </div>
  );
};

export default Register;
