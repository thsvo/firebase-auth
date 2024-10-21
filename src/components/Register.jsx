import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    registerUser(email, password);
    console.log(email, password);
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
