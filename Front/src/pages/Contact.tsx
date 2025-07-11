/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { submitContact } from "@/features/user/contactActions";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
  access_key?: string;
}

const Contact: React.FC = () => {
  const { setValue, register, handleSubmit, reset } =
    useForm<ContactFormData>();
  const { isLoading, error, success } = useSelector(
    (state: RootState) => state.contact
  );
  // const handleLogin = async (data: LoginFormData) => {
  //   try {
  //     const resultAction = await dispatch(loginUser(data) as any).unwrap();
  //     navigate(`/${resultAction.user.role}`);
  //   } catch (err) {
  //     alert("login Failed" + err);
  //   }
  // };
  const dispatch = useDispatch();

  const handleContactForm = async (data: ContactFormData): Promise<void> => {
    try {
      await dispatch(submitContact(data) as any).unwrap();
      if (success) {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        reset();
      }
      if (error) {
        toast.error(`Error: ${error}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {}
  };

  return (
    <div className="flex h-[100vh] w-full items-center justify-center">
      <div
        id="contact"
        className=" font-Josefin overflow-hidden  flex items-center flex-col justify-center gap-6 bg-gradient-to-b p-12 pt-6 "
      >
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast-container"
        />

        <section className="w-full luckiest-guy-regular ">
          <div className="px-4 mx-auto max-w-screen-md">
            <p className="text-4xl md:text-6xl  text-center font-bold p-4 md:p-0 luckiest-guy-regular text-black ">
              GET IN TOUCH
            </p>

            <form
              onSubmit={handleSubmit(handleContactForm)}
              className="space-y-8"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2  font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email")}
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register("subject")}
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  rows={6}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>

              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-blue-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2.93 6.364A8.003 8.003 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3.93-1.574zM12 20a8.003 8.003 0 01-6.364-2.93l-3.93 1.574A11.95 11.95 0 0012 24v-4zm6.364-2.93A8.003 8.003 0 0120 12h4c0 3.042-1.135 5.824-3 7.938l-3.636-1.568zM20 12a8.003 8.003 0 01-2.93-6.364l3.636-1.568A11.95 11.95 0 0024 12h-4z"
                    ></path>
                  </svg>
                </div>
              ) : (
                <button
                  className="bg-[#0C5D69] hover:bg-primary-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg"
                  type="submit"
                >
                  Send Message
                </button>
              )}
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
