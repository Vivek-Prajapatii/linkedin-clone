import { styled } from "styled-components";

const LinkedinNews = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>LinkedIn News</h2>
          <img src="/images/feed-icon.svg" />
        </Title>
        <FeedList>
          <li>
            <div>
              <span>
                <h5>Sugar substitutes in the spotlight</h5>
              </span>
              <span>2h ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>
                <h5>Sugar substitutes in the spotlight</h5>
              </span>
              <span>3d ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>
                <h5>Sugar substitutes in the spotlight</h5>
              </span>
              <span>6g ago</span>
            </div>
          </li>
          <li>
            <div>
              <span>
                <h5>Sugar substitutes in the spotlight</h5>
              </span>
              <span>2 mins</span>
            </div>
          </li>
          <li>
            <div>
              <span>
                <h5>Sugar substitutes in the spotlight</h5>
              </span>
              <span>2 mins</span>
            </div>
          </li>
        </FeedList>
        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" />
        </Recommendation>
      </FollowCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: linkedinNews;

  @media (max-width: 875px) {
    display: none;
    /* flex-direction: column; */
    /* padding: 0 5px; */
  }
`;

const FollowCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 /15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 0.6);
`;

const FeedList = styled.ul`
  margin-top: 16px;
  li {
    /* display: flex; */
    justify-content: left;
    align-items: center;
    margin: 12px 0;
    position: relative;
    line-height: 20px;
    margin-left: 20px;
    /* padding-left: 20px; */

    span {
      display: flex;
      justify-content: left;
      font-size: 12px;
      /* font-weight: 550; */
      font-family: "sans";
    }

    /* & > div {
      display: flex;
      flex-direction: column;
    } */

    /* button {
      background-color: transparent;
      color: rgba(0, 0, 0, 0.6);
      box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.6);
      padding: 16px;
      align-items: center;
      border-radius: 15px;
      box-sizing: border-box;
      font-weight: 600;
      display: inline-flex;
      justify-content: center;
      max-height: 32px;
      max-width: 480px;
      text-align: center;
      outline: none;
    } */
  }
`;

// const Avatar = styled.div`
//   background-image: url("/images/hashtag.svg");
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   width: 48px;
//   height: 48px;
//   margin-right: 8px;
// `;

const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

// const BannerCard = styled.a`
//   img {
//     width: 100%;
//     height: 100%;
//   }
// `;

export default LinkedinNews;
