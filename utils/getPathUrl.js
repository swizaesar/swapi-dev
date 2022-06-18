const GetPathUrl = (string) => {
    let url = "https://swapi.dev/api";
    return string.replace(url, "");
};
export default GetPathUrl;
