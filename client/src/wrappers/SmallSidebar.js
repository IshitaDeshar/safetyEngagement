import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .content {
    background: white;
    width: 90vw;
    height: 95vh;
    border-radius: 2rem;
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 15px;
    left: 20px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: #114729;
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    align-items: center;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: #59665f;
    padding: 1.3rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: #114729;
  }
  .nav-link:hover .icondash {
    color: #49a472;
  }
  .icondash {
    font-size: 3rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    transition: var(--transition);
  }
  .activedash {
    color: #114729;
    /* font-weight: 600; */
  }
  .activedash .icondash {
    color: #49a472;
  }
  .sideheader {
    background-color: white;
  }
  img {
    display: flex;
    align-items: center;
    width: 150px;
    margin: 0rem 4rem;
  }
`;
export default Wrapper;
