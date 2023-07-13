import { styled } from "styled-components";

const Posts = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button>Sahre a post</button>
        </div>
        <div>
          <button>
            <img src="/images/photo.svg" />
            <span>Photo</span>
          </button>
          <button>
            <img src="/images/video-icon.svg" />
            <span>Video</span>
          </button>
          <button>
            <img src="/images/event-icon.svg" />
            <span>Event</span>
          </button>
          <button>
            <img src="/images/article-icon.svg" />
            <span>Article</span>
          </button>
        </div>
      </ShareBox>
    </Container>
  );
};

const Container = styled.div``;

const CommonCard = styled.div`
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;

const ShareBox = styled(CommonCard)`
  display: flex;
  flex-direction: column;
  color: #958b7b;
  margin: 0 0 8px;
  background: white;

  div {
    button {
        outline: none;
        color: rgba(0,0,0,0.6);
        line-height: 1.5;
        min-height: 48px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        font-weight: 600;
    }

  }
`;

export default Posts;
