import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 0.5px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: #114729;
      min-height: 100vh;
      height: 100%;
      width: 260px;
      margin-left: -250px;
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0rem;
    }
    .show-sidebar {
      margin-left: 0rem;
    }
    .bigsideheader {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: -1.5rem;
      background-color: #114729;
    }
    .nav-links {
      padding-top: 40rem;
      /* margin-right: 8rem; */
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #e5ebe8;
      margin: 2.5rem -19rem;
      text-transform: capitalize;
      transition: var(--transition);
      width: 30rem;
      font-size: 1.6rem;
      letter-spacing: 0.2rem;
      transition: 0.3s ease-in-out all;
    }
    .nav-link:hover {
      color: #e5ebe8;
      padding-left: 1.5rem;
      width: 25rem;
    }
    .nav-link:hover .icondash {
      color: #49a472;
    }
    .icondash {
      font-size: 3rem;
      margin-right: 2rem;
      display: grid;
      place-items: center;
      transition: var(--transition);
    }
    .activedash {
      color: #e5ebe8;
    }
    .activedash .icondash {
      color: #49a472;
    }
    .bigsidebarimg {
      /* display: flex; */
      align-items: center;
      width: 190px;
      /* margin: 0rem 2rem; */
      margin-top: 3rem;
      /* margin: 5rem; */
      margin-left: 3.5rem;
    }
  }
`;
export default Wrapper;
