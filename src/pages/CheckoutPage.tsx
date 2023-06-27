import PageHero from "../components/PageHero";
import styled from "styled-components";

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page">
        <h1>Checkout page</h1>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div``;

export default CheckoutPage;
