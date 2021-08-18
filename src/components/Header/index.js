import { Container, IconSignOut } from "./styles";

import imgLogo from "../../assets/logo.jpg";


function Header() {

    return (
        <Container>
            <img src={imgLogo} />
            <input type="text" placeholder="Pesquisar" />
            <div>
                <IconSignOut />
            </div>
        </Container>
    );
}

export default Header;