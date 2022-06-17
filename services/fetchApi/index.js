import serviceAction from "../ServiceApi";

const fetchApi = {
    getStarShipList: ({ dispatch, params }) => {
        serviceAction(dispatch).fetchApi({
            url: "/starships?page=4",
            params: params,
            method: "GET",
            key: "starship",
        });
    },
};
export default fetchApi;
