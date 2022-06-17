import React from "react";
import { Container, Row, Col } from "reactstrap";
import { listHome } from "../../../utils/Helpers";
import CardName from "../../card/cardName";
const HomePage = () => {
    return (
        <div>
            <Container>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <Row>
                            {listHome.map((item, key) => {
                                return (
                                    <Col sm={6} key={key}>
                                        <CardName data={item} />
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default HomePage;
