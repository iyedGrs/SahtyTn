/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/user/authActions";
import { inputFields } from "../../data/NavBarUser";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { userInfo, error } = useSelector((state) => state.auth);
  const { register, handleSubmit } = useForm();
  const handleLogin = async (data) => {
    try {
      const resultAction = await dispatch(loginUser(data)).unwrap();
      navigate("/dashboard");
    } catch (err) {
      alert("login Failed" + err);
    }
  };
  useEffect(() => {
    if (userInfo) {
      console.log("user info", userInfo);
      // navigate("/dashboard");
    }
  }, [userInfo]);
  return (
    <div className="h-[100vh]   w-full max-w-[1200px] m-auto  md:h-full font-Josefin flex items-center justify-center overflow-hidden  ">
      <div className="w-full border-2   h-full mb-10 bg-white rounded-lg md:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] flex  justify-center ">
        {/* Left Side: Form */}
        <div className="md:w-3/5 p-6 md:p-12 flex flex-col justify-center ">
          <div className="mb-8 ">
            <img
              src="/logo.png"
              alt="Workflow"
              className="h-14 w-auto mb-4 mx-auto"
            />
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Sign in to your account
            </h2>
            <div className="flex flex-col items-center justify-center">
              <p className="mt-2 text-sm text-gray-600 text-center ">
                Not a member?{" "}
              </p>{" "}
              <Link
                to="/register"
                className=" text-sm text-indigo-600 hover:text-indigo-500"
              >
                Sign In
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-6 flex items-center justify-center flex-col"
          >
            <div className="space-y-4">
              {inputFields.map((field) => (
                <div key={field.id} className="">
                  <label htmlFor={field.id} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    {...register(field.name)}
                    className="appearance-none rounded-md  block w-full px-4 md:px-8 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center flex-col gap-y-2 justify-between">
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
          className="hidden md:block md:w-2/3 md:p-12 pl-5 pt-2 pr-3 pb-2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
