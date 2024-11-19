import { Input } from "../../components/input";
import { Container, Form, Avatar } from "./style";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdAlternateEmail } from "react-icons/md";
import { CiCamera } from "react-icons/ci";

import { RiLockPasswordLine } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FaArrowAltCircleLeft />
          
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/danielgm23.png"
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <CiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input placeholder="Nome" type="text" icon={CiUser} />
        <Input placeholder="E-mail" type="text" icon={MdAlternateEmail} />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={RiLockPasswordLine}
        />
        <Input
          placeholder="Nova senha"
          type="password"
          icon={RiLockPasswordLine}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
