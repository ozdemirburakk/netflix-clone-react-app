import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { user, logIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
        navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen">
      <img
        className="absolute hidden object-cover w-full h-full sm:block"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/8521927a-abf7-498a-9bda-de3c0ac9e526/TR-tr-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className="fixed top-0 left-0 w-full h-screen bg-black/60"></div>
      <div className="fixed z-50 w-full px-4 py-24">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign In</h1>
            {error ? <p className="p-3 my-2 my-3 bg-red-400">{error}</p>:null}
            <form onSubmit={handleSubmit} className="flex flex-col w-full py-4">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="p-3 my-2 bg-gray-600 rounded"
                type="email"
                placeholder="Email"
                autoComplete="email"
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="p-3 my-2 bg-gray-600 rounded"
                type="password"
                placeholder="Password"
                autoCapitalize="current-password"
              />
              <button className="py-3 my-6 font-bold bg-red-600 rounded">
                Sign In
              </button>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <p>
                  <input className="mr-2" type="checkbox" /> Remember Me
                </p>
                <p>Need Help?</p>
              </div>
              <p className="py-8">
                <span className="text-gray-600">New to Netflix?</span>{" "}
                <Link to="/signup">Sign Up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
