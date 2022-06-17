import React from "react";
import Header from "../header";
import LayoutStyle from "./style";

const Layout = (props) => {
    return (
        <React.Fragment>
            <Header />
            <LayoutStyle>{props.children}</LayoutStyle>
        </React.Fragment>
    );
};
export default Layout;
