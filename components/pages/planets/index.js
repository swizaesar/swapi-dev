import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
import CardPlanet from "../../card/cardPlanet";
import SkeletonLoading from "../../skeleton";
import Style from "./style";
const PlanetsPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [planets, setPlanets] = React.useState(false);
    React.useEffect(() => {
        fetchApi.getPlanetsList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.planets?.isSuccess) {
            setPlanets(state.planets.data.results);
        }
    }, [state]);
    return (
        <Style>
            <Container>
                <h2 className="title">Planets</h2>
                <div>
                    <Row>
                        {planets ? (
                            planets.map((item, key) => {
                                return (
                                    <Col sm={12} key={key}>
                                        <CardPlanet planet={item} />
                                    </Col>
                                );
                            })
                        ) : (
                            <React.Fragment>
                                <Col sm={12}>
                                    <SkeletonLoading
                                        height="200px"
                                        style={{ marginBottom: 15 }}
                                    />
                                </Col>
                                <Col sm={12}>
                                    <SkeletonLoading
                                        height="200px"
                                        style={{ marginBottom: 15 }}
                                    />
                                </Col>
                            </React.Fragment>
                        )}
                    </Row>
                </div>
            </Container>
        </Style>
    );
};
export default PlanetsPage;
