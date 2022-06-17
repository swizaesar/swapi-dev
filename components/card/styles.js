import styled from "styled-components";
import { Card } from "reactstrap";
import { color } from "../../utils/variable";

export const CardNameStyle = styled(Card)`
    margin-bottom: calc(var(--bs-gutter-x) * 0.5 * 2);
    cursor: pointer;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 5px solid ${color.primary};
    color: ${color.primary};
    font-size: 24px;
    font-weight: 600;
    background-color: ${color.secondary};
    border-radius: 20px;
`;
