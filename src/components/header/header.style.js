import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
    background: transparent;
    height: 70px;
    display: flex;
    align-items: center;
`;

export const NavWrapper = styled.nav`
    ul {
        list-style: none;
        margin: 0px;
        padding: 0px;
    }
    li {
        display: inline-block;
        margin-right: 20px;
        overflow: hidden;
    }
`;

export const LinkWrapper = styled(Link)`
    font-weight: 600;
    font-size: 15px;
    line-height: 2.1;
    letter-spacing: 0.8px;
    position: relative;
    text-decoration: none;
    span {
        color: transparent;
        &:before {
            content: attr(data-text);
            position: absolute;
            transition: all 0.5s ease;
            color: #000;
            transform-origin: right bottom;
        }
        &:after {
            content: attr(data-text);
            position: absolute;
            transition: all 0.5s ease;
            left: 0;
            opacity: 0;
            transform: translateY(10px);
            transform-origin: center bottom;
            color: #000;
        }
    }
    &:hover {
        span:before {
            transform: translateY(-50px);
            opacity: 0;
        }
        span:after {
            transform: translateY(0px);
            opacity: 1;
        }
    }
`;
