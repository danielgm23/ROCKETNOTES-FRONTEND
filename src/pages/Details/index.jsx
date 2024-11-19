import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";
import { ButtonText } from "../../components/ButtonText";
export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title={"Excluir nota"} />

          <h1>Introducao ao React</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore,
            necessitatibus. Magnam commodi blanditiis unde inventore labore,
            error deleniti molestias laborum? Optio dignissimos fugiat
            exercitationem quod eveniet sequi. Assumenda, quo quidem?
          </p>
          <Section title="Links Uteis">
            <Links>
              <li>
                <a href="https://www.rocketseat.com.br/">
                  https://www.rocketseat.com.br/
                </a>
              </li>
              <li>
                <a href="https://www.rocketseat.com.br/">
                  https://www.rocketseat.com.br/
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
