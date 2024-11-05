import { type ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  price: string;
  textButton: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { title, price, textButton, children } = props;
  return (
    <CardContainer>
      <header>
        <h4>{title}</h4>
        <div>
          <p><span className="line-through">De R$497</span> por</p>
          <p>R$ <span  className="price">{price}</span></p>
        </div>
      </header>
      <a href="">{textButton}</a>
      <section className="children">{children}</section>
    </CardContainer>
  );
}
