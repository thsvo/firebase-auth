import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password);
  };

  return (
    <div className="mx-auto w-[40%] min-w[500px] border-2 border-red-500 p-2 rounded-xl">
      <form onSubmit={handleLogin}>
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

        <div className="pt-5">
          <button className="btn btn-primary w-full ">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
