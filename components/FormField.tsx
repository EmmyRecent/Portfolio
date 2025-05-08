"use client";

import { handleFormSubmit, State } from "@/lib/actions";
import * as motion from "motion/react-client";
import { useActionState, useEffect, useState } from "react";
import InputField from "./InputField";

const FormField = () => {
  // TODO: When for is submitting, also submit the time stamp of when the message was sent
  const initialState: State = { message: null, errors: {} };
  const [message, formAction, isPending] = useActionState(
    handleFormSubmit,
    initialState,
  );
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // A function to track the value of an inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setInputValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  // show error message for 3secs when there are any errors
  useEffect(() => {
    if (message?.message && Object.keys(message.errors ?? {}).length === 0) {
      setShowSuccessMessage(true);

      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    if (message && Object.keys(message.errors ?? {}).length === 0) {
      setInputValue({
        fullname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  }, [message]);

  return (
    <form className="flex py-6 flex-col gap-4" action={formAction}>
      <div className="flex flex-col md:flex-row gap-4">
        <InputField
          type="text"
          name="fullname"
          value={inputValue.fullname}
          change={handleChange}
          placeholder="Full name"
          error={message.errors?.fullName?.[0]}
        />
        <InputField
          type="email"
          name="email"
          value={inputValue.email}
          change={handleChange}
          placeholder="Email"
          error={message.errors?.email?.[0]}
        />
      </div>

      <InputField
        type="phone"
        name="phone"
        value={inputValue.phone}
        change={handleChange}
        placeholder="Phone"
        error={message.errors?.phone?.[0]}
      />

      <div className="flex-1">
        <select
          name="services"
          id="servicesOffered"
          defaultValue=""
          className="w-full border border-secondaryColor rounded-round p-4 text-white outline-none"
        >
          <option value="" disabled>
            What kind of services are you looking for?
          </option>
          <option value="web">Web Development</option>
          <option value="mobile">Mobile App Development</option>
          <option value="design">UI/UX Design</option>
        </select>

        <span className="text-red-400 text-xs mt-4">
          {message.errors?.services?.[0]}
        </span>
      </div>

      <div>
        <textarea
          name="message"
          value={inputValue.message}
          onChange={handleChange}
          id="message"
          rows={4}
          placeholder="Please specify your needs in a few words"
          className="border w-full border-secondaryColor p-4 text-white outline-none rounded-round placeholder:text-textColor placeholder:text-md"
        ></textarea>
        <span className="text-red-400 text-xs mt-4">
          {message.errors?.message?.[0]}
        </span>
      </div>

      <motion.button
        aria-disabled={isPending}
        whileTap={{
          scale: 0.8,
        }}
        type="submit"
        className="button text-secondaryColor mx-auto bg-transparent border-secondaryColor border font-medium rounded-round text-md h-auto px-7 py-4"
      >
        <span>Send Message</span>
      </motion.button>

      {showSuccessMessage && (
        <p className="text-green-600 text-sm mt-4">{message.message}</p>
      )}
    </form>
  );
};

export default FormField;
