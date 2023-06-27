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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo,
            rem iste! Asperiores, adipisci ipsa optio ducimus temporibus id
            quibusdam minima, nemo nostrum deserunt dolores maiores aliquid
            illum dolorum. Adipisci repellat quae magni consequuntur commodi aut
            cumque beatae eveniet eligendi modi recusandae animi, soluta quo
            nobis deserunt excepturi inventore eum quia libero pariatur!
            Laudantium autem, sapiente rerum quod et odit tempore, vero quisquam
            temporibus quis consectetur corrupti! Quibusdam repellendus maxime
            qui hic officia dolor consequatur necessitatibus earum, excepturi
            veritatis, molestias itaque totam magnam? Nobis dolore sint illum
            quaerat rerum ex numquam vitae cupiditate natus consequuntur
            blanditiis, excepturi aut iure, officia, iusto accusamus similique
            error iste accusantium. Blanditiis numquam, ea consequatur
            consectetur dolore, sapiente officiis esse velit vero aliquid ipsa
            ut labore.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

export default AboutPage;
