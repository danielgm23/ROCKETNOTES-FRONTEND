import { Container, Form, Background } from "./style";


import { MdAlternateEmail } from "react-icons/md";


import { RiLockPasswordLine } from "react-icons/ri";

import { Input } from "../../components/Input";
import { Button} from "../../components/Button"

import { Link } from "react-router-dom";
export function SignIn() {
  return <Container>
    <Form>
        <h1>Rocket Notes</h1>

        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu login</h2>

        <Input placeholder = "E-mail"
        type="text"
        icon={MdAlternateEmail  }
        />

<Input placeholder = "Senha"
        type="password"
        icon={RiLockPasswordLine   }
        />
        

        <Button title={"Entrar"}/>

      <Link to={"/register"}>Criar conta</Link>
    </Form>

    <Background/>
    

  </Container>;
}
