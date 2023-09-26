import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 0.7rem;
  width: 100%;
  background: white;

  padding: 3rem 4rem 4rem;
  h3 {
    margin-top: 2rem;
    margin-left: 6rem;
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
    letter-spacing: 0.5rem;
  }
  .IndividualBackBtn {
    float: right;
    margin-top: -6rem;
    margin-right: 8rem;
    width: 8rem;
    height: 3rem;
    border: 1px solid gray;
    background-color: transparent;
    color: gray;
    border-radius: 0.5rem;
    font-size: 1.3rem;
    font-weight: 600;
    letter-spacing: 0.1rem;
  }
  .IndividualBackBtn:hover {
    color: #49a472;
    transition: 0.3s ease-in-out all;
  }
`;
export default Wrapper;
