import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: #49a472;
    font-size: 1.5rem;
    cursor: pointer;
    float: left;
    margin: 1rem 0rem 0rem 1rem;
    background-color: #f2f2f2;
    width: 10rem;
    height: 3rem;
    border-radius: 0.5rem;

    /* text-align: left !important; */
    /* margin: 3rem; */
  }
  button:hover {
    color: darkgray;
    transition: 0.3s ease-in-out all;
  }
  h1 {
    text-align: left;
    margin: 0rem 1rem 0rem;
    margin-top: 7rem;
    font-weight: 600;
    letter-spacing: 0.3rem;
    color: #59665f;
    /* margin-bottom: 2rem; */
  }
`;

export default Wrapper;
