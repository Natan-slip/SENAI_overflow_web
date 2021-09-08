import { useState } from "react";

function Teste() {

    const [contador, setContador] = useState(0);

    const [nomes, setNomes] = useState(["Samuel", "Emerson"]);

    const [nome, setNome] = useState("");

    const handleSend = () => {
        setNomes([...nomes, nome]);

        setNome("");
    }

    return (
        <>
            <h1>{contador}</h1>

            <ul>
                {nomes.map(nome => {
                    return <li>{nome}</li>
                })}
            </ul>

            <button onClick={() => setContador(contador + 1)}>Contar</button>
            <br />
            <input type="text" onChange={(e) => setNome(e.target.value)} 
                value={nome} placeholder="Digite seu nome" />

            <br/>
            <button onClick={() => setNome("")}>Limpar</button>
            <button onClick={handleSend}>Enviar</button>
            
            <h2>{nome}</h2>
        </>
    )
}

export default Teste;