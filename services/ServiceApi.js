import axios from "axios";
// Service API
const serviceApi = async (options) => {
    const configAxios = {
        baseURL: "https://swapi.dev/api/",
    };
    const axiosConfig = axios.create(configAxios);
    return await axiosConfig(options)
        .then((res) => {
            return {
                response: res.data,
                success: true,
                error: false,
                key: options.key,
                type: res.status,
            };
        })
        .catch((err) => {
            return {
                response: err.data,
                success: false,
                error: true,
                key: options.key,
                type: err.status,
            };
        });
};
// Type Service Action Fetch API GET / POST
const fetchApi = async (dispatch, value) => {
    const result = await serviceApi(value);
    if (result) {
        dispatch({
            data: result.response,
            isError: result.error,
            isSuccess: result.success,
            key: value.key,
            type: result.type,
        });
    }
};
// Remove Redux state
const clearData = (dispatch, value) => {
    dispatch(value);
};
// Service Action Type
const serviceAction = (dispatch) => ({
    // Fetch API Type
    fetchApi: (value) => {
        fetchApi(dispatch, value);
    },
    // Clear State Redux
    reduxClear: (value) => {
        clearData(dispatch, value);
    },
});
export default serviceAction;
