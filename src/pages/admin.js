import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../components/sidebar";

const Admin = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg={4}>
                        <Sidebar />
                    </Col>
                    <Col lg={8}></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Admin;
