import styled from "styled-components";

export const NavBarDeskTop = styled.div`
  justify-content: flex-end;

  .nav-item {
    margin: 0 8px;
  }

  .nav-link.active {
    color: red;
  }

  @media (max-width: 991px) {
    display: none;
  }
`;

export const NavBarMobile = styled.div`
  .navbar-toggler {
    &:focus {
      box-shadow: none;
    }
  }

  .dropdown-item {
    &.active {
      background-color: pink;
    }

    &:active {
      background-color: pink;
    }
  }
`;
