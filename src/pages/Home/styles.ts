import { styled } from "styled-components";
import backgroundImage from "../../assets/bg_incendio_roma.png";

export const HomeContainer = styled.section`
  height: 100%;
  background-color: #000;
`;

export const Notice = styled.section`
  padding-top: 4.625rem;
  padding-bottom: 4.625rem;
  padding-left: 2.188rem;
  padding-right: 2.188rem;
  margin: 0 auto;
  max-width: 42rem;
  width: 100%;
  color: #fff;

  section {
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
    div {
      margin: 0 auto;
      p {
        padding: 5px 5px 7px 5px;
        font-weight: 600;
        text-align: center;
        background-color: #9e1617;
        font-size: 1.3rem;
      }
    }
    a {
      margin: 0 auto;
      text-decoration: none;
      width: 430px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #469743;
      color: #fff;
      padding: 15px 15px;
      border-radius: 50px;
      font-size: 1.125rem;
      font-weight: 700;
      cursor: pointer;
    }
  }
`;

export const TextInfo = styled.section`
  text-align: center;
  padding: 7rem 3rem;

  display: flex;
  flex-direction: column;

  background-image: url(${backgroundImage}); /* Adiciona a imagem de fundo */
  background-size: cover; /* Faz com que a imagem cubra todo o container */
  background-position: center; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Evita que a imagem se repita */

  h3 {
    margin: 0 auto;
    color: #d80e0f;
  }
  .text {
    max-width: 48rem;
    margin: 0 auto;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.625rem;
    p {
      color: #fff;
      text-align: left;
    }
  }

  a {
    margin: 0 auto;
    margin-top: 3.313rem;
    text-decoration: none;
    width: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #469743;
    color: #fff;
    padding: 15px 15px;
    border-radius: 50px;
    font-size: 1.125rem;
    font-weight: 700;
    cursor: pointer;
  }
`;

export const CardContainer = styled.section`
  padding: 7rem 3rem;
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2.688rem;

    img {
      width: 209px;
    }

    h3 {
      color: #fff;
      font-size: 2.25rem;
    }
  }

  section.cards{
    margin-top: 4.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 3rem;

    ul {
      margin-left: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;

      li{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.7rem;
        font-size: 12px;

        span.bold{
          font-weight: bold;
        }
      }
    }
  }
`;
