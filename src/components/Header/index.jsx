import { Container, Profile, Logout} from "./style";

import {RiShutDownLine} from 'react-icons/ri'

export function Header() {
  return (
    <Container>
      <Profile to={"/profile"}> 
        <img src="https://github.com/danielgm23.png" />
        <div>
        <span>Bem-vindo</span>
        <strong>Daniel Galvão</strong>
      </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>

      </Logout>

    
    </Container>
  );
}
