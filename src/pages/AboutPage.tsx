import Wrapper from "../assets/wrappers/AboutPage";
import PageHero from "../components/PageHero";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk" />
        <article>
          <div className="title">
            <h2>Our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            deleniti quo porro? Corrupti debitis consequuntur provident quas
            reprehenderit consectetur incidunt mollitia dolorum. Dolores
            expedita quidem adipisci beatae! Ut ea explicabo deleniti, atque
            necessitatibus in assumenda iste, esse, asperiores maiores aperiam!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
