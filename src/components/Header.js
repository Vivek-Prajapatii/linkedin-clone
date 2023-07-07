import { styled } from "styled-components";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" />
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
          <NavHome>
            <img src="/images/nav-home.svg" alt="home" />
          </NavHome>
          <NavNetwork>
            <img src="/images/nav-network.svg" alt="network" />
          </NavNetwork>
          <NavJobs>
            <img src="/images/nav-jobs.svg" alt="jobs" />
          </NavJobs>
          <NavMessaging>
            <img src="/images/nav-messaging.svg" alt="messaging" />
          </NavMessaging>
          <NavNotifications>
            <img src="/images/nav-notifications.svg" alt="notifications" />
          </NavNotifications>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  height: 45px;
  width: 100vw;
  top: 0;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
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
    input {
      border: none;
      box-sizing: none;
      background-color: #eef3f8;
      border-radius: 2px;
      width: 218px;
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
  width: fit-content;
  margin-left: 80px;
  display: flex;
`;

const NavHome = styled.div`
  text-align: left;
  /* width: fit-content; */
  margin-right: 15px;
`;

const NavNetwork = styled.div`
  text-align: left;
  /* width: fit-content; */
  margin-right: 15px;
`;

const NavJobs = styled.div`
  text-align: left;
  /* width: fit-content; */
  margin-right: 15px;
`;

const NavMessaging = styled.div`
  text-align: left;
  /* width: fit-content; */
  margin-right: 15px;
`;

const NavNotifications = styled.div`
  text-align: left;
  /* width: fit-content; */
  margin-right: 15px;
`;

export default Header;
