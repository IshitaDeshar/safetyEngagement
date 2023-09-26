import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 0.7rem;
  width: 100%;
  /* height: 150%; */
  background: white;
  padding: 3rem 2rem 4rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;

  .createBtn {
    /* text-align: right; */
    float: right;
    width: 20rem;
    height: 4rem;
    background-color: #114729;
    color: white;
    font-size: 1.5rem;
    letter-spacing: 0.2rem;
    border-radius: 0.5rem;
    border: none;
    margin-bottom: 3rem;
  }
  h3 {
    margin-top: 2rem;
    margin-left: 1rem;
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
  .createBtn:hover {
    background-color: #49a472;
    transition: 0.3s ease-out;
  }
  .btnUpdate {
    width: 3rem;
    height: 2.5rem;
    border-radius: 0.5rem;

    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    color: #c6c4c4;
    /* color: red; */
  }
  .btnUpdate:hover {
    color: red;
  }
  .btnDelete {
    width: 4rem;
    height: 2.5rem;
    border-radius: 0.5rem;
    /* margin-left: 2rem; */
    /* margin-top: 2.5rem; */
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    color: #c6c4c4;
    /* color: green; */
  }
  .btnDelete:hover {
    color: green;
  }
  .tableHeading {
    font-size: 1.3rem;
    color: #59665f;
    letter-spacing: 0.1rem;
  }
  .tablebody {
    color: gray;
    font-size: 1.2rem;
    padding: 1.5rem;
  }
`;

export default Wrapper;
