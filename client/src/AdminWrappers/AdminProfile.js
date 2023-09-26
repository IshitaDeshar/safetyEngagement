import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 0.7rem;
  width: 100%;
  /* height: 150%; */
  background: white;
  padding: 3rem 2rem 4rem;

  /* display: flex; */
  h3 {
    margin-top: 2rem;
    margin-left: 6rem;
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
  .form {
    margin: 0rem;
    border-radius: 0;
    box-shadow: none;
    padding: 2rem;
    max-width: 100%;
    width: 85%;

    /* height: 150rem; */
  }

  .form-labeldash {
    margin-top: 2rem;
    margin-left: 1rem;
    display: block;
  }
  .form-control {
    margin-left: 5.5rem;
    margin-top: -1rem;
    padding: 1.5rem 2rem !important;
    box-sizing: border-box;
    display: block;
  }
  /* .form-control:focus + .form-labeldash {
    transform: translate(-2rem, -2.5rem);
    font-size: 1.6rem;
    color: var(--blue);
  } */
  .form-control:focus {
    box-shadow: none;
    /* color: white; */
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    /* box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; */
    /* color: transparent; */
  }
  textarea {
    overflow-y: hidden;
    /* resize: none; */
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0rem;
    align-self: flex-end;
    /* margin-top: 7rem; */
    /* margin-left: 7rem; */
    /* margin: 9rem 5rem; */
    .ProfileSubmitBtn {
      height: 4.5rem;
      width: 20rem;
      margin-top: 5rem;
      border: none;
      background-color: #114729;
      border-radius: 0.7rem;
      font-size: 1.5rem;
      letter-spacing: 0.2rem;
      color: white;
      margin-left: 6rem;
    }
  }
  .ProfileSubmitBtn:hover {
    background-color: #49a472;
    transition: all 0.3s ease !important;
  }
  /* .form-select {
    margin-left: 5.5rem;
    margin-top: -1rem;
    padding: 1.5rem 2rem !important;
    box-sizing: border-box;
    display: block;
  }
  .form-select:focus {
    box-shadow: none;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-left: 3.5px solid #49a472 !important;
    border: 0.3px solid rgb(191, 190, 190);
  }

  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 0rem;
    align-self: flex-end;
/
    button {
      height: 4.5rem;
      margin-top: 17rem;
      border: none;
      background-color: #114729;
      border-radius: 0.7rem;
      font-size: 1.7rem;
      letter-spacing: 0.2rem;
      color: white;
      margin-left: 10rem;
    }
  }
  .imgAttach {
    display: none;
  }
  .attachIcon {
    font-size: 6rem;
    margin: 4rem 0rem;
    color: #114729;
  }
  .attachIcon:hover {
    color: #49a472;
    transition: all 0.3s ease !important;
  }
  .attachLabel {
    margin: 2.5rem 1rem !important;
  }
  .uploadbtn {
    width: 10rem;
    height: 4rem;
    margin: 3rem 3rem;
    border-radius: 1rem;
    letter-spacing: 0.2rem;
    color: #114729;
    border: 2px solid #114729;
  }
  .uploadbtn:hover {
    background-color: #114729;
    color: white;
    transition: all 0.3s ease !important;
  }
  .reportSubmitBtn:hover {
    background-color: #49a472;
    transition: all 0.3s ease !important;
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  } */
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
    .imgArea {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;

export default Wrapper;
