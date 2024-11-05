import { Header } from "../../components/Header";
import logo from "../../assets/logo_black.png";
import imageGuilherme from "../../assets/quem-e-guilherme-freire.png";
import checkTrue from "../../assets/check-true.png";
import checkNot from "../../assets/check-not.png";
import whiteBeltot from "../../assets/faixa-branca.png";
import redBeltot from "../../assets/faixa-vermelha.png";

import * as S from "./styles";
import { Card } from "../../components/Card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <section>
          <h3>
            Você seria capaz de apontar uma só causa para todos os seus
            problemas?
          </h3>

          <section className="text">
            <p>
              Muitas pessoas são governadas por por ideias das quais elas
              desconhecem a origem. Desenvolvem seus hábitos sem pensar no que
              estão praticando e sem saber como essas ideias surgiram e chegaram
              até elas.
            </p>

            <span className="bg-red">
              O problema é que ignorar o mal não nos livra das suas
              consequências.
            </span>
            <p>
              Talvez você seja uma das muitas pessoas que sofre com problemas
              para ser constante nos seus compromissos, para se concentrar nos
              estudos, para trabalhar bem, avançar na carreira, ser fiel aos
              seus princípios.
            </p>
            <p>
              Mas, se você investigar bem, verá que a solução dos seus
              principais problemas passa por um único lugar
            </p>
            <p>
              Foi por isso eu criei a imersão Crise & Virtude, onde vou te
              mostrar como um único princípio ordenador, presente na filosofia
              dos maiores gênios da história da humanidade, pode te ajudar a
              vencer as dificuldades que te impedem de alcançar seus objetivos
              no desenvolvimento intelectual e na vida prática cotidiana.
            </p>
          </section>

          <a href="">GARANTA SEU INGRESSO COM 90%OFF</a>
        </section>
      </S.TextInfo>
      <S.CardContainer>
        <header>
          <img src={logo} alt="" />
          <h3>O MENOR PREÇO DA HISTÓRIA</h3>
        </header>

        <section className="cards">
          <Card
            title="IMERSÃO ONLINE"
            price="29,90"
            textButton="QUERO O DESCONTO"
            discount
          >
            <ul className="small-list">
              <li>
                <img src={checkTrue} alt="" />{" "}
                <span>3 dias de evento online</span>
              </li>
              <li>
                <img src={checkNot} alt="" /> <p>Gravação por 1 ano</p>
              </li>
              <li>
                <img src={checkNot} alt="" /> <p>Material complementar</p>
              </li>
              <li>
                <img src={checkNot} alt="" /> <p>Acesso presencial</p>
              </li>
            </ul>
          </Card>
          <Card
            title="IMERSÃO ONLINE"
            price="19,70"
            subprice="197,00"
            textButton="QUERO O DESCONTO"
            discount
            installment
          >
            <ul className="small-list">
              <li>
                <img src={checkTrue} alt="" /> <p>3 dias de evento online</p>
              </li>
              <li>
                <img src={checkTrue} alt="" /> <p>Gravação por 1 ano</p>
              </li>
              <li>
                <img src={checkTrue} alt="" /> <p>Material complementar</p>
              </li>
              <li>
                <img src={checkNot} alt="" /> <p>Acesso presencial</p>
              </li>
            </ul>
          </Card>
          <Card
            title="IMERSÃO ONLINE"
            subtitle="[VAGAS LIMITADAS]"
            price="59,70"
            subprice="597,00"
            textButton="QUERO O DESCONTO"
            installment
          >
            <ul>
              <li>
                <img src={checkTrue} alt="" /> <p>3 dias de evento online</p>
              </li>
              <li>
                <img src={checkTrue} alt="" /> <span>Gravação por 1 ano</span>
              </li>
              <li>
                <img src={checkTrue} alt="" /> <p>Material complementar</p>
              </li>
              <li>
                <img src={checkTrue} alt="" />{" "}
                <p>
                  <span className="bold">ACESSO PRESENCIAL </span>em São Paulo
                </p>
              </li>
              <li>
                <img src={checkTrue} alt="" />{" "}
                <p>
                  <span className="bold">BÔNUS</span> Visita guiada à sede do
                  Filosofia do Zero
                </p>
              </li>
              <li>
                <img src={checkTrue} alt="" />{" "}
                <p>
                  <span className="bold">BÔNUS</span> Coquetel de abertura com
                  os professores
                </p>
              </li>
              <li>
                <img src={checkTrue} alt="" />{" "}
                <p>
                  <span className="bold">BÔNUS</span> Kit exclusivo do evento
                </p>
              </li>
            </ul>
          </Card>
        </section>
      </S.CardContainer>
      <S.InfoPersona>
        <section>
          <header>
            <h2>QUEM É</h2>
            <h2>GUILHERME FREIRE?</h2>
          </header>

          <section>
            <p>
              Guilherme Freire é mestre em filosofia pela PUC-SP, Fundador da
              Comunidade Filosofia do Zero e Co-Fundador da Sociedade Clássica
              Em Busca da Verdade, Professor, ministra aulas há mais de 10 anos
              pelo Brasil
            </p>
            <p>
              Foi coordenador do ISEP - Instituto Superior de Educação
              Personalizada.
            </p>
            <p>
              Atuou como Secretário Adjunto na Secretaria Nacional da Juventude
              do Brasil, bem como na Secretaria do Planejamento do Governo do
              Estado do Paraná.
            </p>
          </section>
        </section>
        <img src={imageGuilherme} alt="" width={461} />
      </S.InfoPersona>

      <S.InfoDoubt>
        <h4>Confira se a sua dúvida não está respondida abaixo:</h4>
        <Accordion type="single" collapsible className="max-w-[500px]  mt-14">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Como será aprogramação dos eventos?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como será aprogramação dos eventos?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Como será aprogramação dos eventos?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Como será aprogramação dos eventos?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <p>Ainda tenho dúvidas, alguém pode me ajudar?</p>
        <span>
          Claro que sim! Clique no botão abaixo para falar com alguém da minha
          equipe por WhatsApp
        </span>
        <a href="">QUERO O ATENDIMENTO DA EQUIPE NO WHATSAPP</a>
      </S.InfoDoubt>

      <S.Footer>
        <section>
          <img src={whiteBeltot} alt="" width="100%" />
          <img src={redBeltot} alt="" width="100%" />
        </section>

        <p>Todos os direitos reservados</p>
        <p className="italic">Guilherme Freire ©️ 2024</p>
        <span>POLÍTICA DE PRIVACIDADE</span>
      </S.Footer>
    </S.HomeContainer>
  );
}
