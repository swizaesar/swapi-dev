import serviceAction from "../ServiceApi";

const reduxClear = {
    starShipClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "starships",
        });
    },
    planetsClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "planets",
        });
    },
    peopleClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "people",
        });
    },
    filmsClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "films",
        });
    },

    // DETAIL
    starShipDetailClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "starshipDetail",
        });
    },
    planetDetailClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "planetDetail",
        });
    },
    peopleDetailClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "peopleDetail",
        });
    },
    filmDetailClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "filmDetail",
        });
    },
};
export default reduxClear;
