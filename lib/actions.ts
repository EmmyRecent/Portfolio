"use server";

import { z } from "zod";

const FormSchema = z.object({
  fullName: z
    .string({
      required_error: "Full name is required!",
      invalid_type_error: "Name must be a string",
    })
    .trim()
    .min(1, "Full name cannot be empty!"),
  email: z
    .string({
      required_error: "Email is required!",
      invalid_type_error: "Please enter a valid email address!",
    })
    .trim()
    .email(),
  phone: z
    .string({
      required_error: "Phone is required!",
      invalid_type_error: "phone must be a string!",
    })
    .min(1, "Phone cannot be empty!")
    .trim()
    .regex(/^\+?[0-9]{7,15}$/, "Please enter a valid phone number"),
  services: z
    .string({
      required_error: "Please choose a service!",
      invalid_type_error: "Please choose a service!",
    })
    .trim()
    .min(1, "Service must be selected"),
  message: z
    .string({
      required_error: "Message is required!",
      invalid_type_error: "Message must be a string!",
    })
    .trim()
    .min(1, "Message cannot be empty!"),
});

export type State = {
  errors?: {
    fullName?: string[];
    email?: string[];
    phone?: string[];
    services?: string[];
    message?: string[];
  };
  message?: string | null;
};

// Handle form submit.
export async function handleFormSubmit(prevState: State, formData: FormData) {
  const parsed = FormSchema.safeParse({
    fullName: formData.get("fullname"),
    email: formData.get("email"),
    phone: formData.get("phone") as string,
    services: formData.get("services"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      errors: parsed.error.flatten().fieldErrors,
      message: "Missing fields, failed to submit form",
    };
  }

  const { fullName, email, phone, services, message } = parsed.data;

  const formDataToSend = new URLSearchParams({
    Name: fullName,
    Email: email,
    Phone: phone,
    Services: services,
    Message: message,
  });

  const URL =
    "https://script.google.com/macros/s/AKfycbz-xRJJG5bKm8yL1y0oNeoyzoXMX_Yer8GJIAZJn3rpQaNO4ATGDj7Hydz7Zd6GaxI9/exec";

  try {
    // Send data to google sheet database
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formDataToSend.toString(),
    });

    if (response.ok) {
      return {
        errors: {},
        message:
          "Thank you for your message! I will get back as soon as i receive this message",
      };
    }

    return {
      errors: {},
      message: "Failed to submit form. Please try again later.",
    };
  } catch (error) {
    console.error("Error submitting form to Google Sheet", error);
    return {
      errors: {},
      message: "Something went wrong. Please try again.",
    };
  }
}
