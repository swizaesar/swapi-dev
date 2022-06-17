import React from "react";
import { CardNameStyle } from "./styles";
import { CardBody } from "reactstrap";

const CardName = ({ data }) => {
    return <CardNameStyle>{data.name}</CardNameStyle>;
};
export default CardName;
