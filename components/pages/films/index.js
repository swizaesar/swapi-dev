import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { useRouter } from "next/router";
import fetchApi from "../../../services/fetchApi";
import reduxClear from "../../../services/reduxClear";
import CardFilm from "../../card/cardFilm";
import Pagination from "../../pagination";
import SkeletonLoading from "../../skeleton";
import { Style } from "./style";
import GetPathUrl from "../../../utils/getPathUrl";
const FilmsPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const state = useSelector((state) => state);
    const [disablePagination, setDisablePagination] = React.useState({
        next: false,
        prev: false,
        totalData: 0,
    });
    const [films, setFilms] = React.useState(false);
    const handleChangePage = (params) => {
        setFilms(false);
        setDisablePagination({
            next: true,
            prev: true,
            totalData: 0,
        });
        fetchApi.getFilmsList({ dispatch, params });
    };
    const handleShowDetail = (url) => {
        let asPath = GetPathUrl(url);
        router.push(asPath);
    };
    React.useEffect(() => {
        fetchApi.getFilmsList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.films?.isSuccess) {
            setFilms(state.films.data.results);
            setDisablePagination({
                next: state.films.data.next !== null ? false : true,
                prev: state.films.data.previous !== null ? false : true,
                totalData: state.films.data.count,
            });
            reduxClear.filmsClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <Style>
            <Container>
                <h2 className="title">Films</h2>
                {disablePagination.totalData > 10 && (
                    <div className="pagination">
                        <Pagination
                            disableNext={disablePagination.next}
                            disablePrev={disablePagination.prev}
                            handleChangePage={handleChangePage}
                        />
                    </div>
                )}
                <div>
                    <Row>
                        {films ? (
                            films.map((item, key) => {
                                return (
                                    <Col sm={6} key={key}>
                                        <CardFilm
                                            film={item}
                                            action={handleShowDetail}
                                        />
                                    </Col>
                                );
                            })
                        ) : (
                            <React.Fragment>
                                <Col sm={6}>
                                    <SkeletonLoading
                                        height="200px"
                                        style={{ marginBottom: 15 }}
                                    />
                                </Col>
                                <Col sm={6}>
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
export default FilmsPage;
