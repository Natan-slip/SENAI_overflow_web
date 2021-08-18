import { Container } from "./styles";

function Coments() {
    return (
        <Container>
            <header>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                <strong>
                    por Fulano de tal
                </strong>
                <p>
                    em 18/08/2021 às 8:23
                </p>
            </header>
            <p>Este é o comentário</p>
        </Container>
    );
}

export default Coments;