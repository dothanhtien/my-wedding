import styled from "styled-components";

export const NavBarWrapper = styled.nav`
  height: 60px;

  .navbar-brand {
    font-family: "Great Vibes", cursive;
    font-size: 24px;
  }
`;

export const NavBarGroup = styled.div`
  flex-grow: 1;

  &.nav-group-desktop {
    .navbar-nav {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }

    .nav-link {
      margin: 0 12px;

      .icon {
        display: none;
      }
    }
  }

  &.nav-group-mobile {
    .navbar-nav {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .nav-link {
      padding: 0;

      .label {
        font-size: 12px;
        font-weight: bold;
      }
    }
  }

  .nav-link.active {
    color: red;
  }
`;

export const NavBarPlaceHolderStyledComponent = styled.div`
  height: 60px;
`;
