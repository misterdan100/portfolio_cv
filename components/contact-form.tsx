// Import necessary hook from react-hook-form
import { useForm } from "react-hook-form";
import React, { useState } from "react"; // Ensure React is imported
import { RefreshCcw, RefreshCw, Send } from "lucide-react";
import { handleForm } from "@/actions/handleForm";

// Define the shape of the form data
type FormData = {
  name: string;
  email: string;
  message: string;
};

// Define the ContactForm component
const ContactForm: React.FC = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [errorSendMessage, setErrorSendMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [successfulMessage, setSuccessfulMessage] = useState(false);

  // Define the submit handler (currently logs data, replace with actual submission logic)
  const onSubmit = async (data: FormData) => {
    setSendingMessage(true);
    setDisableButton(true);

    const res = await handleForm(data);

    if (!res.ok) {
      setErrorSendMessage("Please fill all the fields");
      setSendingMessage(false);
      setDisableButton(false);
      return;
    }

    setErrorSendMessage("");
    setSuccessfulMessage(true);
    setSendingMessage(false);
    setDisableButton(false);
    reset();

    setTimeout(() => {
      setSuccessfulMessage(false);
    }, 3000);
  };

  // Set a flag to easily enable/disable the form
  const isFormEnabled = true; // Change to true to enable the form

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col space-y-1.5">
        {/* Apply text color with dark mode variant */}
        <h3 className="mb-2 font-bold text-gray-900 dark:text-[#EEFBEE] text-2xl">
          Send a Message
        </h3>
        {/* Apply text color with opacity and dark mode variant */}
        <p className="text-[#122727]/80 text-md dark:text-[#EEFBEE]/80">
          {isFormEnabled
            ? "Please fill out the form below for contact."
            : "This form is currently not functional. Email me directly at aymanbdouzi@gmail.com"}
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 pt-6">
        {/* Name Input Field */}
        <div className="space-y-2">
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            // Apply themed border, background, focus ring, placeholder, and text colors with dark mode variants
            className="flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-gray-300 dark:border-[#2E6160] file:border-0 rounded-md focus-visible:outline-none focus-visible:ring-[#009963] focus-visible:ring-2 ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium text-[#122727] dark:placeholder:text-[#EEFBEE]/70 dark:text-[#EEFBEE] placeholder:text-[#122727]/70 file:text-foreground md:text-sm file:text-sm text-base disabled:cursor-not-allowed"
            placeholder="Your Name"
            disabled={!isFormEnabled}
            title={
              !isFormEnabled
                ? "This form is currently not functional. Email me directly at aymanbdouzi@gmail.com"
                : ""
            }
          />
          {errors.name && (
            <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email Input Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            // Apply themed border, background, focus ring, placeholder, and text colors with dark mode variants
            className="flex bg-background file:bg-transparent disabled:opacity-50 px-3 py-2 border border-gray-300 dark:border-[#2E6160] file:border-0 rounded-md focus-visible:outline-none focus-visible:ring-[#009963] focus-visible:ring-2 ring-offset-background focus-visible:ring-offset-2 w-full h-10 file:font-medium text-[#122727] dark:placeholder:text-[#EEFBEE]/70 dark:text-[#EEFBEE] placeholder:text-[#122727]/70 file:text-foreground md:text-sm file:text-sm text-base disabled:cursor-not-allowed"
            placeholder="Your Email"
            disabled={!isFormEnabled}
            title={
              !isFormEnabled
                ? "This form is currently not functional. Email me directly at aymanbdouzi@gmail.com"
                : ""
            }
          />
          {errors.email && (
            <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Message Textarea Field */}
        <div className="space-y-2">
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            // Apply themed border, background, focus ring, placeholder, and text colors with dark mode variants
            className="flex bg-background disabled:opacity-50 px-3 py-2 border border-gray-300 dark:border-[#2E6160] rounded-md focus-visible:outline-none focus-visible:ring-[#009963] focus-visible:ring-2 ring-offset-background focus-visible:ring-offset-2 w-full min-h-[100px] text-[#122727] dark:placeholder:text-[#EEFBEE]/70 dark:text-[#EEFBEE] placeholder:text-[#122727]/70 md:text-sm text-base disabled:cursor-not-allowed"
            placeholder="Your Message"
            disabled={!isFormEnabled}
            title={
              !isFormEnabled
                ? "This form is currently not functional. Email me directly at aymanbdouzi@gmail.com"
                : ""
            }
            style={{ height: "144px" }}
          />
          {errors.message && (
            <p className="mt-1 text-red-500 dark:text-red-400 text-sm">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button - Text color should be dark for contrast with light green button */}
        <button
          type="submit"
          className="inline-flex justify-center items-center gap-2 bg-emerald-100 hover:bg-emerald-600 dark:bg-[#4EFF85]/20 dark:hover:bg-[#009963] disabled:opacity-50 px-4 py-2 border border-emerald-300 dark:border-emerald-700 rounded-md w-full h-10 [&_svg]:size-4 font-medium text-emerald-800 hover:text-white dark:hover:text-white dark:text-emerald-100 text-sm whitespace-nowrap transition-colors cursor-pointer"
          disabled={disableButton}
          title={
            !isFormEnabled
              ? "This form is currently not functional. Email me directly at aymanbdouzi@gmail.com"
              : ""
          }
          aria-label="Send Message"
        >
          Send Message
          {sendingMessage ? (
            <RefreshCw size={24} className="animate-spin" />
          ) : (
            <Send size={24} />
          )}
        </button>

        {/* Informational Text (shown when form is disabled) */}
        {errorSendMessage && (
          // Apply text color with opacity and dark mode variant
          <p className="text-[#122727]/80 dark:text-[#EEFBEE]/80 text-sm">
            {errorSendMessage}
          </p>
        )}

        {/* Informational Text (shown when form is disabled) */}
        {successfulMessage && (
          // Apply text color with opacity and dark mode variant
          <p className="font-bold text-[#009963]/80 dark:text-[#EEFBEE]/80 text-sm text-center">
            Message sent successfully!
          </p>
        )}

        {/* Informational Text (shown when form is disabled) */}
        {!isFormEnabled && (
          // Apply text color with opacity and dark mode variant
          <p className="text-[#122727]/80 dark:text-[#EEFBEE]/80 text-sm">
            Form functionality coming soon. Please use the contact information
            provided.
          </p>
        )}
      </form>
    </>
  );
};

// Export the component for use in your Next.js application
export default ContactForm;
