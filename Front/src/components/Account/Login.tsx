import React, { useState } from "react";
import { inputFields } from "../../data/NavBarUser";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useGetCurrentUserQuery, useLoginUserMutation } from "@/store/state/api";
import AuthDebugPanel, { AuthDebugEvent } from "./AuthDebugPanel";
import { API_BASE_URL } from "../../config/api";

interface LoginFormData {
  email: string;
  password: string;
}

// interface AuthState {
//   userInfo: {
//     user: {
//       role: string;
//     };
//   } | null;
//   error: string | null;
// }

// interface RootState {
//   auth: AuthState;
// }

const extractErrorMessage = (error: unknown): string => {
  if (typeof error === "string") return error;

  if (error && typeof error === "object") {
    const err = error as {
      data?: { message?: string; error?: string } | string;
      error?: string;
      message?: string;
    };

    if (typeof err.data === "string") return err.data;
    if (err.data?.message) return err.data.message;
    if (err.data?.error) return err.data.error;
    if (err.error) return err.error;
    if (err.message) return err.message;
  }

  return "Unknown error";
};

const sanitizePayload = <T extends object>(payload: T): T => {
  const clone = { ...payload } as T & { password?: unknown };
  if (typeof clone.password === "string") clone.password = "***";
  return clone as T;
};

const withNetworkHint = (message: string, endpoint: string): string => {
  if (message.includes("Failed to fetch")) {
    return `${message}. Could not reach ${endpoint}`;
  }
  return message;
};

const Login: React.FC = () => {
  const loginEndpoint = `${API_BASE_URL}/user/auth/login`;
  const meEndpoint = `${API_BASE_URL}/user/auth/me`;
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const { refetch } = useGetCurrentUserQuery(undefined);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<LoginFormData>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [debugEvents, setDebugEvents] = useState<AuthDebugEvent[]>([]);

  const pushDebugEvent = (
    step: string,
    status: AuthDebugEvent["status"],
    payload: unknown
  ) => {
    const event: AuthDebugEvent = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      timestamp: new Date().toISOString(),
      step,
      status,
      payload,
    };
    setDebugEvents((prev) => [...prev, event]);
    console.log("[AuthDebug]", step, payload);
  };

  const handleLogin = async (data: LoginFormData) => {
    setErrorMessage(null);
    pushDebugEvent("LOGIN_REQUEST", "info", {
      endpoint: loginEndpoint,
      body: sanitizePayload(data),
    });

    try {
      const loginResponse = await loginUser(data).unwrap();
      pushDebugEvent("LOGIN_SUCCESS", "success", loginResponse);

      const user = await refetch().unwrap();
      pushDebugEvent("CURRENT_USER_SUCCESS", "success", {
        endpoint: meEndpoint,
        body: user,
      });

      if (user && user.role) {
        navigate(`/${user.role}`);
      } else {
        const msg = "User role is not defined";
        setErrorMessage(msg);
        pushDebugEvent("CURRENT_USER_ERROR", "error", { message: msg, user });
      }
    } catch (err) {
      const message = withNetworkHint(extractErrorMessage(err), loginEndpoint);
      setErrorMessage(message);
      pushDebugEvent("LOGIN_ERROR", "error", {
        endpoint: loginEndpoint,
        message,
        raw: err,
      });
    }
  };
  return (
    <div className="  w-full  max-w-[1200px] m-auto mt-10 h-[calc(100vh-150px)] font-Josefin flex items-center justify-center overflow-hidden  ">
      <div className="w-full border-2   h-full mb-10 bg-white rounded-lg md:shadow-[0px_3px_6px_rgba(0,0,0,0.16),_0px_3px_6px_rgba(0,0,0,0.23)] flex  justify-center ">
        {/* Left Side: Form */}
        <div className="  w-full md:w-1/2  lg:w-1/3 p-6 md:p-12 flex flex-col justify-center ">
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
                create an accounth-
              </Link>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="space-y-6 flex items-center justify-center flex-col"
          >
            <div className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
              Login endpoint: {loginEndpoint}
            </div>

            {errorMessage ? (
              <div className="w-full rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                Login failed: {errorMessage}
              </div>
            ) : null}

            <div className="space-y-4">
              {inputFields.map((field) => (
                <div key={field.id} className="">
                  <label htmlFor={field.id} className="sr-only">
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    autoComplete={field.autoComplete}
                    required
                    {...register(field.name as keyof LoginFormData)}
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
                disabled={isLoading}
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0C5D69] hover:bg-[#0a4d5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </button>
            </div>

            <AuthDebugPanel
              events={debugEvents}
              onClear={() => setDebugEvents([])}
            />
          </form>
        </div>
        {/* Right Side: Image */}
        <div
          className="hidden md:w-1/2 md:block lg:w-2/3 md:p-12 pl-5 pt-2 pr-3 pb-2 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hbr.org/resources/images/article_assets/2019/10/Oct19_22_1032609198.jpg')`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
