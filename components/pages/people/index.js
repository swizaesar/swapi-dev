import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
import reduxClear from "../../../services/reduxClear";
import CardPeople from "../../card/cardPeople";
import Pagination from "../../pagination";
import SkeletonLoading from "../../skeleton";
import Style from "./style";
const PeoplePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [disablePagination, setDisablePagination] = React.useState({
        next: false,
        prev: false,
    });
    const [people, setPeople] = React.useState(false);
    const handleChangePage = (params) => {
        setPeople(false);
        setDisablePagination({
            next: true,
            prev: true,
        });
        fetchApi.getPeopleList({ dispatch, params });
    };
    React.useEffect(() => {
        fetchApi.getPeopleList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.people?.isSuccess) {
            setPeople(state.people.data.results);
            setDisablePagination({
                next: state.people.data.next !== null ? false : true,
                prev: state.people.data.previous !== null ? false : true,
            });
            reduxClear.peopleClear({ dispatch });
        }
    }, [state, dispatch]);
    return (
        <Style>
            <Container>
                <h2 className="title">People</h2>
                <div className="pagination">
                    <Pagination
                        disableNext={disablePagination.next}
                        disablePrev={disablePagination.prev}
                        handleChangePage={handleChangePage}
                    />
                </div>
                <div>
                    <Row>
                        {people ? (
                            people.map((item, key) => {
                                return (
                                    <Col sm={12} key={key}>
                                        <CardPeople people={item} />
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
export default PeoplePage;
