import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser, setUser, authInfo } = useContext(AuthContext);

  const [error, setError] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Invalid email format");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    registerUser(email, password)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error.message.split("/")[1]));
    console.log(email, password);
    setError(null);
  };

  return (
    <div className="mx-auto w-[40%] min-w[500px] border-2 border-red-500 p-2 rounded-xl">
      <form onSubmit={handleRegister}>
        <div>
          <h1>Name</h1>
          <input
            name="name"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          <div>
            <h1>Photo</h1>
          </div>
          <input
            name="photo"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <h1>Email</h1>
          {error && <div className="error text-red-700">{error}</div>}
          <input
            name="email"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <h1>Passwod</h1>
          <input
            name="password"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div>
          <h1>Confirm Password</h1>
          {error && <div className="error text-red-700">{error}</div>}
          <input
            name="confirmPassword"
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div className="pt-5">
          <button className="btn btn-primary w-full ">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
