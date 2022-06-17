import serviceAction from "../ServiceApi";

const fetchApi = {
    getStarShipList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/starships",
            params: params,
            method: "GET",
            key: "starships",
        });
    },
    getPlanetsList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/planets",
            params: params,
            method: "GET",
            key: "planets",
        });
    },
    getPeopleList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/people",
            params: params,
            method: "GET",
            key: "people",
        });
    },
    getFilmsList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/films",
            params: params,
            method: "GET",
            key: "films",
        });
    },
};
export default fetchApi;
