import { styled } from "styled-components";

const Recent = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhototext>Add Photo here</AddPhototext>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your newtwork</span>
            </div>
            <img src="/images/widget-icon.svg" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" />
            My items
          </span>
        </Item>
      </ArtCard>
      <CommunityCard>
        <a>
          <span>Recent</span>
          <div>
            <span>GitHub- Why What and How</span>
            <span>Google Cloud Security Summit</span>
          </div>
        </a>
        <a>
          <span>Groups</span>
          <div>
            <span>React Developers-ReactJS</span>
            <span>JavaScript</span>
            <span>See all</span>
          </div>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" />
          </span>
        </a>
        <a>
          <span>Followed hashtags</span>
        </a>
        <a>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
};

const Container = styled.div`
  grid-area: recent;
`;

const ArtCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  transition: box-shadow 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;

const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  background-position: center;
  background-size: 462px;
  height: 54px;
  margin: -12px -12px 0;
`;

const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/photo.svg");
  width: 72px;
  height: 72px;
  box-sizing: border-box;
  background-color: white;
  background-clip: content-box;
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  border: 3px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
`;

const AddPhototext = styled.div`
  color: #0a66c2;
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

const Widget = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-top: 12px;
  padding-bottom: 12px;

  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 12px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: left;

      span {
        font-size: 12px;
        line-height: 1.333;

        &:first-child {
          color: rgba(0, 0, 0, 00.6);
        }

        &:nth-child(2) {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }

  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: block;

  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);

    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

const CommunityCard = styled(ArtCard)`
  padding: 8px 0 0;
  text-align: left;
  display: flex;
  flex-direction: column;

  a {
    color: black;
    padding: 4px 12px;
    font-size: 11px;
    color: #0a66c2;
    font-weight: 550;
    line-height: 25px;
    text-decoration: none;

    &:has(div:hover) {
      padding: 4px 0px;
      text-decoration: none;

      span {
        padding: 0px 12px;
        text-decoration: none;
      }
    }

    &:hover {
      span {
        text-decoration: none;
      }
      text-decoration: underline;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    div {
      span {
        color: rgba(0, 0, 0, 0.8);
        line-height: 20px;
        font-size: 10px;
        font-weight: 550;

        &:hover {
          background-color: rgba(0, 0, 0, 0.07);
        }
      }
    }

    &:first-child {
      text-decoration: none;
      color: rgba(0, 0, 0, 1);
    }

    &:last-child {
      color: rgba(0, 0, 0, 0.6);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }
    }
  }
`;

export default Recent;
