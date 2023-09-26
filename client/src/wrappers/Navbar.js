import styled from "styled-components";

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.5px 0px 0px rgba(0, 0, 0, 0.1);
  img {
    display: flex;
    align-items: center;
    width: 140px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    /* color: var(--primary-500); */
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 3rem;
    transition: all 0.3s ease-in-out;
    color: #49a472;
  }
  .toggle-btn:hover {
    color: #8d8d8d;
  }
  background: white;
  .btn-container {
    position: relative;
  }
  .btndash {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    background: transparent;
    border-color: transparent;
    color: gray;
    border: none;
    font-size: 1.7rem;
  }
  /* .btndash:hover {
    background-color: #e8e8e8;

    width: 12rem;
    height: 4rem;
    border-radius: 1rem;
  } */
  .profiledropD {
    border-color: transparent;
    background-color: transparent;
    color: #8d8d8d;
    font-size: 1.5rem;
  }
  .dropdown {
    position: absolute;
    top: 35px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
    /* transition: 0.3s ease-in-out all; */
    overflow: hidden;
    /* opacity: 0; */
    transition: opacity 0.2s ease-in-out, transform 0.3s ease-in-out;
    transform: translateY(-10px);
  }
  .show-dropdown {
    visibility: visible;
    transition: 0.3s ease-in-out all;
    transform: translateY(0);
    display: block;
  }
  li {
    list-style-type: none;
    position: relative;
    padding: 0.625rem 0 0.5rem;
  }
  /* .dropdown-li {
    flex-direction: column;
    position: relative;
    background-color: wheat;
    align-items: flex-start;
    width: 20rem;
    height: 5rem;
    right: -3rem;
    top: 4, 5rem;
    border-radius: 0.5rem;
    gap: 0;
    padding: 1rem 0;
    margin-left: -5rem;
  } */

  .dropdown-li {
    background: white;
    border-color: transparent;
    color: gray;
    letter-spacing: 0.1rem;
    text-transform: capitalize;
    font-weight: lighter;
    font-size: 1.1rem;
    cursor: pointer;
    width: 17rem;
    height: 5rem;
    list-style-type: none;
    flex-direction: column;
    padding: 2rem 1rem;
    align-items: flex-start;
    margin-left: -2rem;
    gap: 2rem;
    border: 1px solid lightgray;
    transition: 0.3s ease-in-out all;
    /* border-radius: 1rem; */
  }
  .dropdown-li:hover {
    background-color: #f4f4f4;
    transition: 0.3s ease-in-out all;
    color: #49a472;
    /* .dropdownIcon:hover {
      color: #49a472;
    } */
  }
  .logo-text {
    display: none;
    margin: 0;
    font-size: 3rem;
  }
  .form-control {
    margin-left: 5.5rem;
    margin-top: -1rem;
    padding: 1.5rem 2rem !important;
    box-sizing: border-box;
    display: block;
    overflow-y: hidden;
    align-items: center;
  }
  .FormLabel {
    margin: "2rem";
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    img {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
