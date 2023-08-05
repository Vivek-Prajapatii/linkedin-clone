import { styled } from "styled-components";

const LinkedinNews = () => {
  return (
    <Container>
      <News>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>
        <FeedList>
          <a>
            <li>
              <div>
                <span>
                  <h5>Sugar substitutes in the spotlight</h5>
                </span>
                <span>2h ago</span>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div>
                <span>
                  <h5>Hiring drops at IT giants</h5>
                </span>
                <span>3d ago</span>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div>
                <span>
                  <h5>Credit card defaults on rise</h5>
                </span>
                <span>6h ago</span>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div>
                <span>
                  <h5>prioritising employee well-being</h5>
                </span>
                <span>7w ago</span>
              </div>
            </li>
          </a>
          <a>
            <li>
              <div>
                <span>
                  <h5>Fidelity International to hire 800</h5>
                </span>
                <span>2m ago</span>
              </div>
            </li>
          </a>
        </FeedList>
        <ShowMore>
          <button>Show more</button>
        </ShowMore>
      </News>
      <QuickLinks>
        <div>
          <Links>
            <a>
              <span>About</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Accessibilty</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Help center</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Privacy & Terms</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Ad choices</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Advertising</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Business Services</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>Get the LinkedIn app</span>
            </a>
          </Links>
          <Links>
            <a>
              <span>More</span>
            </a>
          </Links>
        </div>
      </QuickLinks>
    </Container>
  );
};

const Container = styled.div`
  grid-area: linkedinNews;
  width: 290px;
  @media (max-width: 875px) {
    display: none;
    /* flex-direction: column; */
    /* padding: 0 5px; */
  }
`;

const News = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px 0px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 90%;
  color: rgba(0, 0, 0, 0.6);
  padding: 0px 12px;
  font-family: "sans";
`;

const FeedList = styled.ul`
  margin-top: 16px;
  padding: 0px;

  a {
    display: flex;
    padding-left: 15px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    & > li {
      justify-content: left;
      align-items: center;
      margin: 5px 0;
      position: relative;
      margin-left: 20px;
      padding: 0px 10px;

      div {
        span {
          display: flex;
          justify-content: left;
          font-family: "sans";
          font-size: 11px;
          color: grey;
          line-height: 17px;

          :first-child {
            color: #424744;
            font-size: 12px;
          }
        }
      }
    }
  }
`;

const ShowMore = styled.a`
  display: flex;
  padding-left: 30px;
  padding-top: 10px;

  & > button {
    height: 25px;
    width: 100px;
    font-size: 13px;
    font-family: "sans";
    font-weight: 550;
    background-color: white;
    color: rgba(0, 0, 0, 0.6);
    border-radius: 4px;
    border: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
  }
`;

const QuickLinks = styled.div`
  border: none;
  background-color: rgba(0, 0, 0, 0.001);
  box-shadow: 0 0 0 0;
  padding: 15px 20px;

  div {
    display: flexbox;
    text-align: center;
    font-size: 10px;
    font-family: "sans";
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
  }
`;

const Links = styled.a`
  & > a {
    padding: 05px 13px;
    line-height: 20px;

    &:hover {
      span {
        color: blue;
        text-decoration: underline;
      }
    }
  }
`;

export default LinkedinNews;
