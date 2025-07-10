/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../index.css";
import axios from "axios";

interface ContactFormData {
  email: string;
  subject: string;
  message: string;
  access_key?: string;
}

const Contact: React.FC = () => {
  const { setValue, register, handleSubmit, reset } = useForm<ContactFormData>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleContactForm = async (data: ContactFormData): Promise<void> => {
    const access_key = "52f8b65a-bde1-41ea-911e-0f4164c64132";
    setValue("access_key", access_key);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.web3forms.com/submit",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success("Message sent successfully!", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
        });
        reset();
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "custom-toast",
          bodyClassName: "custom-toast-body",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred. Please try again.", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "custom-toast",
        bodyClassName: "custom-toast-body",
      });
    } finally {
      setLoading(false);
    }
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
              <button
                className="bg-[#0C5D69] hover:bg-primary-800 py-3 px-5 text-sm font-medium text-center text-white rounded-lg"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
