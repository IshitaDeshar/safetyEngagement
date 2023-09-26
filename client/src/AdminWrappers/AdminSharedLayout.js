import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr;
    /* background-color: #e5ebe8; */
    /* background-color: #ebf4ef; */
    /* background-color: #e5ebe8; */
    background-color: #eff4f1;
    /* height: 100rem; */
  }

  .dashboard-page {
    height: 140vh;
    width: 90vw;
    margin: 2rem auto;
    padding: 4rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
      min-height: 100%;
      /* height: 100%; */
      /* height: 100%; */
      /* height: ; */
    }

    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
