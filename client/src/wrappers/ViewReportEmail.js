import styled from "styled-components";

const Wrapper = styled.section`
  .btnBack {
    width: 8rem;
    height: 4rem;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid #6a6262;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
  }
  .btnAssign {
    width: 24rem;
    height: 4rem;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid #6a6262;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    margin-left: 1rem;
  }
  .btnBack:hover {
    background-color: #114729;
    transition: all 0.3s ease;
    color: white;
    font-weight: 500;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .btnAssign:hover {
    /* background-color: #f2f2f2; */
    background-color: #114729;
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .btnExecute {
    width: 15rem;
    height: 4rem;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid #6a6262;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    margin-left: 1rem;
  }
  .btnExecute:hover {
    background-color: #114729;
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
  .btnEdit {
    width: 10rem;
    height: 4rem;
    background-color: transparent;
    border-radius: 1rem;
    border: 1px solid #6a6262;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    margin-left: 1rem;
  }
  .btnEdit:hover {
    background-color: #114729;
    color: white;
    font-weight: 500;
    transition: all 0.3s ease;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
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
  .profiledropD {
    border-color: transparent;
    background-color: transparent;
    color: #8d8d8d;
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
    transition: 0.3s ease-in-out all;
  }
  .show-dropdown {
    visibility: visible;
    transition: 0.3s ease-in-out all;
  }
  li {
    list-style-type: none;
    position: relative;
    padding: 0.625rem 0 0.5rem;
  }
  .card-header {
    background-color: transparent;
    /* width: 0rem; */
  }
  .ReportCard {
    margin: 4rem;
    padding: 2rem;
    background-color: #d9d9d9;
    align-items: center !important;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  img {
    width: 5rem;
    align-items: center;
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
  .AssignBtn {
    width: 40rem;
    height: 5rem;
    background-color: #114729;
    border-radius: 1rem;
    border: 1px solid #6a6262;
    font-size: 1.3rem;
    letter-spacing: 0.2rem;
    margin-left: 2rem;
    border: "none";
    color: white;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0.2rem;
    margin: 1rem 6rem;
    align-items: center;
  }
  .AssignBtn:hover {
    background-color: #49a472;
    transition: 0.3s ease-in-out all;
  }
  /* .card {
    margin: 2rem;
    padding: 2rem;
    width: 80rem;
    height: 100;
    box-shadow: 5px 5px 10px #ccc;
    align-items: center;
  } */
`;
export default Wrapper;
