import styled from "styled-components";

const Wrapper = styled.main`
  text-align: center;

  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
    font-size: 4rem;
    color: #114729;
  }
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    color: grey;
    font-size: 1.5rem;
  }
  a {
    color: #49a472;
    text-decoration: underline;
    text-transform: capitalize;
    font-size: 1.3rem;
  }
  a:hover {
    color: #114729;
  }
`;

export default Wrapper;
