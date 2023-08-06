import { styled } from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a>
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active ">
              <a>
                <img src="/images/nav-home.svg" />
                <span>Home</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-network.svg" />
                <span>My Network</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" />
                <span>Jobs</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" />
                <span>Messaging</span>
              </a>
            </NavList>
            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" />
                <span>
                  Me
                  <img src="/images/down-icon.svg" />
                </span>
              </a>

              <SignOut>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work>
              <a>
                <img src="/images/nav-work.svg" />
                <span>
                  For Business
                  <img src="/images/down-icon.svg" />
                </span>
              </a>
              <a>
                <span>Try Premium for free</span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 2px 2px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1000px;
`;

const Logo = styled.span`
  margin-right: 8px;
  font-size: 0px;
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  max-width: 300px;

  & > div {
    max-width: 280px;
    display: flex;
    input {
      border: none;
      box-sizing: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 15vw;
      padding: 0 8px 0 40px;
      color: rgba(0, 0, 0, 0.9);
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }

  @media (max-width: 768px) {
    & > div {
      input {
        width: 50vw;
      }
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  border-radius: 0 2px 2px 0;
  align-items: center;
`;

const Nav = styled.div`
  margin-left: auto;

  @media (max-width: 920px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style-type: none;

  .active {
    span:after {
      content: "";
      transform: scale(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transfprm 0.2s ease-in-out;
      width: 100%;
      border-color: rgba(0, 0, 0, 0.9);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-family: "sans";
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

const SignOut = styled.div`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const Work = styled.div`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
  padding-left: 10px;
  display: inline-flex;
  align-items: center;
  width: fit-content;

  a {
    display: flex;
    flex-direction: column;
    font-size: 10px;
    font-family: "sans";
    color: rgba(0, 0, 0, 0.6);
    padding-left: 5px;
    justify-content: center;
    align-items: center;
    width: 80px;

    img {
      width: 25px;
      height: 25px;
    }

    :last-child {
      img {
        width: 10px;
        height: 10px;
      }
    }

        &:last-child {
      text-decoration: underline;
      color: goldenrod;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.9);
    }
  }
`;

export default Header;
