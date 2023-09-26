import styled from "styled-components";

const Wrapper = styled.article`
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  border-left: 5px solid ${(props) => props.color};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .countStats {
    display: block;
    font-weight: 700;
    font-size: 50px;
    margin: 0rem 3rem;
    color: ${(props) => props.color};
  }
  .titleStats {
    margin: 0rem 2rem;
    text-transform: capitalize;
    letter-spacing: 0.2rem;
    text-align: left;
    margin-top: 4rem;
    font-size: 1.8rem;
    font-weight: 600;
    color: #b5b5b5;
    text-transform: capitalize !important;
  }
  .iconStats {
    width: 80px;
    height: 80px;
    background: ${(props) => props.bcg};
    border-radius: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4.5rem;
    margin-top: -1rem;
    margin-right: 2rem;
    color: ${(props) => props.color};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    svg {
      font-size: 6rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
