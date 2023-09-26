import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 0.5rem;
  width: 100%;
  background: white;

  padding: 3rem 4rem 4rem;

  h3 {
    margin-top: 0rem;
    margin-left: 0rem;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    font-weight: 500;
    letter-spacing: 0.3rem;
  }
  .h2By {
    font-size: 1.5rem;
    margin: -1rem 0rem;
    /* color: gray; */
    color: #59665f;
  }
  .reportbtn {
    width: 3rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    margin-left: 2rem;
    margin-top: 2.5rem;
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    color: #c6c4c4;
  }
  .reportbtn:hover {
    background-color: #f2f2f2;
    color: #49a472;
    transition: 0.3s ease-in-out all;
  }
  .RMbtn {
    float: right;
    margin-top: 2.3rem;
    border: none;
    font-size: 1rem;
    /* color: #59665f; */
    color: #c6c4c4;

    background-color: transparent;
    /* border: 1px solid #59665f; */
    width: 10rem;
    height: 2.5rem;
    border-radius: 0.5rem;
  }
  .RMbtn:hover {
    background-color: #f2f2f2;

    color: #49a472;
    transition: 0.3s ease-in-out all;
  }
  .reportBox {
    height: 8rem;
    width: 45rem;
  }
  & {
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    border: 1px solid lightgray;
    margin-top: 2rem;
  }
  .statusStyle {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    margin: -1.2rem 35.2rem;
  }
  /* .incident-type-UnsafeCondition {
    color: red;
  }

  .incident-type-UnsafeAct {
    color: blue;
  }

  .incident-type-Environmental {
    color: green;
  } */

  /* &:hover {
    background-color: #f2f2f2;
    border: 1px solid #f2f2f2;
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
