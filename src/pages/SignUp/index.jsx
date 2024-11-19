import { Container, Form, Background } from "./style";

import { MdAlternateEmail } from "react-icons/md";

import { Input } from "../../components/input";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={CiUser} />

        <Input placeholder="E-mail" type="text" icon={MdAlternateEmail} />

        <Input placeholder="Senha" type="password" icon={RiLockPasswordLine} />

        <Button title={"Cadastrar"} />

        <Link to={"/"}>Voltar para o login</Link>
      </Form>
    </Container>
  );
}
