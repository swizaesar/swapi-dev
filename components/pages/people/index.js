import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
const PeoplePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [people, setPeople] = React.useState(false);
    React.useEffect(() => {
        fetchApi.getPeopleList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.people?.isSuccess) {
            setPeople(state.people.data.results);
        }
    }, [state]);
    console.log(people);
    return (
        <div>
            <Container>People Page</Container>
        </div>
    );
};
export default PeoplePage;
