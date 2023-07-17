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
  width: 100vw;
  justify-content: center;
  display: flex;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "recent posts linkedinNews";
  grid-template-columns: minmax(0, 1.5fr) minmax(0, 4fr) minmax(200px, 2fr);
  column-gap: 20px;
  row-gap: 25px;
  grid-template-rows: auto;
  margin: 15px 0;
  text-align: center;
  justify-content: center;
  text-align: center;
  max-width: 1128px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
  }
`;

export default Home;
