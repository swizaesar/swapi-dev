import styled from "styled-components";
import { Button } from "reactstrap";
import { color } from "../../utils/variable";

const Style = styled(Button)`
    color: ${(props) =>
        props.color === "primary"
            ? "#fff"
            : props.color === "outline-primary"
            ? color.primary
            : "#fff"};
    background: ${(props) =>
        props.color === "primary"
            ? color.primary
            : props.color === "outline-primary"
            ? color.secondary
            : props.color};
    border: ${(props) =>
        props.color === "primary"
            ? `1px solid ${color.primary}`
            : props.color === "outline-primary"
            ? `1px solid  ${color.primary}`
            : `1px solid  ${props.color}`};
    font-weight: 600;
    transform: translateY(0px);
    transition: all 0.25s ease;
    padding-left: 15px;
    padding-right: 15px;
    font-size: ${(props) => (props.size ? props.size + "px" : "12px")};
    &:hover {
        color: ${(props) =>
            props.color === "primary"
                ? "#fff"
                : props.color === "outline-primary"
                ? color.primary
                : "#fff"};
        background: ${(props) =>
            props.color === "primary"
                ? color.primary
                : props.color === "outline-primary"
                ? color.secondary
                : props.color};
        border: ${(props) =>
            props.color === "primary"
                ? `1px solid ${color.primary}`
                : props.color === "outline-primary"
                ? `1px solid  ${color.primary}`
                : `1px solid  ${props.color}`};
        box-shadow: 0 4px 5px 0px rgba(0, 0, 0, 0.2);
    }
    &:focus {
        color: ${(props) =>
            props.color === "primary"
                ? "#fff"
                : props.color === "outline-primary"
                ? color.primary
                : "#fff"};
        background: ${(props) =>
            props.color === "primary"
                ? color.primary
                : props.color === "outline-primary"
                ? "#fff"
                : props.color};
        border: ${(props) =>
            props.color === "primary"
                ? `1px solid ${color.primary}`
                : props.color === "outline-primary"
                ? "1px solid  #fff"
                : `1px solid  ${props.color}`};
        opacity: 0.8;
        outline: unset;
        box-shadow: unset;
        transform: translateY(-1px);
    }
`;
export default Style;
