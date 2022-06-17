import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
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
    console.log(planets);
    return (
        <div>
            <Container>Planets Page</Container>
        </div>
    );
};
export default PlanetsPage;
