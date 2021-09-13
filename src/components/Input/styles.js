import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;

  > input {
    border: 0;
    padding-left: 10px;
    border-radius: 3px;

    font-family: sans-serif;
  }

  > label {
    position: absolute;
    left: 10px;
    top: 0px;
    display: flex;
    align-items: center;

    transition: 0.2s ease-in-out;

    color: var(--textPrimary);
    cursor: text;

    pointer-events: none;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 16px;
  }

  > input:focus {
    border-bottom: 2px solid var(--primary);
  }

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
    font-size: 14px;
    color: var(--textPrimary);
    top: -25px;
    left: 0;
  }
`;
