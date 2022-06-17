import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
import reduxClear from "../../../services/reduxClear";
import CardStarShip from "../../card/cardStarShip";
import Pagination from "../../pagination";
import SkeletonLoading from "../../skeleton";
import Style from "./style";
const StarShipsPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [disablePagination, setDisablePagination] = React.useState({
        next: false,
        prev: false,
    });
    const [starShips, setStarShips] = React.useState(false);
    const handleChangePage = (params) => {
        setStarShips(false);
        setDisablePagination({
            next: true,
            prev: true,
        });
        fetchApi.getStarShipList({ dispatch, params });
    };
    React.useEffect(() => {
        fetchApi.getStarShipList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.starships?.isSuccess) {
            setStarShips(state.starships.data.results);
            console.log(state.starships.data, "asdasd");
            setDisablePagination({
                next: state.starships.data.next !== null ? false : true,
                prev: state.starships.data.previous !== null ? false : true,
            });
            reduxClear.starShipClear({ dispatch });
        }
    }, [state, dispatch]);
    console.log(starShips);
    return (
        <Style>
            <Container>
                <h2 className="title">Star Ships</h2>
                <div className="pagination">
                    <Pagination
                        disableNext={disablePagination.next}
                        disablePrev={disablePagination.prev}
                        handleChangePage={handleChangePage}
                    />
                </div>
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
        </Style>
    );
};
export default StarShipsPage;
