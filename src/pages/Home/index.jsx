import { Container, Brand, Menu, Search, Content, NewNote } from "./style";

import { FaRegPlusSquare } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import { Section } from "../../components/Section";
import { Note } from "../../components/Note";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/input";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isactive />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="Nodejs" />
        </li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={CiSearch} />
      </Search>

      <Content>
        <Section title={"Minhas notas"}>
          <Note data={{
            title: 'React',
            tags: [
              {id: '1' ,name: 'react'},
              {id: '2' ,name: 'RocketSeat'}
            ]
          }} />
        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FaRegPlusSquare />
        Criar nota
      </NewNote>
    </Container>
  );
}
