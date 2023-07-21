import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FooterList, FooterText, FooterWrapper } from "./footer.style";
export const Footer = () => {
    return (
        <FooterWrapper>
            <Container>
                <Row>
                    <Col md={6}>
                        <FooterText>
                            &copy; 2010 -2021 emranweb. All Rights Reserved.
                        </FooterText>
                    </Col>
                    <Col md={6}>
                        <FooterList>
                            <li>
                                <FaFacebookF />
                            </li>
                            <li>
                                <FaLinkedinIn />
                            </li>
                            <li>
                                <FaTwitter />
                            </li>
                        </FooterList>
                    </Col>
                </Row>
            </Container>
        </FooterWrapper>
    );
};
