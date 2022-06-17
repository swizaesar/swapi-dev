import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import fetchApi from "../../../services/fetchApi";
const FilmsPage = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    const [films, setFilms] = React.useState(false);
    React.useEffect(() => {
        fetchApi.getFilmsList({ dispatch });
    }, [dispatch]);
    React.useEffect(() => {
        if (state?.films?.isSuccess) {
            setFilms(state.films.data.results);
        }
    }, [state]);
    console.log(films);
    return (
        <div>
            <Container>Films Page</Container>
        </div>
    );
};
export default FilmsPage;
