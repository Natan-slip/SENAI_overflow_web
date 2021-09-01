import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form `
    width: 500px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    box-shadow: 0px 0px 20px #00000055;

    > h1 {
        text-align: center;
    }

`;