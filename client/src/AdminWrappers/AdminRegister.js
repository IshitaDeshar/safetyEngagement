import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: 0.7rem;
  width: 100%;
  background: white;
  padding: 3rem 5rem 4rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;

  h3 {
    margin-top: 2rem;
    margin-left: 0rem;
    font-size: 3rem;
    margin-bottom: 3rem;
    font-weight: 600;
  }
  .RegisterLabel {
    margin-left: -4rem;
    /* padding: 5rem !important; */
  }
  .RegisterInput {
    /* margin-left: 5.5rem; */
    margin-top: -1rem;
    padding: 1.5rem 2rem !important;
  }
  .RegisterBtn {
    /* float: left; */
    width: 25rem;
    height: 4.5rem;
    background-color: #114729;
    color: white;
    font-size: 1.6rem;
    letter-spacing: 0.2rem;
    border-radius: 0.5rem;
    border: none;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }
  .RegisterBtn:hover {
    background-color: #49a472;
    transition: 0.3s ease-out;
  }
`;
export default Wrapper;
