import Wrapper from "../assets/wrappers/Services";
import { services } from "../utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom furniture <br />
            built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            voluptas minus dignissimos doloribus ullam dicta earum vel vitae
            officiis laboriosam.
          </p>
        </article>
        <div className="services-center">
          {services.map(({ id, icon, title, text }) => {
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
