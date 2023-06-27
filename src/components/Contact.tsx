import { Form } from "react-router-dom";
import Wrapper from "../assets/wrappers/Contact";

const Contact = () => {
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
          <Form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </Form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
