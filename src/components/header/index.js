import React from "react";
import { HeaderWrapper, NavWrapper, LinkWrapper } from "./header.style";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <Link to="/">
                                <img src={Logo} alt="logo" />
                            </Link>
                        </div>
                    </Col>
                    <Col>
                        <NavWrapper>
                            <ul>
                                <li>
                                    <LinkWrapper to="/">
                                        <span data-text="Home">Home</span>
                                    </LinkWrapper>
                                </li>
                                <li>
                                    <LinkWrapper to="#">
                                        <span data-text="About">About</span>
                                    </LinkWrapper>
                                </li>
                                <li>
                                    <LinkWrapper to="#">
                                        <span data-text="Portfolio">
                                            Portfolio
                                        </span>
                                    </LinkWrapper>
                                </li>
                                <li>
                                    <LinkWrapper to="#">
                                        <span data-text="Blogs">Blogs</span>
                                    </LinkWrapper>
                                </li>
                                <li>
                                    <LinkWrapper to="#">
                                        <span data-text="Contact">Contact</span>
                                    </LinkWrapper>
                                </li>
                            </ul>
                        </NavWrapper>
                    </Col>
                </Row>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
