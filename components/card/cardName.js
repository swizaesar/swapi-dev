import React from "react";
import { CardNameStyle } from "./styles";
import Link from "next/link";

const CardName = ({ data }) => {
    return (
        <Link href={data.url}>
            <a>
                <CardNameStyle>{data.name}</CardNameStyle>
            </a>
        </Link>
    );
};
export default CardName;
