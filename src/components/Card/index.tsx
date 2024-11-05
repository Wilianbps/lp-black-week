import { type ReactNode } from "react";
import { CardContainer } from "./styles";

interface CardProps {
  title: string;
  subtitle?: string;
  price: string;
  subprice?: string;
  textButton: string;
  children: ReactNode;
  discount?: boolean;
  installment?: boolean;
}

export function Card(props: CardProps) {
  const {
    title,
    subtitle,
    price,
    subprice,
    textButton,
    children,
    discount,
    installment,
  } = props;
  return (
    <CardContainer>
      <header className="card-header">
        <h4>{title}</h4>
        {subtitle ? <h5>{subtitle}</h5> : <br />}
        <div>
          {discount ? (
            <p>
              <span className="line-through">De R$497</span> por
            </p>
          ) : (
            <br />
          )}

          <p>
            {installment && (
              <>
                <span style={{ fontWeight: "Bold" }}>12x</span>{" "}
                <span className="price">R${price}</span>
                <p>ou R${subprice} à vista</p>
              </>
            )}

            {!installment && discount && (
              <>
                <span className="price">R${price}</span>
                <span></span>
                <p><br/></p>
              </>
            )}
          </p>
        </div>
      </header>
      <a href="">{textButton}</a>
      <section className="children">{children}</section>
    </CardContainer>
  );
}
