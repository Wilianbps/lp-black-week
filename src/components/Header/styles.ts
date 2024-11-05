import { styled } from "styled-components";


export const HeaderContainer = styled.section`
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.875rem;
    height: 4.813rem;
    background-color: #9e1617;
    font-size: 1.5rem;
    padding: 1rem 3rem;

    p {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 700;
      span {
        text-decoration: line-through;
        &.lighter-line {
          font-weight: lighter;
        }
      }
    }

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: #469743;
      color: #fff;
      padding: 10px 35px;
      border-radius: 50px;
      font-size: 1.125rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const Container = styled.section`
  height: 100%;
  padding-top: 2rem;

  .faixa-black {
    z-index: 999;
    margin-top: -14rem;
    width: 100%;
  }
`;

export const Content = styled.section`
  display: flex;
  justify-content: center;

  section {
    text-align: left;
    float: left;
    position: relative;
    left: 7rem;
    z-index: 999;
    margin-top: 4rem;
    max-width: 27rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 2rem;

    p {
      font-size: 16px;
      font-weight: 700;
      color: #fff;
      span {
        &.lighter-line {
          font-weight: lighter;
        }
      }
    }

    a {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: #4fb74c;
      color: #fff;
      padding: 20px 35px;
      width: 100%;
      border-radius: 50px;
      font-size: 1rem;
      font-weight: 700;
      cursor: pointer;
    }

    image {
      z-index: -1;
      position: absolute;
    }
  }
`;

export const Fotter = styled.footer`

`;
