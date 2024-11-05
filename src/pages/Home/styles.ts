import { styled } from "styled-components";
import backgroundImage from "../../assets/BG_incendio_em_roma.png";

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
      transition: all 0.5s ease;
    }

    a:hover {
      opacity: 0.8;
    }
  }
`;

export const TextInfo = styled.section`
  padding: 7rem 3rem;
  display: flex;
  flex-direction: column;

  background-image: url(${backgroundImage}); /* Adiciona a imagem de fundo */
  background-size: cover; /* Faz com que a imagem cubra todo o container */
  background-position: center; /* Centraliza a imagem de fundo */
  background-repeat: no-repeat; /* Evita que a imagem se repita */

  section {
    max-width: 48rem;
    margin: 0 auto;

    h3 {
      font-weight: bold;
      font-size: 30px;
      margin: 0 auto;
      color: #d80e0f;
    }

    .text {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      gap: 1.625rem;

      span.bg-red {
        padding: 0 0.5rem;
        font-size: 20px;
        font-weight: bold;
        background-color: #9e1617;
        color: #fff;
        text-align: left;
      }
      p {
        font-size: 18px;
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
      transition: all 0.5s ease;
    }

    a:hover {
      opacity: 0.8;
    }
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

  section.cards {
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

      &.small-list {
        margin-left: 2.5rem;
      }

      li {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0.7rem;
        font-size: 12px;

        span.bold {
          font-weight: bold;
        }
      }
    }
  }
`;

export const InfoPersona = styled.section`
  padding: 3rem;
  max-width: 65rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;

  section {
    margin-top: 4rem;
    header {
      h2 {
        color: #fff;
        font-weight: 800;
        font-size: 36px;
      }
    }

    section {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      p {
        color: #fff;
      }
    }
  }
`;

export const InfoDoubt = styled.section`
  margin: 0 auto;
  padding: 7rem;
  max-width: 60rem;
  color: #fff;

  h4 {
    text-align: left;
    font-size: 26px;
    font-weight: bold;
  }

  p {
    margin-top: 5.125rem;
    margin-bottom: 1.438rem;
    text-align: left;
    font-weight: bold;
  }

  span {
    display: block;
    font-size: 14px;
  }

  a {
    display: block;
    margin: 0 auto;
    margin-top: 3.875rem;
    text-align: center;
    text-decoration: none;
    background-color: #469743;
    max-width: 37.313rem;
    font-size: 1.125rem;
    font-weight: bold;
    padding: 0.5rem 3rem;
    transition: all 0.5s ease;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export const Footer = styled.footer`
  margin: 0 auto;
  padding-bottom: 5rem;
  color: #fff;
  text-align: center;
  section {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 4.375rem;
  }

  p {
    text-align: center;
    .italic {
      font-style: italic;
    }
  }

  span {
    display: block;
    margin-top: 2rem;
    font-size: 12px;
  }
`;
