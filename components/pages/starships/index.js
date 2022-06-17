import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
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
            <Container>Start Ships Page</Container>
        </div>
    );
};
export default StarShipsPage;
