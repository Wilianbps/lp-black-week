import { Header } from "../../components/Header";

import * as S from "./styles";

export function Home() {
  return (
    <S.HomeContainer>
      <Header />
      <S.Notice>
        <section>
          <div>
            <p>⚠️ AVISO IMPORTANTE ⚠️</p>
          </div>
          <p>
            Essa é uma promoção totalmente inédita, irrepetível e exclusiva do
            período de Black November do ano de 2024. Os ingressos da Imersão
            Crise & Virtude serão vendidos em lotes e estão sujeitos à variação
            de preço. Aproveite para garantir o seu acesso o quanto antes, pelo
            menor preço já praticado em aulas do professor Guilherme Freire.
          </p>
          <a href="">GARANTIR O MENOR PREÇO</a>
        </section>
      </S.Notice>

      <S.TextInfo>
        <h3>
          Você seria capaz de apontar uma só causa para todos os seus problemas?
        </h3>

        <section className="text">
          <p>
            Muitas pessoas são governadas por por ideias das quais elas
            desconhecem a origem. Desenvolvem seus hábitos sem pensar no que
            estão praticando e sem saber como essas ideias surgiram e chegaram
            até elas.
          </p>
          <p>
            Talvez você seja uma das muitas pessoas que sofre com problemas para
            ser constante nos seus compromissos, para se concentrar nos estudos,
            para trabalhar bem, avançar na carreira, ser fiel aos seus
            princípios.
          </p>
          <p>
            Mas, se você investigar bem, verá que a solução dos seus principais
            problemas passa por um único lugar
          </p>
          <p>
            Foi por isso eu criei a imersão Crise & Virtude, onde vou te mostrar
            como um único princípio ordenador, presente na filosofia dos maiores
            gênios da história da humanidade, pode te ajudar a vencer as
            dificuldades que te impedem de alcançar seus objetivos no
            desenvolvimento intelectual e na vida prática cotidiana.
          </p>
        </section>

        <a href="">GARANTA SEU INGRESSO COM 90%OFF</a>
      </S.TextInfo>
    </S.HomeContainer>
  );
}
