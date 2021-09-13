import { Container, FormContainer } from "./styles";
import Input from "../../components/Input";

function Register() {

    const handleInput = () => {}

    const handleSubmit = () => {}

    return (
        <Container>
            <FormContainer onSubmit={handleSubmit}>
                <h1>Registre-se ao</h1>
                <h1>SENAI-Overflow</h1>
                <Input label="Nome" required
                    type="nome" id="nome" handler={handleInput} />
                <Input label="E-mail" required
                    type="email" id="email" handler={handleInput} />
                <Input label="Senha" required
                    type="password" id="senha" handler={handleInput} />
                <button>Entrar</button>
            </FormContainer>
        </Container>
    );
}
export default Register;