import serviceAction from "../ServiceApi";

const reduxClear = {
    starShipClear: ({ dispatch }) => {
        serviceAction(dispatch).reduxClear({
            type: "CLEAR",
            key: "starships",
        });
    },
};
export default reduxClear;
