import styled from "styled-components";

export const ButtonPrimaryStyled = styled.button`
    font-size: 15px;
    letter-spacing: 0.8px;
    padding: 15px 50px;
    border: 2px solid #000;
    background: #000;
    color: #fff;
    border-radius: 100px;
    transition: all 0.4s ease;
    &:hover {
        background: transparent;
        color: #000;
        cursor: pointer;
    }
`;

export default ButtonPrimaryStyled;
