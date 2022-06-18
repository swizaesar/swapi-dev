import React from "react";
import Button from "../button";
import PaginationStyle from "./style";

const Pagination = ({
    disablePrev = false,
    disableNext = false,
    handleChangePage = () => {},
}) => {
    const [page, setPage] = React.useState(1);
    const onClickPage = (key) => {
        if (key === "prev") {
            setPage(page - 1);
            handleChangePage({
                page: page - 1,
            });
        } else {
            setPage(page + 1);
            handleChangePage({
                page: page + 1,
            });
        }
    };
    return (
        <PaginationStyle>
            <Button
                color="outline-primary"
                className="prev"
                disabled={disablePrev}
                size={"18px"}
                onClick={() => onClickPage("prev")}
            >
                Prev
            </Button>
            <Button
                disabled={disableNext}
                size={"18px"}
                color="outline-primary"
                onClick={() => onClickPage("next")}
            >
                Next
            </Button>
        </PaginationStyle>
    );
};
export default Pagination;
