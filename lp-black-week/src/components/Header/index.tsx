import {  Container, Content, HeaderContainer } from "./styles";
import imagem from "../../assets/imagem-guilherme.png";
import logo from "../../assets/logo_black.png";
import faixaBlack from '../../assets/faixa-black.png'

export function Header() {
  return (
    <HeaderContainer>
      <header>
        <p>
          BLACK NOVEMBER | <span className="lighter-line">de R$497</span>
          <span className="lighter-line">por</span> R$29,90 - LOTE 01
        </p>
        <a href="">QUERO 90%OFF</a>
      </header>
      <Container>
        <Content>
          <section>
            <img src={logo} alt="Imagem do Guilherme Freire" />
            <p>
              22, 23 e 24 de Novembro |{" "}
              <span className="lighter-line">de R$497 </span>por R$29,90
            </p>
            <p>
              3 dias de imersão{" "}
              <span className="lighter-line">
                online na filosofia dos maiores pensadores da história, para
                compreender e curar os principais problemas que te afastam do
                sucesso na sua vida pessoal, profissional, familiar e
                financeira.
              </span>
            </p>
            <a href="">QUERO 90% DE DESCONTO</a>
          </section>

          <img src={imagem} alt="Logo Imersão Crise e Virtude" />

        </Content>
        <img className="faixa-black"src={faixaBlack} alt="" />
      </Container>
    </HeaderContainer>
  );
}
