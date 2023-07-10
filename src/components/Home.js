import { styled } from "styled-components";
import Posts from "./Posts";
import Recent from "./Recent";
import LinkedinNews from "./LinkedinNews";

const Home = () => {
  return (
    <Container>
      <Layout>
        <Recent />
        <Posts />
        <LinkedinNews />
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "recent posts linkedinNews";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
