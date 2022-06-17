import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
import CardStarShip from "../../card/cardStarShip";
import SkeletonLoading from "../../skeleton";
const StarShipsPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [starShips, setStarShips] = React.useState(false);
    React.useEffect(() => {
        fetchApi.getStarShipList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.starships?.isSuccess) {
            setStarShips(state.starships.data.results);
        }
    }, [state]);
    console.log(starShips);
    return (
        <div>
            <Container>
                <h2 className="title">Star Ships</h2>
                <div>
                    <Row>
                        {starShips ? (
                            starShips.map((item, key) => {
                                return (
                                    <Col sm={12} key={key}>
                                        <CardStarShip starship={item} />
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
        </div>
    );
};
export default StarShipsPage;
