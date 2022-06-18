import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
import reduxClear from "../../../services/reduxClear";
import GetPathUrl from "../../../utils/getPathUrl";
import CardPlanet from "../../card/cardPlanet";
import { useRouter } from "next/router";
import Pagination from "../../pagination";
import SkeletonLoading from "../../skeleton";
import { Style } from "./style";
const PlanetsPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const router = useRouter();
    const [disablePagination, setDisablePagination] = React.useState({
        next: false,
        prev: false,
    });
    const [planets, setPlanets] = React.useState(false);
    const handleChangePage = (params) => {
        setPlanets(false);
        setDisablePagination({
            next: true,
            prev: true,
        });
        fetchApi.getPlanetsList({ dispatch, params });
    };
    const handleShowDetail = (url) => {
        let asPath = GetPathUrl(url);
        router.push(asPath);
    };
    React.useEffect(() => {
        fetchApi.getPlanetsList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.planets?.isSuccess) {
            setPlanets(state.planets.data.results);
            setDisablePagination({
                next: state.planets.data.next !== null ? false : true,
                prev: state.planets.data.previous !== null ? false : true,
            });
            reduxClear.planetsClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <Style>
            <Container>
                <h2 className="title">Planets</h2>
                <div className="pagination">
                    <Pagination
                        disableNext={disablePagination.next}
                        disablePrev={disablePagination.prev}
                        handleChangePage={handleChangePage}
                    />
                </div>
                <div>
                    <Row>
                        {planets ? (
                            planets.map((item, key) => {
                                return (
                                    <Col sm={12} key={key}>
                                        <CardPlanet
                                            planet={item}
                                            action={handleShowDetail}
                                        />
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
