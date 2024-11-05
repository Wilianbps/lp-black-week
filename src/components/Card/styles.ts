import { styled } from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 35rem;
  border: 1px solid #21252e;
  background: linear-gradient(159.99deg, rgba(33, 37, 46, 0.219) 10.27%, rgba(0, 0, 0, 0.3) 97.7%);
  border-radius: 14px;
  padding: 3.5rem 2rem;

  header {
    h4 {
      font-size: 1.375rem;
      color: #d80e0f;
    }

    div {
      color: #fff;
      .line-through {
        text-decoration: line-through;
      }

      .price {
        font-size: 54px;
        font-weight: 800;
      }
    }
  }

  a {
    width: 250px;
    margin: 0 auto;
    margin-top: 4.375rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    color: #000;
    padding: 10px 35px;
    border-radius: 50px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
  }

  section.children {
    margin-top: 2.375rem;
    color: #fff;

    ul {
      list-style-type: none;
      padding: 0;
    }
  }
`;
