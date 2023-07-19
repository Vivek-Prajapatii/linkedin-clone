import { styled } from "styled-components";

const Posts = () => {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" />
          <button>Start a post</button>
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
            <span>Write article</span>
          </button>
        </div>
      </ShareBox>
      <div>
        <Article>
          <SharedActor>
            <a>
              <img src="/images/user.svg" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <img src="/images/ellipsis.svg" />
            </button>
          </SharedActor>
          <Description>
            Scarlet Witch (Wanda Maximoff) is a character appearing in American
            comic books published by Marvel Comics. Created by writer Stan Lee
            and artist Jack Kirby.
          </Description>
          <SharedImg>
            <a>
              <img src="/images/wanda.jpg" />
            </a>
          </SharedImg>
          <SocialCounts>
            <li>
              <button>
                <img src="/images/like.png" />
                <img src="/images/clap.png" />
              </button>
              <span>Ankur and 13 others</span>
              <span>6 comments</span>
            </li>
          </SocialCounts>
          <ReactionBar>
            <button>
              <img src="/images/like-icon.png" />
              <span>Like</span>
            </button>
            <button>
              <img src="/images/comment.png" />
              <span>Comment</span>
            </button>
            <button>
              <img src="/images/repost.png" />
              <span>Repost</span>
            </button>
            <button>
              <img src="/images/send.png" />
              <span>Send</span>
            </button>
          </ReactionBar>
        </Article>
      </div>
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
    /* width: 90%; */
    button {
      outline: none;
      color: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      line-height: 1.5;
      min-height: 48px;
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      font-weight: 600;
    }

    img {
      width: 22px;
      margin-right: 5px;
    }

    &:first-child {
      display: flex;
      align-items: center;
      padding: 8px 16px 0px 16px;

      img {
        width: 48px;
        border-radius: 50%;
        margin-right: 8px;
      }

      button {
        margin: 4px 0;
        flex-grow: 1;
        border-radius: 35px;
        padding-left: 16px;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 35px;
        background-color: white;
        text-align: left;
      }
    }

    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding-bottom: 4px;

      button {
        img {
          margin: 0 px 0 -2px;
        }
        span {
          /* color: #70b5f9; */
        }
      }
    }
  }
`;

const Article = styled(CommonCard)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
`;

const SharedActor = styled.div`
  padding-right: 40px;
  flex-wrap: nowrap;
  padding: 12px 16px 0;
  margin-bottom: 8px;
  align-items: center;
  display: flex;

  a {
    margin-right: 12px;
    flex-grow: 1;
    overflow: hidden;
    display: flex;
    text-decoration: none;

    img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      flex-basis: 0;
      margin-left: 8px;
      overflow: hidden;

      span {
        text-align: left;

        &:first-child {
          font-size: 14px;
          font-weight: 700;
          padding-top: 3px;
          color: rgba(0, 0, 0, 1);
        }

        &:nth-child(n + 1) {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }

  button {
    position: absolute;
    right: 12px;
    top: 10px;
    background: transparent;
    border: none;
    outline: none;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const Description = styled.div`
  padding: 0 16px;
  overflow: hidden;
  color: rgba(0, 0, 0, 0.9);
  font-size: 14px;
  text-align: left;
`;

const SharedImg = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;

  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

const SocialCounts = styled.div`
  border-bottom: 1px solid grey;

  li {
    text-decoration: none;
    text-align: left;
    list-style: none;
    align-items: center;

    button {
      border: none;

      img {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: lightgreen;

        &:first-child {
          background-color: lightblue;
        }

        &:nth-child(2) {
          position: absolute;
          left: 15px;
          z-index: 1;
        }
      }
    }

    span {
      font-size: 11px;
      position: absolute;
      align-items: center;
      margin-top: 2px;

      &:nth-child(2) {
        left: 40px;
      }

      &:nth-child(3) {
        position: absolute;
        right: 10px;
      }
    }
  }
`;

const ReactionBar = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    border: none;
    background-color: white;
    padding: 0px 10px;
    margin: 8px 10px;
    display: inline-flex;
    align-items: center;

    img {
      max-width: 25px;
      max-height: 25px;
    }

    span {
      padding-left: 3px;
    }
  }
`;

export default Posts;
