import { useState, type ChangeEvent } from "react";
import PrimaryButton from "../custom_components/Buttons/PrimaryButton";
import "./Contact.scss";
import emailIcon from "../../assets/svgs/emailIcon.svg";
import InfoIcon from "../../assets/svgs/info.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
  to_email?: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    let errorMsg = "";

    if (!trimmedValue) {
      errorMsg = `${name.charAt(0).toUpperCase() + name.slice(1)} is required.`;
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(trimmedValue)) {
      errorMsg = "Invalid email format.";
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    return newErrors;
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      service_id: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      template_id: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      user_id: import.meta.env.VITE_EMAILJS_USER_ID,
      template_params: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
    };
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Origin: window.location.origin,
          },
        }
      );

      if (response.status === 200) {
        toast.success(
          "Message sent successfully! We will get back to you soon.",
          {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error: any) {
      console.error("Error:", error);
      let errorMessage = "Failed to send message. Please try again later.";
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      }
      toast.error(errorMessage, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <ToastContainer />
      <article className="contact_content_container">
        <span className="text_button">Contact</span>
        <h2 className="fs-h2">Got a problem to solve?</h2>
        <p className="p_paragraph">
          Get your space suit ready and tell us your ideas to develop{" "}
          <span>your dream web solution.</span>
        </p>
      </article>

      <form className="contact_inputs_container">
        <div className="contact_input_container">
          <label htmlFor="name">NAME</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && (
            <p className="error">
              <span>
                <img src={InfoIcon} alt="error" />
              </span>
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact_input_container">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <p className="error">
              <span>
                <img src={InfoIcon} alt="error" />
              </span>
              {errors.email}
            </p>
          )}
        </div>

        <div className="contact_input_container">
          <label htmlFor="message">MESSAGE</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && (
            <p className="error">
              <span>
                <img src={InfoIcon} alt="error" />
              </span>
              {errors.message}
            </p>
          )}
        </div>

        <div className="contact_submit_container">
          <p className="p_paragraph">
            <span>
              <img src={emailIcon} alt="email" />
            </span>
            connectme.madan@gmail.com
          </p>
          <PrimaryButton
            buttonText={isSubmitting ? "Sending..." : "Hit up us 🚀"}
            isdisabled={isSubmitting}
            onClick={(e) => handleSubmit(e)}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
