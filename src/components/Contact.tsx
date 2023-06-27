import { useState } from "react";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/Contact";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
    toast("Your email was submitted!", { autoClose: 3000 });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Wrapper>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Cupiditate, modi deserunt? Inventore voluptas id quos, eveniet
            blanditiis sint quae fugit.
          </p>
          {!isSubmitted ? (
            <Form className="contact-form" onSubmit={onSubmit}>
              <input
                type="email"
                className="form-input"
                placeholder="enter email"
                required
              />
              <button type="submit" className="submit-btn">
                subscribe
              </button>
            </Form>
          ) : (
            <h4>Your email was submitted!</h4>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
