/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/user/authActions";
import { inputFields } from "../data/NavBarUser";

const Login = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const email = "john.doe@example.com";
    const password = "password123";
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="w-full flex mx-auto container items-center justify-center bg-gray-50 overflow-hidden">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl md:flex">
        {/* Left Side: Form */}
        <div className="md:w-2/3 p-6 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <img
              src="/logo.png"
              alt="Workflow"
              className="h-14 w-auto mb-6 mx-auto"
            />
            <h2 className="text-2xl font-bold text-gray-900 text-center md:text-left">
              Sign in to your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 text-center md:text-left">
              Not a member?{" "}
              <a href="#" className="text-indigo-600 hover:text-indigo-500">
                Start a 14 day free trial
              </a>
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-4">
              {inputFields.map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0C5D69] hover:bg-[#0a4d5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
        {/* Right Side: Image */}
        <div
          className="hidden md:block md:w-1/3 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
